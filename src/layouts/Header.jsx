import { Menu } from "lucide-react";

export default function Header({ setSidebarOpen }) {
  return (
    <header className="flex items-center justify-between px-6 py-2">
      <button
        onClick={() => setSidebarOpen(true)}
        className="lg:hidden"
      >
        <Menu size={28} />
      </button>
    </header>
  );
}