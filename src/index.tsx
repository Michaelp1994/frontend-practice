import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Google from "./pages/google";
import Ableton from "./pages/ableton";
import DashboardLayout from "./pages/dashboard/layouts/DashboardLayout";
import Dashboard from "./pages/dashboard/pages/Dashboard";
import AdminDashboard from "./pages/dashboard";
import Login from "./pages/dashboard/pages/Login";
import App from "./pages/App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="google" element={<Google />} />
        <Route path="ableton" element={<Ableton />} />
        <Route path="dashboard" element={<AdminDashboard />}>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<DashboardLayout />}>
            <Route path="*" element={<Dashboard />} />
          </Route>
        </Route>
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root") as HTMLElement,
);
