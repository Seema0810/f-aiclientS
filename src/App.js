import React from "react";
import "./styles/AllDashboard.css";
import "./styles/dashboard.css";
import "./styles/layout.css";
import "./styles/navbar.css";
import "./styles/sales.css";
import "./styles/upload.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ProtectedRoute from "./pages/ProtectedRoute";
import ReportsType from "./pages/ReportsType";
import Sales from "./pages/Sales";
import Signup from "./pages/SignUp";
import Subscription from "./pages/Subscription";
import Statement from "./pages/Statement";
import UploadReports from "./pages/UploadReports";
import Report from "./pages/Reports";
import AccountProfile from "./pages/AccountProfile";
import Invoice from "./pages/Invoice";
// Import InputProvider
import { InputProvider } from "./context/InputProvider";

import LedgerCreation from "./pages/LedgerCreation";
import CombinedChart from "./components/SalesChart";
import MISSales from "./pages/MISSales";
import LedgerSetup from "./pages/LedgerSetup";
import Journal from "./pages/Journal";
// import AdjustmentEntry from "./pages/AdjustmentEntry";

const App = () => {
  console.log("App component called"); 
  return (
    <RecoilRoot>
      <BrowserRouter>
        <InputProvider>
          <Routes>
            <Route path="/signup" element={<Signup />} />            
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoute />}> 
            <Route path="/" element={<Dashboard />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/dashboard/:id" element={<ReportsType />} />
            <Route path="/dashboard/:id/sales/:id" element={<Sales />} />
            <Route path="/upload" element={<UploadReports />} />
            <Route path="/statement" element={<Statement />} />
            <Route path="/bankstatement" element={<Report />} />
            <Route path="/accountprofile" element={<AccountProfile />} />            
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/ledgersetup" element={<LedgerSetup />} />
            <Route path="/journalposting" element={<Journal />} />            
            </Route> 
          </Routes>
        </InputProvider>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
