import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Code } from "lucide-react";
import CopyBlock from "../components/shared/CopyBlock";

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
    id: 4,
    title: "Standard DCF Model",
    summary: "An Excel VBA tool that generates a detailed 5-year discounted cash flow (DCF) model tailored for private equity valuation. Users input key assumptions — including revenue growth, margins, CapEx, working capital changes, tax rate, and discount rate — via a structured input section. The model forecasts operating cash flows, calculates free cash flow to firm (FCFF), discounts future cash flows using WACC, and computes terminal value with Gordon Growth. Outputs include enterprise value, equity value after net debt adjustment, and implied IRR estimates.",
    code: `Sub GenerateDCFModel()
    Dim ws As Worksheet
    Dim i As Integer, startRow As Integer
    ' Delete sheet if it exists
    On Error Resume Next
    Application.DisplayAlerts = False
    Worksheets("DCF Model").Delete
    Application.DisplayAlerts = True
    On Error GoTo 0
    Set ws = ThisWorkbook.Worksheets.Add
    ws.Name = "DCF Model"
    ws.Range("A1").Value = "Private Equity Standard DCF Model"
    ws.Range("A1").Font.Bold = True
    ws.Range("A1").Font.Size = 16
    ' ===== Input Assumptions Section =====
    ws.Range("A3").Value = "Input Assumptions"
    ws.Range("A3").Font.Bold = True
    ws.Range("A3").Font.Size = 12
    Dim assumptions As Variant
    assumptions = Array( _
        Array("Revenue CAGR (%)", 8), _
        Array("EBITDA Margin (%)", 30), _
        Array("Depreciation & Amortization ($M)", 5), _
        Array("Capital Expenditures ($M)", 7), _
        Array("Change in Net Working Capital ($M)", 2), _
        Array("Tax Rate (%)", 25), _
        Array("Discount Rate / WACC (%)", 10), _
        Array("Terminal Growth Rate (%)", 3), _
        Array("Net Debt ($M)", 50), _
        Array("Shares Outstanding (M)", 10) _
    )
    startRow = 4
    For i = LBound(assumptions) To UBound(assumptions)
        ws.Cells(startRow + i, 1).Value = assumptions(i)(0)
        ws.Cells(startRow + i, 2).Value = assumptions(i)(1)
        ws.Cells(startRow + i, 2).NumberFormat = "0.00%"
        Select Case assumptions(i)(0)
            Case "Depreciation & Amortization ($M)", "Capital Expenditures ($M)", "Change in Net Working Capital ($M)", "Net Debt ($M)"
                ws.Cells(startRow + i, 2).NumberFormat = "$#,##0,,\"M\""
            Case "Shares Outstanding (M)"
                ws.Cells(startRow + i, 2).NumberFormat = "#,##0"
        End Select
    Next i
    Dim yearStart As Integer: yearStart = 2024
    Dim forecastYears As Integer: forecastYears = 5
    Dim yearRow As Integer: yearRow = startRow + UBound(assumptions) + 3
    ws.Cells(yearRow, 2).Value = "Year"
    ws.Cells(yearRow, 2).Font.Bold = True
    For i = 0 To forecastYears - 1
        ws.Cells(yearRow, 3 + i).Value = yearStart + i
        ws.Cells(yearRow, 3 + i).Font.Bold = True
        ws.Cells(yearRow, 3 + i).HorizontalAlignment = xlCenter
    Next i
    ws.Cells(yearRow + 1, 2).Value = "Revenue ($M)"
    ws.Cells(yearRow + 1, 2).Font.Bold = True
    ws.Cells(yearRow + 1, 3).Value = 100
    ws.Cells(yearRow + 1, 3).NumberFormat = "$#,##0,,\"M\""
    For i = 1 To forecastYears - 1
        ws.Cells(yearRow + 1, 3 + i).Formula = "=C" & (yearRow + 1) & "*(1+$B$4)"
        ws.Cells(yearRow + 1, 3 + i).NumberFormat = "$#,##0,,\"M\""
    Next i
    ws.Cells(yearRow + 2, 2).Value = "EBITDA ($M)"
    ws.Cells(yearRow + 2, 2).Font.Bold = True
    For i = 0 To forecastYears - 1
        ws.Cells(yearRow + 2, 3 + i).Formula = "=C" & (yearRow + 1 + 0) + i & "*$B$5"
        ws.Cells(yearRow + 2, 3 + i).NumberFormat = "$#,##0,,\"M\""
    Next i
    ws.Cells(yearRow + 3, 2).Value = "Depreciation & Amortization ($M)"
    ws.Cells(yearRow + 3, 2).Font.Bold = True
    For i = 0 To forecastYears - 1
        ws.Cells(yearRow + 3, 3 + i).Formula = "=$B$6"
        ws.Cells(yearRow + 3, 3 + i).NumberFormat = "$#,##0,,\"M\""
    Next i
    ws.Cells(yearRow + 4, 2).Value = "EBIT ($M)"
    ws.Cells(yearRow + 4, 2).Font.Bold = True
    For i = 0 To forecastYears - 1
        ws.Cells(yearRow + 4, 3 + i).Formula = "=D" & (yearRow + 2) + i & "-D" & (yearRow + 3) + i
        ws.Cells(yearRow + 4, 3 + i).NumberFormat = "$#,##0,,\"M\""
    Next i
    ws.Cells(yearRow + 5, 2).Value = "Taxes ($M)"
    ws.Cells(yearRow + 5, 2).Font.Bold = True
    For i = 0 To forecastYears - 1
        ws.Cells(yearRow + 5, 3 + i).Formula = "=D" & (yearRow + 4) + i & "*$B$7"
        ws.Cells(yearRow + 5, 3 + i).NumberFormat = "$#,##0,,\"M\""
    Next i
    ws.Cells(yearRow + 6, 2).Value = "NOPAT ($M)"
    ws.Cells(yearRow + 6, 2).Font.Bold = True
    For i = 0 To forecastYears - 1
        ws.Cells(yearRow + 6, 3 + i).Formula = "=D" & (yearRow + 4) + i & "-D" & (yearRow + 5) + i
        ws.Cells(yearRow + 6, 3 + i).NumberFormat = "$#,##0,,\"M\""
    Next i
    ws.Cells(yearRow + 7, 2).Value = "Capital Expenditures ($M)"
    ws.Cells(yearRow + 7, 2).Font.Bold = True
    For i = 0 To forecastYears - 1
        ws.Cells(yearRow + 7, 3 + i).Formula = "=$B$8"
        ws.Cells(yearRow + 7, 3 + i).NumberFormat = "$#,##0,,\"M\""
    Next i
    ws.Cells(yearRow + 8, 2).Value = "Change in Net Working Capital ($M)"
    ws.Cells(yearRow + 8, 2).Font.Bold = True
    For i = 0 To forecastYears - 1
        ws.Cells(yearRow + 8, 3 + i).Formula = "=$B$9"
        ws.Cells(yearRow + 8, 3 + i).NumberFormat = "$#,##0,,\"M\""
    Next i
    ws.Cells(yearRow + 9, 2).Value = "Free Cash Flow to Firm ($M)"
    ws.Range(ws.Cells(yearRow + 9, 2), ws.Cells(yearRow + 9, 2)).Font.Bold = True
    For i = 0 To forecastYears - 1
        ws.Cells(yearRow + 9, 3 + i).Formula = "=D" & (yearRow + 6) + i & "+D" & (yearRow + 3) + i & "-D" & (yearRow + 7) + i & "-D" & (yearRow + 8) + i
        ws.Cells(yearRow + 9, 3 + i).NumberFormat = "$#,##0,,\"M\""
    Next i
    ws.Cells(yearRow + 10, 2).Value = "Discount Factor"
    ws.Range(ws.Cells(yearRow + 10, 2), ws.Cells(yearRow + 10, 2)).Font.Bold = True
    For i = 0 To forecastYears - 1
        ws.Cells(yearRow + 10, 3 + i).Formula = "=(1+$B$10)^-" & (i + 1)
        ws.Cells(yearRow + 10, 3 + i).NumberFormat = "0.0000"
    Next i
    ws.Cells(yearRow + 11, 2).Value = "PV of FCFF ($M)"
    ws.Range(ws.Cells(yearRow + 11, 2), ws.Cells(yearRow + 11, 2)).Font.Bold = True
    For i = 0 To forecastYears - 1
        ws.Cells(yearRow + 11, 3 + i).Formula = "=D" & (yearRow + 9) + i & "*D" & (yearRow + 10) + i
        ws.Cells(yearRow + 11, 3 + i).NumberFormat = "$#,##0,,\"M\""
    Next i
    ws.Cells(yearRow + 13, 2).Value = "Terminal Value ($M)"
    ws.Cells(yearRow + 13, 2).Font.Bold = True
    ws.Cells(yearRow + 13, 3).Formula = "=D" & (yearRow + 9 + forecastYears - 1) & "*(1+$B$11)/($B$10-$B$11)"
    ws.Cells(yearRow + 13, 3).NumberFormat = "$#,##0,,\"M\""
    ws.Cells(yearRow + 14, 2).Value = "PV of Terminal Value ($M)"
    ws.Cells(yearRow + 14, 2).Font.Bold = True
    ws.Cells(yearRow + 14, 3).Formula = "=D" & (yearRow + 13) & "/(1+$B$10)^" & forecastYears
    ws.Cells(yearRow + 14, 3).NumberFormat = "$#,##0,,\"M\""
    ws.Cells(yearRow + 16, 2).Value = "Enterprise Value ($M)"
    ws.Cells(yearRow + 16, 2).Font.Bold = True
    ws.Cells(yearRow + 16, 3).Formula = "=SUM(D" & (yearRow + 11) & ":H" & (yearRow + 11) & ")+D" & (yearRow + 14)
    ws.Cells(yearRow + 16, 3).NumberFormat = "$#,##0,,\"M\""
    ws.Cells(yearRow + 17, 2).Value = "Less: Net Debt ($M)"
    ws.Cells(yearRow + 17, 2).Font.Bold = True
    ws.Cells(yearRow + 17, 3).Formula = "=$B$12"
    ws.Cells(yearRow + 17, 3).NumberFormat = "$#,##0,,\"M\""
    ws.Cells(yearRow + 18, 2).Value = "Equity Value ($M)"
    ws.Cells(yearRow + 18, 2).Font.Bold = True
    ws.Cells(yearRow + 18, 3).Formula = "=D" & (yearRow + 16) & "-D" & (yearRow + 17)
    ws.Cells(yearRow + 18, 3).NumberFormat = "$#,##0,,\"M\""
    ws.Cells(yearRow + 19, 2).Value = "Implied IRR (%)"
    ws.Cells(yearRow + 19, 2).Font.Bold = True
    ws.Cells(yearRow + 19, 3).Formula = "=IRR(D" & (yearRow + 18) & ":D" & (yearRow + 18 + forecastYears - 1) & ")"
    ws.Cells(yearRow + 19, 3).NumberFormat = "0.00%"
    ws.Range("A1:F" & yearRow + 19).AutoFit
    MsgBox "DCF Model worksheet generated successfully. Inputs are in columns A-B, forecasts in columns C-H, and calculations in columns I-L.", vbInformation
End Sub`,
    commentary: "Paste this VBA code into an Excel module. Run the macro to build a fully formatted DCF worksheet, then update inputs to analyze valuation scenarios efficiently.",
    tags: ["excel", "vba", "dcf", "valuation"],
    language: "vb",
    usage: "Paste this VBA code into an Excel module. Run the macro to build a fully formatted DCF worksheet, then update inputs to analyze valuation scenarios efficiently.",
    fullCode: `Sub GenerateDCFModel()
    Dim ws As Worksheet
    Dim i As Integer, startRow As Integer
    ' Delete sheet if it exists
    On Error Resume Next
    Application.DisplayAlerts = False
    Worksheets("DCF Model").Delete
    Application.DisplayAlerts = True
    On Error GoTo 0
    Set ws = ThisWorkbook.Worksheets.Add
    ws.Name = "DCF Model"
    ws.Range("A1").Value = "Private Equity Standard DCF Model"
    ws.Range("A1").Font.Bold = True
    ws.Range("A1").Font.Size = 16
    ' ===== Input Assumptions Section =====
    ws.Range("A3").Value = "Input Assumptions"
    ws.Range("A3").Font.Bold = True
    ws.Range("A3").Font.Size = 12
    Dim assumptions As Variant
    assumptions = Array( _
        Array("Revenue CAGR (%)", 8), _
        Array("EBITDA Margin (%)", 30), _
        Array("Depreciation & Amortization ($M)", 5), _
        Array("Capital Expenditures ($M)", 7), _
        Array("Change in Net Working Capital ($M)", 2), _
        Array("Tax Rate (%)", 25), _
        Array("Discount Rate / WACC (%)", 10), _
        Array("Terminal Growth Rate (%)", 3), _
        Array("Net Debt ($M)", 50), _
        Array("Shares Outstanding (M)", 10) _
    )
    startRow = 4
    For i = LBound(assumptions) To UBound(assumptions)
        ws.Cells(startRow + i, 1).Value = assumptions(i)(0)
        ws.Cells(startRow + i, 2).Value = assumptions(i)(1)
        ws.Cells(startRow + i, 2).NumberFormat = "0.00%"
        Select Case assumptions(i)(0)
            Case "Depreciation & Amortization ($M)", "Capital Expenditures ($M)", "Change in Net Working Capital ($M)", "Net Debt ($M)"
                ws.Cells(startRow + i, 2).NumberFormat = "$#,##0,,\"M\""
            Case "Shares Outstanding (M)"
                ws.Cells(startRow + i, 2).NumberFormat = "#,##0"
        End Select
    Next i
    Dim yearStart As Integer: yearStart = 2024
    Dim forecastYears As Integer: forecastYears = 5
    Dim yearRow As Integer: yearRow = startRow + UBound(assumptions) + 3
    ws.Cells(yearRow, 2).Value = "Year"
    ws.Cells(yearRow, 2).Font.Bold = True
    For i = 0 To forecastYears - 1
        ws.Cells(yearRow, 3 + i).Value = yearStart + i
        ws.Cells(yearRow, 3 + i).Font.Bold = True
        ws.Cells(yearRow, 3 + i).HorizontalAlignment = xlCenter
    Next i
    ws.Cells(yearRow + 1, 2).Value = "Revenue ($M)"
    ws.Cells(yearRow + 1, 2).Font.Bold = True
    ws.Cells(yearRow + 1, 3).Value = 100
    ws.Cells(yearRow + 1, 3).NumberFormat = "$#,##0,,\"M\""
    For i = 1 To forecastYears - 1
        ws.Cells(yearRow + 1, 3 + i).Formula = "=C" & (yearRow + 1) & "*(1+$B$4)"
        ws.Cells(yearRow + 1, 3 + i).NumberFormat = "$#,##0,,\"M\""
    Next i
    ws.Cells(yearRow + 2, 2).Value = "EBITDA ($M)"
    ws.Cells(yearRow + 2, 2).Font.Bold = True
    For i = 0 To forecastYears - 1
        ws.Cells(yearRow + 2, 3 + i).Formula = "=C" & (yearRow + 1 + 0) + i & "*$B$5"
        ws.Cells(yearRow + 2, 3 + i).NumberFormat = "$#,##0,,\"M\""
    Next i
    ws.Cells(yearRow + 3, 2).Value = "Depreciation & Amortization ($M)"
    ws.Cells(yearRow + 3, 2).Font.Bold = True
    For i = 0 To forecastYears - 1
        ws.Cells(yearRow + 3, 3 + i).Formula = "=$B$6"
        ws.Cells(yearRow + 3, 3 + i).NumberFormat = "$#,##0,,\"M\""
    Next i
    ws.Cells(yearRow + 4, 2).Value = "EBIT ($M)"
    ws.Cells(yearRow + 4, 2).Font.Bold = True
    For i = 0 To forecastYears - 1
        ws.Cells(yearRow + 4, 3 + i).Formula = "=D" & (yearRow + 2) + i & "-D" & (yearRow + 3) + i
        ws.Cells(yearRow + 4, 3 + i).NumberFormat = "$#,##0,,\"M\""
    Next i
    ws.Cells(yearRow + 5, 2).Value = "Taxes ($M)"
    ws.Cells(yearRow + 5, 2).Font.Bold = True
    For i = 0 To forecastYears - 1
        ws.Cells(yearRow + 5, 3 + i).Formula = "=D" & (yearRow + 4) + i & "*$B$7"
        ws.Cells(yearRow + 5, 3 + i).NumberFormat = "$#,##0,,\"M\""
    Next i
    ws.Cells(yearRow + 6, 2).Value = "NOPAT ($M)"
    ws.Cells(yearRow + 6, 2).Font.Bold = True
    For i = 0 To forecastYears - 1
        ws.Cells(yearRow + 6, 3 + i).Formula = "=D" & (yearRow + 4) + i & "-D" & (yearRow + 5) + i
        ws.Cells(yearRow + 6, 3 + i).NumberFormat = "$#,##0,,\"M\""
    Next i
    ws.Cells(yearRow + 7, 2).Value = "Capital Expenditures ($M)"
    ws.Cells(yearRow + 7, 2).Font.Bold = True
    For i = 0 To forecastYears - 1
        ws.Cells(yearRow + 7, 3 + i).Formula = "=$B$8"
        ws.Cells(yearRow + 7, 3 + i).NumberFormat = "$#,##0,,\"M\""
    Next i
    ws.Cells(yearRow + 8, 2).Value = "Change in Net Working Capital ($M)"
    ws.Cells(yearRow + 8, 2).Font.Bold = True
    For i = 0 To forecastYears - 1
        ws.Cells(yearRow + 8, 3 + i).Formula = "=$B$9"
        ws.Cells(yearRow + 8, 3 + i).NumberFormat = "$#,##0,,\"M\""
    Next i
    ws.Cells(yearRow + 9, 2).Value = "Free Cash Flow to Firm ($M)"
    ws.Range(ws.Cells(yearRow + 9, 2), ws.Cells(yearRow + 9, 2)).Font.Bold = True
    For i = 0 To forecastYears - 1
        ws.Cells(yearRow + 9, 3 + i).Formula = "=D" & (yearRow + 6) + i & "+D" & (yearRow + 3) + i & "-D" & (yearRow + 7) + i & "-D" & (yearRow + 8) + i
        ws.Cells(yearRow + 9, 3 + i).NumberFormat = "$#,##0,,\"M\""
    Next i
    ws.Cells(yearRow + 10, 2).Value = "Discount Factor"
    ws.Range(ws.Cells(yearRow + 10, 2), ws.Cells(yearRow + 10, 2)).Font.Bold = True
    For i = 0 To forecastYears - 1
        ws.Cells(yearRow + 10, 3 + i).Formula = "=(1+$B$10)^-" & (i + 1)
        ws.Cells(yearRow + 10, 3 + i).NumberFormat = "0.0000"
    Next i
    ws.Cells(yearRow + 11, 2).Value = "PV of FCFF ($M)"
    ws.Range(ws.Cells(yearRow + 11, 2), ws.Cells(yearRow + 11, 2)).Font.Bold = True
    For i = 0 To forecastYears - 1
        ws.Cells(yearRow + 11, 3 + i).Formula = "=D" & (yearRow + 9) + i & "*D" & (yearRow + 10) + i
        ws.Cells(yearRow + 11, 3 + i).NumberFormat = "$#,##0,,\"M\""
    Next i
    ws.Cells(yearRow + 13, 2).Value = "Terminal Value ($M)"
    ws.Cells(yearRow + 13, 2).Font.Bold = True
    ws.Cells(yearRow + 13, 3).Formula = "=D" & (yearRow + 9 + forecastYears - 1) & "*(1+$B$11)/($B$10-$B$11)"
    ws.Cells(yearRow + 13, 3).NumberFormat = "$#,##0,,\"M\""
    ws.Cells(yearRow + 14, 2).Value = "PV of Terminal Value ($M)"
    ws.Cells(yearRow + 14, 2).Font.Bold = True
    ws.Cells(yearRow + 14, 3).Formula = "=D" & (yearRow + 13) & "/(1+$B$10)^" & forecastYears
    ws.Cells(yearRow + 14, 3).NumberFormat = "$#,##0,,\"M\""
    ws.Cells(yearRow + 16, 2).Value = "Enterprise Value ($M)"
    ws.Cells(yearRow + 16, 2).Font.Bold = True
    ws.Cells(yearRow + 16, 3).Formula = "=SUM(D" & (yearRow + 11) & ":H" & (yearRow + 11) & ")+D" & (yearRow + 14)
    ws.Cells(yearRow + 16, 3).NumberFormat = "$#,##0,,\"M\""
    ws.Cells(yearRow + 17, 2).Value = "Less: Net Debt ($M)"
    ws.Cells(yearRow + 17, 2).Font.Bold = True
    ws.Cells(yearRow + 17, 3).Formula = "=$B$12"
    ws.Cells(yearRow + 17, 3).NumberFormat = "$#,##0,,\"M\""
    ws.Cells(yearRow + 18, 2).Value = "Equity Value ($M)"
    ws.Cells(yearRow + 18, 2).Font.Bold = True
    ws.Cells(yearRow + 18, 3).Formula = "=D" & (yearRow + 16) & "-D" & (yearRow + 17)
    ws.Cells(yearRow + 18, 3).NumberFormat = "$#,##0,,\"M\""
    ws.Cells(yearRow + 19, 2).Value = "Implied IRR (%)"
    ws.Cells(yearRow + 19, 2).Font.Bold = True
    ws.Cells(yearRow + 19, 3).Formula = "=IRR(D" & (yearRow + 18) & ":D" & (yearRow + 18 + forecastYears - 1) & ")"
    ws.Cells(yearRow + 19, 3).NumberFormat = "0.00%"
    ws.Range("A1:F" & yearRow + 19).AutoFit
    MsgBox "DCF Model worksheet generated successfully. Inputs are in columns A-B, forecasts in columns C-H, and calculations in columns I-L.", vbInformation
End Sub`,
  },
  {
    id: 2,
    title: "Defense Sector TAM Estimator",
    summary: "An Excel VBA tool that automates top-down and bottom-up total addressable market sizing using NAICS codes and DoD budget line items. Users input product or technology categories and growth rates through structured sheets or input forms. The tool outputs dynamic TAM, SAM, and SOM estimates to support market diligence.",
    code: `Sub GenerateDefenseTAMEstimator()
    Dim ws As Worksheet
    Dim lastRow As Long
    ' Add new worksheet
    On Error Resume Next
    Application.DisplayAlerts = False
    Worksheets("Defense TAM Estimator").Delete ' Remove if exists
    Application.DisplayAlerts = True
    On Error GoTo 0
    Set ws = ThisWorkbook.Worksheets.Add
    ws.Name = "Defense TAM Estimator"
    ' Setup headers
    ws.Range("A1").Value = "Defense Sector TAM Estimator"
    ws.Range("A1").Font.Bold = True
    ws.Range("A1").Font.Size = 14
    ws.Range("A3").Value = "Product / Technology"
    ws.Range("B3").Value = "NAICS Code"
    ws.Range("C3").Value = "Base Spend ($M, 2024)"
    ws.Range("D3").Value = "CAGR (%)"
    ws.Range("E3").Value = "SAM (%)"
    ws.Range("F3").Value = "SOM (%)"
    ws.Range("G3").Value = "TAM (2029) ($M)"
    ws.Range("H3").Value = "SAM (2029) ($M)"
    ws.Range("I3").Value = "SOM (2029) ($M)"
    ws.Range("A3:I3").Font.Bold = True
    ws.Range("A3:I3").Interior.Color = RGB(200, 200, 200)
    ws.Range("A4").Value = "Unmanned Aerial Systems"
    ws.Range("B4").Value = "336411"
    ws.Range("C4").Value = 750
    ws.Range("D4").Value = 7
    ws.Range("E4").Value = 30
    ws.Range("F4").Value = 10
    ws.Range("A5").Value = "Cybersecurity Software"
    ws.Range("B5").Value = "541512"
    ws.Range("C5").Value = 600
    ws.Range("D5").Value = 10
    ws.Range("E5").Value = 25
    ws.Range("F5").Value = 8
    ws.Range("A6").Value = "Tactical Communications"
    ws.Range("B6").Value = "517919"
    ws.Range("C6").Value = 900
    ws.Range("D6").Value = 5
    ws.Range("E6").Value = 35
    ws.Range("F6").Value = 12
    lastRow = 6
    Dim i As Long
    For i = 4 To lastRow
        ws.Cells(i, 7).Formula = "=C" & i & "*POWER(1+D" & i & "/100,5)"
        ws.Cells(i, 8).Formula = "=G" & i & "*E" & i & "/100"
        ws.Cells(i, 9).Formula = "=H" & i & "*F" & i & "/100"
    Next i
    ws.Range("A" & lastRow + 2).Value = "Totals:"
    ws.Range("A" & lastRow + 2).Font.Bold = True
    ws.Range("G" & lastRow + 2).Formula = "=SUM(G4:G" & lastRow & ")"
    ws.Range("H" & lastRow + 2).Formula = "=SUM(H4:H" & lastRow & ")"
    ws.Range("I" & lastRow + 2).Formula = "=SUM(I4:I" & lastRow & ")"
    ws.Range("G" & lastRow + 2 & ":I" & lastRow + 2).Font.Bold = True
    ws.Range("C4:C" & lastRow).NumberFormat = "$#,##0,,\"M\""
    ws.Range("G4:I" & lastRow + 2).NumberFormat = "$#,##0,,\"M\""
    ws.Range("D4:D" & lastRow).NumberFormat = "0.0%"
    ws.Range("E4:F" & lastRow).NumberFormat = "0.0%"
    ws.Columns("A:I").AutoFit
    MsgBox "Defense Sector TAM Estimator sheet generated successfully.", vbInformation
End Sub`,
    commentary: "Paste this VBA code into an Excel module. Run the macro to generate TAM estimation tables and growth projections.",
    tags: ["excel", "vba", "defense", "market-sizing"],
    language: "vb",
    usage: "Paste this VBA code into an Excel module. Run the macro to generate TAM estimation tables and growth projections.",
    fullCode: `Sub GenerateDefenseTAMEstimator()
    Dim ws As Worksheet
    Dim lastRow As Long
    ' Add new worksheet
    On Error Resume Next
    Application.DisplayAlerts = False
    Worksheets("Defense TAM Estimator").Delete ' Remove if exists
    Application.DisplayAlerts = True
    On Error GoTo 0
    Set ws = ThisWorkbook.Worksheets.Add
    ws.Name = "Defense TAM Estimator"
    ' Setup headers
    ws.Range("A1").Value = "Defense Sector TAM Estimator"
    ws.Range("A1").Font.Bold = True
    ws.Range("A1").Font.Size = 14
    ws.Range("A3").Value = "Product / Technology"
    ws.Range("B3").Value = "NAICS Code"
    ws.Range("C3").Value = "Base Spend ($M, 2024)"
    ws.Range("D3").Value = "CAGR (%)"
    ws.Range("E3").Value = "SAM (%)"
    ws.Range("F3").Value = "SOM (%)"
    ws.Range("G3").Value = "TAM (2029) ($M)"
    ws.Range("H3").Value = "SAM (2029) ($M)"
    ws.Range("I3").Value = "SOM (2029) ($M)"
    ws.Range("A3:I3").Font.Bold = True
    ws.Range("A3:I3").Interior.Color = RGB(200, 200, 200)
    ws.Range("A4").Value = "Unmanned Aerial Systems"
    ws.Range("B4").Value = "336411"
    ws.Range("C4").Value = 750
    ws.Range("D4").Value = 7
    ws.Range("E4").Value = 30
    ws.Range("F4").Value = 10
    ws.Range("A5").Value = "Cybersecurity Software"
    ws.Range("B5").Value = "541512"
    ws.Range("C5").Value = 600
    ws.Range("D5").Value = 10
    ws.Range("E5").Value = 25
    ws.Range("F5").Value = 8
    ws.Range("A6").Value = "Tactical Communications"
    ws.Range("B6").Value = "517919"
    ws.Range("C6").Value = 900
    ws.Range("D6").Value = 5
    ws.Range("E6").Value = 35
    ws.Range("F6").Value = 12
    lastRow = 6
    Dim i As Long
    For i = 4 To lastRow
        ws.Cells(i, 7).Formula = "=C" & i & "*POWER(1+D" & i & "/100,5)"
        ws.Cells(i, 8).Formula = "=G" & i & "*E" & i & "/100"
        ws.Cells(i, 9).Formula = "=H" & i & "*F" & i & "/100"
    Next i
    ws.Range("A" & lastRow + 2).Value = "Totals:"
    ws.Range("A" & lastRow + 2).Font.Bold = True
    ws.Range("G" & lastRow + 2).Formula = "=SUM(G4:G" & lastRow & ")"
    ws.Range("H" & lastRow + 2).Formula = "=SUM(H4:H" & lastRow & ")"
    ws.Range("I" & lastRow + 2).Formula = "=SUM(I4:I" & lastRow & ")"
    ws.Range("G" & lastRow + 2 & ":I" & lastRow + 2).Font.Bold = True
    ws.Range("C4:C" & lastRow).NumberFormat = "$#,##0,,\"M\""
    ws.Range("G4:I" & lastRow + 2).NumberFormat = "$#,##0,,\"M\""
    ws.Range("D4:D" & lastRow).NumberFormat = "0.0%"
    ws.Range("E4:F" & lastRow).NumberFormat = "0.0%"
    ws.Columns("A:I").AutoFit
    MsgBox "Defense Sector TAM Estimator sheet generated successfully.", vbInformation
End Sub`,
  },
  {
    id: 3,
    title: "OpEx Efficiency Matrix",
    summary: "An Excel VBA tool that benchmarks operational expenses across portfolio companies and flags anomalies against industry standards. Users input company financials by department into structured sheets. The tool outputs variance heatmaps and highlights over- or under-spending relative to benchmarks.",
    code: `Sub GenerateOpExEfficiencyMatrix()
    Dim ws As Worksheet
    Dim lastRow As Long
    Dim i As Long
    ' Delete existing sheet if present
    On Error Resume Next
    Application.DisplayAlerts = False
    Worksheets("OpEx Efficiency Matrix").Delete
    Application.DisplayAlerts = True
    On Error GoTo 0
    Set ws = ThisWorkbook.Worksheets.Add
    ws.Name = "OpEx Efficiency Matrix"
    ' Set headers
    ws.Range("A1").Value = "OpEx Efficiency Matrix"
    ws.Range("A1").Font.Bold = True
    ws.Range("A1").Font.Size = 14
    ws.Range("A3").Value = "Department"
    ws.Range("B3").Value = "PortfolioCo Spend ($M)"
    ws.Range("C3").Value = "Benchmark Median ($M)"
    ws.Range("D3").Value = "Variance ($M)"
    ws.Range("E3").Value = "Variance (%)"
    ws.Range("F3").Value = "Action Notes"
    ws.Range("A3:F3").Font.Bold = True
    ws.Range("A3:F3").Interior.Color = RGB(200, 200, 200)
    Dim departments As Variant
    Dim portfolioSpend As Variant
    Dim benchmarkSpend As Variant
    departments = Array("Sales", "Engineering", "G&A", "Operations", "R&D")
    portfolioSpend = Array(18.5, 12.0, 15.0, 10.0, 13.0)
    benchmarkSpend = Array(15.0, 13.5, 14.0, 11.0, 13.5)
    lastRow = UBound(departments) + 4
    For i = 0 To UBound(departments)
        ws.Cells(i + 4, 1).Value = departments(i)
        ws.Cells(i + 4, 2).Value = portfolioSpend(i)
        ws.Cells(i + 4, 3).Value = benchmarkSpend(i)
        ws.Cells(i + 4, 4).Formula = "=B" & (i + 4) & "-C" & (i + 4)
        ws.Cells(i + 4, 5).Formula = "=IF(C" & (i + 4) & "=0,0,(B" & (i + 4) & "-C" & (i + 4) & ")/C" & (i + 4) & ")"
    Next i
    ws.Range("B4:C" & lastRow).NumberFormat = "$#,##0.0"
    ws.Range("D4:D" & lastRow).NumberFormat = "$#,##0.0"
    ws.Range("E4:E" & lastRow).NumberFormat = "0.0%"
    ws.Cells(lastRow + 1, 1).Value = "Totals"
    ws.Cells(lastRow + 1, 2).Formula = "=SUM(B4:B" & lastRow & ")"
    ws.Cells(lastRow + 1, 3).Formula = "=SUM(C4:C" & lastRow & ")"
    ws.Cells(lastRow + 1, 4).Formula = "=SUM(D4:D" & lastRow & ")"
    ws.Cells(lastRow + 1, 5).Formula = "=IF(C" & (lastRow + 1) & "=0,0,(B" & (lastRow + 1) & "-C" & (lastRow + 1) & ")/C" & (lastRow + 1) & ")"
    ws.Range("A" & lastRow + 1 & ":F" & lastRow + 1).Font.Bold = True
    ws.Columns("A:F").AutoFit
    For i = 4 To lastRow
        Dim varianceCell As Range
        Set varianceCell = ws.Cells(i, 5)
        If IsNumeric(varianceCell.Value) Then
            If varianceCell.Value > 0.10 Then
                ws.Cells(i, 6).Value = "Above median, review cost drivers"
            ElseIf varianceCell.Value < -0.10 Then
                ws.Cells(i, 6).Value = "Below median, check for underinvestment"
            Else
                ws.Cells(i, 6).Value = "Within normal range"
            End If
        End If
    Next i
    Dim formatRange As Range
    Set formatRange = ws.Range("E4:E" & lastRow)
    With formatRange.FormatConditions.Add(Type:=xlCellValue, Operator:=xlGreater, Formula1:="=0.10")
        .Interior.Color = RGB(255, 199, 206)
        .Font.Color = RGB(156, 0, 6)
    End With
    With formatRange.FormatConditions.Add(Type:=xlCellValue, Operator:=xlLess, Formula1:="=-0.10")
        .Interior.Color = RGB(198, 239, 206)
        .Font.Color = RGB(0, 97, 0)
    End With
    MsgBox "OpEx Efficiency Matrix sheet generated successfully.", vbInformation
End Sub`,
    commentary: "Paste this VBA code into a standard Excel module. Run the macro to auto-generate benchmarking sheets with variance calculations and visual flags.",
    tags: ["excel", "vba", "opex", "benchmarking"],
    language: "vb",
    usage: "Paste this VBA code into a standard Excel module. Run the macro to auto-generate benchmarking sheets with variance calculations and visual flags.",
    fullCode: `Sub GenerateOpExEfficiencyMatrix()
    Dim ws As Worksheet
    Dim lastRow As Long
    Dim i As Long
    ' Delete existing sheet if present
    On Error Resume Next
    Application.DisplayAlerts = False
    Worksheets("OpEx Efficiency Matrix").Delete
    Application.DisplayAlerts = True
    On Error GoTo 0
    Set ws = ThisWorkbook.Worksheets.Add
    ws.Name = "OpEx Efficiency Matrix"
    ' Set headers
    ws.Range("A1").Value = "OpEx Efficiency Matrix"
    ws.Range("A1").Font.Bold = True
    ws.Range("A1").Font.Size = 14
    ws.Range("A3").Value = "Department"
    ws.Range("B3").Value = "PortfolioCo Spend ($M)"
    ws.Range("C3").Value = "Benchmark Median ($M)"
    ws.Range("D3").Value = "Variance ($M)"
    ws.Range("E3").Value = "Variance (%)"
    ws.Range("F3").Value = "Action Notes"
    ws.Range("A3:F3").Font.Bold = True
    ws.Range("A3:F3").Interior.Color = RGB(200, 200, 200)
    Dim departments As Variant
    Dim portfolioSpend As Variant
    Dim benchmarkSpend As Variant
    departments = Array("Sales", "Engineering", "G&A", "Operations", "R&D")
    portfolioSpend = Array(18.5, 12.0, 15.0, 10.0, 13.0)
    benchmarkSpend = Array(15.0, 13.5, 14.0, 11.0, 13.5)
    lastRow = UBound(departments) + 4
    For i = 0 To UBound(departments)
        ws.Cells(i + 4, 1).Value = departments(i)
        ws.Cells(i + 4, 2).Value = portfolioSpend(i)
        ws.Cells(i + 4, 3).Value = benchmarkSpend(i)
        ws.Cells(i + 4, 4).Formula = "=B" & (i + 4) & "-C" & (i + 4)
        ws.Cells(i + 4, 5).Formula = "=IF(C" & (i + 4) & "=0,0,(B" & (i + 4) & "-C" & (i + 4) & ")/C" & (i + 4) & ")"
    Next i
    ws.Range("B4:C" & lastRow).NumberFormat = "$#,##0.0"
    ws.Range("D4:D" & lastRow).NumberFormat = "$#,##0.0"
    ws.Range("E4:E" & lastRow).NumberFormat = "0.0%"
    ws.Cells(lastRow + 1, 1).Value = "Totals"
    ws.Cells(lastRow + 1, 2).Formula = "=SUM(B4:B" & lastRow & ")"
    ws.Cells(lastRow + 1, 3).Formula = "=SUM(C4:C" & lastRow & ")"
    ws.Cells(lastRow + 1, 4).Formula = "=SUM(D4:D" & lastRow & ")"
    ws.Cells(lastRow + 1, 5).Formula = "=IF(C" & (lastRow + 1) & "=0,0,(B" & (lastRow + 1) & "-C" & (lastRow + 1) & ")/C" & (lastRow + 1) & ")"
    ws.Range("A" & lastRow + 1 & ":F" & lastRow + 1).Font.Bold = True
    ws.Columns("A:F").AutoFit
    For i = 4 To lastRow
        Dim varianceCell As Range
        Set varianceCell = ws.Cells(i, 5)
        If IsNumeric(varianceCell.Value) Then
            If varianceCell.Value > 0.10 Then
                ws.Cells(i, 6).Value = "Above median, review cost drivers"
            ElseIf varianceCell.Value < -0.10 Then
                ws.Cells(i, 6).Value = "Below median, check for underinvestment"
            Else
                ws.Cells(i, 6).Value = "Within normal range"
            End If
        End If
    Next i
    Dim formatRange As Range
    Set formatRange = ws.Range("E4:E" & lastRow)
    With formatRange.FormatConditions.Add(Type:=xlCellValue, Operator:=xlGreater, Formula1:="=0.10")
        .Interior.Color = RGB(255, 199, 206)
        .Font.Color = RGB(156, 0, 6)
    End With
    With formatRange.FormatConditions.Add(Type:=xlCellValue, Operator:=xlLess, Formula1:="=-0.10")
        .Interior.Color = RGB(198, 239, 206)
        .Font.Color = RGB(0, 97, 0)
    End With
    MsgBox "OpEx Efficiency Matrix sheet generated successfully.", vbInformation
End Sub`,
  },
  {
    id: 5,
    title: "Debt Stress & Liquidity Analyzer",
    summary: "An Excel VBA tool that evaluates a company's financial health by analyzing debt levels, liquidity, cash flow, and bankruptcy risk. It calculates a distress score, assigns a risk category, and provides clear, data-driven insights to help investors quickly assess financial stability.",
    code: `Sub AnalyzeSingleCompany()
    Dim ebitda As Double, interest As Double, debt As Double, cashFlow As Double
    Dim currentRatio As Double, altmanZ As Double, debtEquity As Double
    Dim ebitdaMargin As Double, revenue As Double
    Dim distressScore As Double
    Dim flag As String
    Dim insights As String
    ebitda = Nz(Range("B3").Value)
    interest = Nz(Range("B4").Value)
    debt = Nz(Range("B5").Value)
    cashFlow = Nz(Range("B6").Value)
    currentRatio = Nz(Range("B7").Value)
    altmanZ = Nz(Range("B8").Value)
    debtEquity = Nz(Range("B9").Value)
    ebitdaMargin = Nz(Range("B10").Value)
    revenue = Nz(Range("B11").Value)
    distressScore = 0
    insights = ""
    Dim interestCoverage As Double
    If interest <> 0 Then
        interestCoverage = ebitda / interest
    ElseIf ebitda > 0 Then
        interestCoverage = 100
    Else
        interestCoverage = 0
    End If
    Dim debtToEBITDA As Double
    If ebitda <> 0 Then
        debtToEBITDA = debt / ebitda
    Else
        debtToEBITDA = 100
    End If
    ' Interest Coverage
    If interestCoverage < 1.5 Then
        distressScore = distressScore + 25
        insights = insights & "Interest Coverage: " & Format(interestCoverage, "0.00") & " - Very poor, risk of default" & vbNewLine
    ElseIf interestCoverage < 3 Then
        distressScore = distressScore + 10
        insights = insights & "Interest Coverage: " & Format(interestCoverage, "0.00") & " - Moderate, monitor carefully" & vbNewLine
    Else
        distressScore = distressScore - 5
        insights = insights & "Interest Coverage: " & Format(interestCoverage, "0.00") & " - Strong, manageable debt costs" & vbNewLine
    End If
    ' Debt to EBITDA
    If debtToEBITDA > 6 Then
        distressScore = distressScore + 25
        insights = insights & "Debt to EBITDA: " & Format(debtToEBITDA, "0.00") & " - Very high leverage, elevated risk" & vbNewLine
    ElseIf debtToEBITDA > 4 Then
        distressScore = distressScore + 15
        insights = insights & "Debt to EBITDA: " & Format(debtToEBITDA, "0.00") & " - High leverage, consider debt reduction" & vbNewLine
    ElseIf debtToEBITDA > 2 Then
        distressScore = distressScore + 5
        insights = insights & "Debt to EBITDA: " & Format(debtToEBITDA, "0.00") & " - Moderate leverage" & vbNewLine
    Else
        distressScore = distressScore - 5
        insights = insights & "Debt to EBITDA: " & Format(debtToEBITDA, "0.00") & " - Low leverage, good flexibility" & vbNewLine
    End If
    ' Cash Flow
    If cashFlow < 0 Then
        distressScore = distressScore + 20
        insights = insights & "Operating Cash Flow: " & Format(cashFlow, "$#,##0") & " - Negative, liquidity risk" & vbNewLine
    ElseIf cashFlow < ebitda * 0.5 Then
        distressScore = distressScore + 8
        insights = insights & "Operating Cash Flow: " & Format(cashFlow, "$#,##0") & " - Low relative to EBITDA, monitor working capital" & vbNewLine
    Else
        distressScore = distressScore - 5
        insights = insights & "Operating Cash Flow: " & Format(cashFlow, "$#,##0") & " - Healthy cash flow" & vbNewLine
    End If
    ' Current Ratio
    If currentRatio < 1 Then
        distressScore = distressScore + 15
        insights = insights & "Current Ratio: " & Format(currentRatio, "0.00") & " - Below 1, liquidity concerns" & vbNewLine
    ElseIf currentRatio < 1.5 Then
        distressScore = distressScore + 7
        insights = insights & "Current Ratio: " & Format(currentRatio, "0.00") & " - Slightly low, monitor liquidity" & vbNewLine
    Else
        distressScore = distressScore - 5
        insights = insights & "Current Ratio: " & Format(currentRatio, "0.00") & " - Good liquidity" & vbNewLine
    End If
    ' Altman Z-Score
    If altmanZ < 1.8 Then
        distressScore = distressScore + 20
        insights = insights & "Altman Z-Score: " & Format(altmanZ, "0.00") & " - High risk of bankruptcy" & vbNewLine
    ElseIf altmanZ < 3 Then
        distressScore = distressScore + 10
        insights = insights & "Altman Z-Score: " & Format(altmanZ, "0.00") & " - Moderate bankruptcy risk" & vbNewLine
    Else
        distressScore = distressScore - 10
        insights = insights & "Altman Z-Score: " & Format(altmanZ, "0.00") & " - Low bankruptcy risk" & vbNewLine
    End If
    ' Debt to Equity
    If debtEquity > 3 Then
        distressScore = distressScore + 15
        insights = insights & "Debt to Equity: " & Format(debtEquity, "0.00") & " - Very high leverage" & vbNewLine
    ElseIf debtEquity > 2 Then
        distressScore = distressScore + 8
        insights = insights & "Debt to Equity: " & Format(debtEquity, "0.00") & " - Elevated leverage" & vbNewLine
    Else
        distressScore = distressScore - 5
        insights = insights & "Debt to Equity: " & Format(debtEquity, "0.00") & " - Healthy leverage" & vbNewLine
    End If
    ' EBITDA Margin
    If ebitdaMargin < 5 Then
        distressScore = distressScore + 10
        insights = insights & "EBITDA Margin: " & Format(ebitdaMargin, "0.00") & "% - Very low, operational inefficiency" & vbNewLine
    ElseIf ebitdaMargin < 10 Then
        distressScore = distressScore + 5
        insights = insights & "EBITDA Margin: " & Format(ebitdaMargin, "0.00") & "% - Moderate" & vbNewLine
    Else
        distressScore = distressScore - 5
        insights = insights & "EBITDA Margin: " & Format(ebitdaMargin, "0.00") & "% - Strong profitability" & vbNewLine
    End If
    ' Debt to Revenue
    If revenue > 0 Then
        Dim debtToRevenue As Double
        debtToRevenue = debt / revenue
        If debtToRevenue > 3 Then
            distressScore = distressScore + 10
            insights = insights & "Debt to Revenue: " & Format(debtToRevenue, "0.00") & " - Very high, unsustainable" & vbNewLine
        ElseIf debtToRevenue > 2 Then
            distressScore = distressScore + 5
            insights = insights & "Debt to Revenue: " & Format(debtToRevenue, "0.00") & " - Elevated" & vbNewLine
        Else
            distressScore = distressScore - 3
            insights = insights & "Debt to Revenue: " & Format(debtToRevenue, "0.00") & " - Manageable" & vbNewLine
        End If
    End If
    ' Risk Flag
    If distressScore >= 70 Then
        flag = "High Risk"
    ElseIf distressScore >= 40 Then
        flag = "Moderate Risk"
    Else
        flag = "Low Risk"
    End If
    ' Output
    Range("B13").Value = Round(distressScore, 2)
    Range("B14").Value = flag
    Range("B16").Value = insights
    MsgBox "Analysis complete. Results in B13, B14, B16."
End Sub

Function Nz(val) As Double
    If IsNumeric(val) Then Nz = val Else Nz = 0
End Function
`,
    commentary: "Paste this VBA code into an Excel module. Run the macro to analyze company financials and generate a distress score with detailed insights.",
    tags: ["excel", "vba", "liquidity", "risk", "analysis"],
    language: "vb",
    usage: "Paste this VBA code into an Excel module. Run the macro to analyze company financials and generate a distress score with detailed insights.",
    fullCode: `Sub AnalyzeSingleCompany()
    Dim ebitda As Double, interest As Double, debt As Double, cashFlow As Double
    Dim currentRatio As Double, altmanZ As Double, debtEquity As Double
    Dim ebitdaMargin As Double, revenue As Double
    Dim distressScore As Double
    Dim flag As String
    Dim insights As String
    ebitda = Nz(Range("B3").Value)
    interest = Nz(Range("B4").Value)
    debt = Nz(Range("B5").Value)
    cashFlow = Nz(Range("B6").Value)
    currentRatio = Nz(Range("B7").Value)
    altmanZ = Nz(Range("B8").Value)
    debtEquity = Nz(Range("B9").Value)
    ebitdaMargin = Nz(Range("B10").Value)
    revenue = Nz(Range("B11").Value)
    distressScore = 0
    insights = ""
    Dim interestCoverage As Double
    If interest <> 0 Then
        interestCoverage = ebitda / interest
    ElseIf ebitda > 0 Then
        interestCoverage = 100
    Else
        interestCoverage = 0
    End If
    Dim debtToEBITDA As Double
    If ebitda <> 0 Then
        debtToEBITDA = debt / ebitda
    Else
        debtToEBITDA = 100
    End If
    ' Interest Coverage
    If interestCoverage < 1.5 Then
        distressScore = distressScore + 25
        insights = insights & "Interest Coverage: " & Format(interestCoverage, "0.00") & " - Very poor, risk of default" & vbNewLine
    ElseIf interestCoverage < 3 Then
        distressScore = distressScore + 10
        insights = insights & "Interest Coverage: " & Format(interestCoverage, "0.00") & " - Moderate, monitor carefully" & vbNewLine
    Else
        distressScore = distressScore - 5
        insights = insights & "Interest Coverage: " & Format(interestCoverage, "0.00") & " - Strong, manageable debt costs" & vbNewLine
    End If
    ' Debt to EBITDA
    If debtToEBITDA > 6 Then
        distressScore = distressScore + 25
        insights = insights & "Debt to EBITDA: " & Format(debtToEBITDA, "0.00") & " - Very high leverage, elevated risk" & vbNewLine
    ElseIf debtToEBITDA > 4 Then
        distressScore = distressScore + 15
        insights = insights & "Debt to EBITDA: " & Format(debtToEBITDA, "0.00") & " - High leverage, consider debt reduction" & vbNewLine
    ElseIf debtToEBITDA > 2 Then
        distressScore = distressScore + 5
        insights = insights & "Debt to EBITDA: " & Format(debtToEBITDA, "0.00") & " - Moderate leverage" & vbNewLine
    Else
        distressScore = distressScore - 5
        insights = insights & "Debt to EBITDA: " & Format(debtToEBITDA, "0.00") & " - Low leverage, good flexibility" & vbNewLine
    End If
    ' Cash Flow
    If cashFlow < 0 Then
        distressScore = distressScore + 20
        insights = insights & "Operating Cash Flow: " & Format(cashFlow, "$#,##0") & " - Negative, liquidity risk" & vbNewLine
    ElseIf cashFlow < ebitda * 0.5 Then
        distressScore = distressScore + 8
        insights = insights & "Operating Cash Flow: " & Format(cashFlow, "$#,##0") & " - Low relative to EBITDA, monitor working capital" & vbNewLine
    Else
        distressScore = distressScore - 5
        insights = insights & "Operating Cash Flow: " & Format(cashFlow, "$#,##0") & " - Healthy cash flow" & vbNewLine
    End If
    ' Current Ratio
    If currentRatio < 1 Then
        distressScore = distressScore + 15
        insights = insights & "Current Ratio: " & Format(currentRatio, "0.00") & " - Below 1, liquidity concerns" & vbNewLine
    ElseIf currentRatio < 1.5 Then
        distressScore = distressScore + 7
        insights = insights & "Current Ratio: " & Format(currentRatio, "0.00") & " - Slightly low, monitor liquidity" & vbNewLine
    Else
        distressScore = distressScore - 5
        insights = insights & "Current Ratio: " & Format(currentRatio, "0.00") & " - Good liquidity" & vbNewLine
    End If
    ' Altman Z-Score
    If altmanZ < 1.8 Then
        distressScore = distressScore + 20
        insights = insights & "Altman Z-Score: " & Format(altmanZ, "0.00") & " - High risk of bankruptcy" & vbNewLine
    ElseIf altmanZ < 3 Then
        distressScore = distressScore + 10
        insights = insights & "Altman Z-Score: " & Format(altmanZ, "0.00") & " - Moderate bankruptcy risk" & vbNewLine
    Else
        distressScore = distressScore - 10
        insights = insights & "Altman Z-Score: " & Format(altmanZ, "0.00") & " - Low bankruptcy risk" & vbNewLine
    End If
    ' Debt to Equity
    If debtEquity > 3 Then
        distressScore = distressScore + 15
        insights = insights & "Debt to Equity: " & Format(debtEquity, "0.00") & " - Very high leverage" & vbNewLine
    ElseIf debtEquity > 2 Then
        distressScore = distressScore + 8
        insights = insights & "Debt to Equity: " & Format(debtEquity, "0.00") & " - Elevated leverage" & vbNewLine
    Else
        distressScore = distressScore - 5
        insights = insights & "Debt to Equity: " & Format(debtEquity, "0.00") & " - Healthy leverage" & vbNewLine
    End If
    ' EBITDA Margin
    If ebitdaMargin < 5 Then
        distressScore = distressScore + 10
        insights = insights & "EBITDA Margin: " & Format(ebitdaMargin, "0.00") & "% - Very low, operational inefficiency" & vbNewLine
    ElseIf ebitdaMargin < 10 Then
        distressScore = distressScore + 5
        insights = insights & "EBITDA Margin: " & Format(ebitdaMargin, "0.00") & "% - Moderate" & vbNewLine
    Else
        distressScore = distressScore - 5
        insights = insights & "EBITDA Margin: " & Format(ebitdaMargin, "0.00") & "% - Strong profitability" & vbNewLine
    End If
    ' Debt to Revenue
    If revenue > 0 Then
        Dim debtToRevenue As Double
        debtToRevenue = debt / revenue
        If debtToRevenue > 3 Then
            distressScore = distressScore + 10
            insights = insights & "Debt to Revenue: " & Format(debtToRevenue, "0.00") & " - Very high, unsustainable" & vbNewLine
        ElseIf debtToRevenue > 2 Then
            distressScore = distressScore + 5
            insights = insights & "Debt to Revenue: " & Format(debtToRevenue, "0.00") & " - Elevated" & vbNewLine
        Else
            distressScore = distressScore - 3
            insights = insights & "Debt to Revenue: " & Format(debtToRevenue, "0.00") & " - Manageable" & vbNewLine
        End If
    End If
    ' Risk Flag
    If distressScore >= 70 Then
        flag = "High Risk"
    ElseIf distressScore >= 40 Then
        flag = "Moderate Risk"
    Else
        flag = "Low Risk"
    End If
    ' Output
    Range("B13").Value = Round(distressScore, 2)
    Range("B14").Value = flag
    Range("B16").Value = insights
    MsgBox "Analysis complete. Results in B13, B14, B16."
End Sub

Function Nz(val) As Double
    If IsNumeric(val) Then Nz = val Else Nz = 0
End Function`,
  },
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
    <div className="min-h-screen bg-[#232a32] font-sans">
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
            Modeling
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
                  className="bg-white p-8 border border-metallic-silver/20 hover:border-bright-blue transition-colors duration-300"
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
                    <div>
                      <div
                        className="overflow-y-auto overflow-x-hidden"
                        style={{ maxHeight: 'calc(1.5em * 9 + 2rem)', minHeight: 'calc(1.5em * 9)', background: '#232a32', borderRadius: 0 }}
                      >
                        <CopyBlock content={solution.fullCode} language={solution.language} />
                      </div>
                      <div className="p-4 pt-2 mb-0" style={{borderRadius: 0}}>{solution.usage}</div>
                    </div>
                  ) : (
                    <div>
                      <div
                        className="overflow-y-auto overflow-x-hidden"
                        style={{ maxHeight: 'calc(1.5em * 9 + 2rem)', minHeight: 'calc(1.5em * 9)', background: '#232a32', borderRadius: 0 }}
                      >
                        <CopyBlock content={solution.code} language={solution.language} />
                      </div>
                    </div>
                  )}
                  {solution.commentary && (
                    <div className="mt-6 bg-light-steel-gray/5 p-6 border border-metallic-silver/20 rounded-lg">
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
