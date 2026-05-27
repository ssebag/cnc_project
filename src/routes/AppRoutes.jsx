import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./../layouts/DashboardLayout";
import DashboardPage from "./../pages/DashboardPage";
import OrdersPage from "./../pages/OrdersPage";
import InventoryPage from "../pages/InventoryPage";
import ReportsPage from "../pages/ReportsPage";
import SettingsPage from "../pages/SettingsPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
}