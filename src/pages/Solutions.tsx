import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Code } from "lucide-react";
import CopyBlock from "../components/shared/CopyBlock";
import { ChevronDown, ChevronRight } from "lucide-react";

// Demo data for solutions
const demoSolutions = [
  {
    id: 1,
    title: "LBO Architecture Engine",
    summary: "An Excel VBA tool that generates leveraged buyout models with detailed debt schedules, tax calculations, and cash flow projections. Inputs are customizable via a form to produce five-year financial forecasts and equity IRR estimates.",
    code: `Private Sub btnRunModel_Click()
    ' ... (VBA code omitted for brevity, use full code from previous message) ...
End Sub`,
    commentary: "Paste this VBA code into an Excel UserForm module. Fill out the form fields and click 'Run Model' to generate a 5-year LBO forecast and IRR.",
    tags: ["excel", "vba", "lbo", "finance"],
    language: "vb",
    featured: true,
    usage: `Paste this VBA code into an Excel UserForm module. Fill out the form fields and click 'Run Model' to generate a 5-year LBO forecast and IRR.`,
    fullCode: `Private Sub btnRunModel_Click()
    Dim purchasePrice As Double
    Dim entryEBITDA As Double
    Dim revGrowth As Double
    Dim ebitdaMargin As Double
    Dim leverage As Double
    Dim interestRate As Double
    Dim taxRate As Double
    Dim capExPct As Double
    Dim wcPct As Double
    
    Dim debt As Double
    Dim equity As Double
    
    Dim year As Integer
    Dim revenue(1 To 5) As Double
    Dim ebitda(1 To 5) As Double
    Dim interestExpense(1 To 5) As Double
    Dim principalPayment(1 To 5) As Double
    Dim debtBalance(0 To 5) As Double
    Dim ebt(1 To 5) As Double
    Dim taxes(1 To 5) As Double
    Dim netIncome(1 To 5) As Double
    Dim capEx(1 To 5) As Double
    Dim changeWC(1 To 5) As Double
    Dim freeCashFlow(1 To 5) As Double
    Dim equityCashFlows(0 To 5) As Double
    Dim irr As Double
    
    ' Validate and read inputs from the form
    On Error GoTo InputError
    purchasePrice = CDbl(Me.txtPurchasePrice.Value)
    entryEBITDA = CDbl(Me.txtEBITDA.Value)
    revGrowth = CDbl(Me.txtRevGrowth.Value) / 100
    ebitdaMargin = CDbl(Me.txtEBITDAMargin.Value) / 100
    leverage = CDbl(Me.txtLeverage.Value)
    interestRate = CDbl(Me.txtInterestRate.Value) / 100
    taxRate = CDbl(Me.txtTaxRate.Value) / 100
    capExPct = CDbl(Me.txtCapEx.Value) / 100
    wcPct = CDbl(Me.txtWC.Value) / 100
    On Error GoTo 0
    
    ' Calculate initial debt and equity
    debt = leverage * entryEBITDA
    equity = purchasePrice - debt
    
    debtBalance(0) = debt
    
    ' Project revenue and EBITDA for 5 years
    revenue(1) = purchasePrice
    ebitda(1) = revenue(1) * ebitdaMargin
    
    For year = 2 To 5
        revenue(year) = revenue(year - 1) * (1 + revGrowth)
        ebitda(year) = revenue(year) * ebitdaMargin
    Next year
    
    ' CapEx and Working Capital
    For year = 1 To 5
        capEx(year) = revenue(year) * capExPct
        changeWC(year) = revenue(year) * wcPct
    Next year
    
    ' Debt amortization (equal principal payments)
    Dim principalPayAnnual As Double
    principalPayAnnual = debt / 5
    
    For year = 1 To 5
        interestExpense(year) = debtBalance(year - 1) * interestRate
        principalPayment(year) = principalPayAnnual
        debtBalance(year) = debtBalance(year - 1) - principalPayment(year)
        ebt(year) = ebitda(year) - interestExpense(year)
        taxes(year) = Application.Max(0, ebt(year) * taxRate)
        netIncome(year) = ebt(year) - taxes(year)
        freeCashFlow(year) = netIncome(year) + interestExpense(year) - capEx(year) - changeWC(year) - principalPayment(year)
    Next year
    
    equityCashFlows(0) = -equity
    For year = 1 To 5
        equityCashFlows(year) = freeCashFlow(year)
    Next year
    
    Dim i As Integer
    Dim arr() As Double
    ReDim arr(0 To 5)
    For i = 0 To 5
        arr(i) = equityCashFlows(i)
    Next i
    
    irr = Application.WorksheetFunction.Irr(arr)
    
    ' Output results
    Dim outputRow As Integer: outputRow = 10
    With ActiveSheet
        .Cells(outputRow, 1).Value = "Year"
        .Cells(outputRow, 2).Value = "Revenue"
        .Cells(outputRow, 3).Value = "EBITDA"
        .Cells(outputRow, 4).Value = "Interest Expense"
        .Cells(outputRow, 5).Value = "Principal Payment"
        .Cells(outputRow, 6).Value = "Debt Balance"
        .Cells(outputRow, 7).Value = "EBT"
        .Cells(outputRow, 8).Value = "Taxes"
        .Cells(outputRow, 9).Value = "Net Income"
        .Cells(outputRow, 10).Value = "CapEx"
        .Cells(outputRow, 11).Value = "Change in Working Capital"
        .Cells(outputRow, 12).Value = "Free Cash Flow to Equity"
        
        For year = 1 To 5
            .Cells(outputRow + year, 1).Value = year
            .Cells(outputRow + year, 2).Value = revenue(year)
            .Cells(outputRow + year, 3).Value = ebitda(year)
            .Cells(outputRow + year, 4).Value = interestExpense(year)
            .Cells(outputRow + year, 5).Value = principalPayment(year)
            .Cells(outputRow + year, 6).Value = debtBalance(year)
            .Cells(outputRow + year, 7).Value = ebt(year)
            .Cells(outputRow + year, 8).Value = taxes(year)
            .Cells(outputRow + year, 9).Value = netIncome(year)
            .Cells(outputRow + year, 10).Value = capEx(year)
            .Cells(outputRow + year, 11).Value = changeWC(year)
            .Cells(outputRow + year, 12).Value = freeCashFlow(year)
        Next year
        
        .Cells(outputRow + 7, 1).Value = "Initial Equity Investment"
        .Cells(outputRow + 7, 2).Value = equity
        
        .Cells(outputRow + 8, 1).Value = "Estimated IRR"
        .Cells(outputRow + 8, 2).Value = Format(irr, "Percent")
    End With
    
    MsgBox "Model completed! Estimated IRR: " & Format(irr, "Percent"), vbInformation, "Done"
    
    Unload Me
    Exit Sub

InputError:
    MsgBox "Please enter valid numeric values in all input fields.", vbExclamation, "Input Error"
End Sub`,
  },
  {
    id: "2",
    title: "Market Data API Wrapper",
    summary: "Reusable TypeScript module for fetching and normalizing financial market data from multiple APIs.",
    code: `export async function fetchMarketData() {\n  // ...rest of code...\n}`,
    language: "typescript",
    tags: ["typescript", "api", "finance"],
    commentary: "Abstracts away API differences and provides a unified data interface for analytics dashboards.",
  },
  // Add more demo solutions as needed
];

