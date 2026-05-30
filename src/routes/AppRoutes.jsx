import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./../layouts/DashboardLayout";
import Dashboard from "./../pages/dashboard_page/Dashboard";
import Orders from "./../pages/orders_page/Orders";
import OrderInfo from "./../pages/orders_page/components/OrderInfo";
import Inventory from "../pages/inventory_page/Inventory";
import Reports from "../pages/reports_page/Reports";
import SettingsPage from "../pages/settings_page/Settings";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/:id" element={<OrderInfo />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
}