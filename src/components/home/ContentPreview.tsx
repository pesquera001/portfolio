import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { ArrowRight, Code, TrendingUp, Shield, ChevronDown, ChevronRight } from "lucide-react";
import CopyBlock from "../shared/CopyBlock";

function PreviewCard({ area, index }: { area: any; index: number }) {
  const [showInstructions, setShowInstructions] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      viewport={{ once: true, amount: 0.3 }}
      className="group"
    >
      <Link to={area.path} className="block bg-white h-full border border-metallic-silver/20 hover:border-cobalt-blue/50 transition-all duration-300 hover:shadow-lg">
        <div className="relative h-full flex flex-col overflow-hidden">
          {/* Image with overlay */}
          <div className="aspect-[16/10] relative overflow-hidden">
            <img 
              src={area.image} 
              alt={area.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" style={{borderRadius: 0}} />
            <div className="absolute inset-0 bg-[#232a32] group-hover:bg-light-steel-gray/50 transition-colors duration-300" style={{borderRadius: 0}}></div>
            <div className="absolute top-4 left-4">
              <area.icon className="w-8 h-8 text-white" />
            </div>
          </div>

          <div className="p-10 flex-grow flex flex-col">
            <h3 className="text-2xl font-normal text-steel-gray mb-2 font-sans uppercase tracking-tight">
              {area.title}
            </h3>
            <p className="text-sm font-bold text-cobalt-blue mb-4 uppercase tracking-wider font-mono">
              {area.subtitle}
            </p>
            <p className="text-steel-gray leading-relaxed mb-8 flex-grow font-mono">
              {area.description}
            </p>
            {/* Instructions toggle */}
            {area.instructions && (
              <div className="mb-4">
                <button
                  type="button"
                  className="flex items-center gap-2 text-cobalt-blue font-mono text-sm focus:outline-none"
                  onClick={e => { e.preventDefault(); setShowInstructions(v => !v); }}
                >
                  {showInstructions ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                  Usage
                </button>
                {showInstructions && (
                  <div className="mt-3 p-4 bg-[#232a32] border border-metallic-silver/20 font-mono text-steel-gray text-sm" style={{borderRadius: 0}}>
                    {area.instructions}
                  </div>
                )}
              </div>
            )}
            <div className="flex items-center gap-2 text-cobalt-blue font-bold group-hover:gap-3 transition-all duration-300 font-sans">
              <span>Explore</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ContentPreview() {
  const contentAreas = [
    {
      title: "LBO Architecture Engine",
      subtitle: "Excel VBA LBO Model Generator",
      description: "An Excel VBA tool that generates leveraged buyout models with detailed debt schedules, tax calculations, and cash flow projections. Inputs are customizable via a form to produce five-year financial forecasts and equity IRR estimates.",
      icon: Code,
      path: createPageUrl("Solutions"),
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      instructions: (
        <div>
          <div className="mb-4">Paste this VBA code into an Excel UserForm module. Fill out the form fields and click 'Run Model' to generate a 5-year LBO forecast and IRR.</div>
          <CopyBlock language="vb" content={`Private Sub btnRunModel_Click()
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
End Sub`} />
        </div>
      ),
    },
    {
      title: "Defense Tech Firm Analysis Framework",
      subtitle: "Custom diligence for dual-use AI startups",
      description: "Custom diligence framework for evaluating dual-use AI startups; built in Airtable + Python.",
      icon: TrendingUp,
      path: createPageUrl("Solutions"),
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
      instructions: null
    },
    {
      title: "Operational Value-Creation Model (Private Equity)",
      subtitle: "Simulated PE ops playbook",
      description: "Simulated PE firm playbook based on McKinsey ops efficiency KPIs + Bain cost optimization cases.",
      icon: Shield,
      path: createPageUrl("Solutions"),
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      instructions: null
    }
  ];

  return (
    <section className="py-32 bg-white border-t border-b border-border-gray">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-20"
        >
          <div className="w-24 h-1 bg-cobalt-blue mx-auto mb-10"></div>
          <h2 className="text-5xl md:text-6xl font-normal text-steel-gray mb-8 tracking-tight font-sans">
            Strategic Research & Tools
          </h2>
          <p className="text-2xl text-metallic-silver max-w-2xl mx-auto leading-relaxed font-sans font-medium">
            Specialized expertise in finance, technology, and defense sectors with quantitative analysis capabilities.
          </p>
        </motion.div>
        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          {contentAreas.map((area, index) => (
            <PreviewCard key={area.title} area={area} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
