import { X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { sidebarLinks } from "./../data/sidebarLinks";

export default function Sidebar({
  sidebarOpen,
  setSidebarOpen,
}) {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setSidebarOpen(false)}
        className={`
          fixed inset-0 bg-black/40 z-40 lg:hidden transition-all duration-300
          ${
            sidebarOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
        
      />

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 right-0 h-screen w-[280px]
          bg-[#081028] text-white z-50
          transition-all duration-300

          ${
            sidebarOpen
              ? "translate-x-0"
              : "translate-x-full"
          }

          lg:translate-x-0
        `}
      >
        {/* Top */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">
              نظام CNC
            </h1>

            <p className="text-sm text-slate-400 mt-1">
              نظام إدارة الورش
            </p>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden"
          >
            <X />
          </button>
        </div>

        {/* Links */}
        <nav className="mt-6 px-4">
          <ul className="space-y-3">
            {sidebarLinks.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    onClick={() => setSidebarOpen(false)}
                    className={({ isActive }) =>
                      `
                      flex items-center gap-3 px-4 py-3 rounded-xl transition-all
                      ${
                        isActive
                          ? "bg-sky-500 text-white"
                          : "text-slate-300 hover:bg-white/10"
                      }
                    `
                    }
                  >
                    <Icon size={20} />

                    <span>{item.title}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}