const languages = ["all", "python", "javascript", "typescript", "bash", "sql", "other"];

const Solutions: React.FC = () => {
  const [solutions] = useState(demoSolutions);
  const [filteredSolutions, setFilteredSolutions] = useState(demoSolutions);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("all");

  useEffect(() => {
    filterSolutions();
    // eslint-disable-next-line
  }, [solutions, searchTerm, selectedLanguage]);

  const filterSolutions = () => {
    let filtered = solutions;
    if (searchTerm) {
      filtered = filtered.filter(solution =>
        solution.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        solution.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        solution.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    if (selectedLanguage !== "all") {
      filtered = filtered.filter(solution => solution.language === selectedLanguage);
    }
    setFilteredSolutions(filtered);
  };

  return (
    <div className="min-h-screen bg-steel-gray font-sans">
      <div className="max-w-7xl mx-auto px-8 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="w-20 h-1 bg-cobalt-blue mx-auto mb-8"></div>
          <h1 className="text-5xl md:text-6xl font-normal text-white mb-6 tracking-tight font-sans">
            Projects
          </h1>
          <p className="text-lg text-metallic-silver max-w-2xl mx-auto leading-relaxed">
            Clean, efficient code solutions with detailed breakdowns and reusable components.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white p-6 mb-12 border border-metallic-silver/20"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-light-steel-gray w-5 h-5" />
                <input
                  placeholder="Search solutions or technologies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white border border-metallic-silver/20 focus:border-cobalt-blue text-steel-gray placeholder-light-steel-gray rounded-lg w-full py-2"
                />
              </div>
            </div>
            <select
              value={selectedLanguage}
              onChange={e => setSelectedLanguage(e.target.value)}
              className="w-full md:w-48 bg-white border border-metallic-silver/20 text-steel-gray rounded-lg py-2"
            >
              {languages.map(language => (
                <option key={language} value={language}>
                  {language === "all" ? "All Languages" : language.charAt(0).toUpperCase() + language.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Solutions List */}
        <AnimatePresence mode="wait">
          {filteredSolutions.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-metallic-silver text-lg">No solutions found matching your criteria.</p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {filteredSolutions.map((solution, index) => (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-8 border border-metallic-silver/20 hover:border-cobalt-blue/50 transition-colors duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                    <div className="flex-1 mb-4 md:mb-0">
                      <div className="flex items-center gap-3 mb-2">
                        <Code className="w-5 h-5 text-cobalt-blue" />
                        <h2 className="text-2xl font-normal text-steel-gray font-sans">
                          {solution.title}
                        </h2>
                      </div>
                      <p className="text-light-steel-gray leading-relaxed">
                        {solution.summary}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="border border-metallic-silver text-light-steel-gray bg-light-steel-gray/5 rounded px-3 py-1 text-sm">
                        {solution.language}
                      </span>
                    </div>
                  </div>
                  {solution.tags && solution.tags.length > 0 && (
                    <div className="flex items-center gap-2 mb-6">
                      <div className="flex flex-wrap gap-2">
                        {solution.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="bg-light-steel-gray/10 text-light-steel-gray border border-metallic-silver/20 rounded px-2 py-1 text-xs">{tag}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  {solution.featured ? (
                    <div className="mb-6">
                      <div
                        className="overflow-y-auto overflow-x-hidden"
                        style={{ maxHeight: 'calc(1.5em * 7 + 2rem)', minHeight: 'calc(1.5em * 7)', background: 'inherit', borderRadius: 0 }}
                      >
                        <CopyBlock content={solution.fullCode} language={solution.language} />
                      </div>
                      <div className="p-4 pt-2" style={{borderRadius: 0}}>{solution.usage}</div>
                    </div>
                  ) : (
                    <div className="mb-6">
                      <CopyBlock content={solution.code} language={solution.language} />
                    </div>
                  )}
                  {solution.commentary && (
                    <div className="bg-light-steel-gray/5 p-6 border border-metallic-silver/20 rounded-lg">
                      <h3 className="text-sm font-normal text-cobalt-blue mb-3 tracking-wider uppercase font-sans">
                        Approach & Commentary
                      </h3>
                      <p className="text-light-steel-gray leading-relaxed">
                        {solution.commentary}
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Solutions;
