import React from "react";
import { PanelLeftClose, Menu } from "lucide-react";

export default function Header({ toggleSidebar }) {
  return (
    <div className="flex items-center gap-3">
      {/* Desktop Sidebar Toggle */}
      <button
        onClick={toggleSidebar}
        className="hidden lg:inline p-2 rounded-md hover:bg-blue-100 dark:hover:bg-blue-900 transition"
        title="Toggle Sidebar"
      >
        <PanelLeftClose size={20} className="text-blue-600 dark:text-blue-300" />
      </button>

      {/* Mobile Sidebar Toggle */}
      <button
        onClick={toggleSidebar}
        className="inline lg:hidden p-2 rounded-md hover:bg-blue-100 dark:hover:bg-blue-900 transition"
        title="Open Sidebar"
      >
        <Menu size={20} className="text-blue-600 dark:text-blue-300" />
      </button>
    </div>
  );
}
