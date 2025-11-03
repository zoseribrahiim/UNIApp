import React from "react";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  CalendarDays,
  Megaphone,
  Users,
  User,
} from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation(); // نعرف المسار الحالي
  const navItems = [
    { name: "Dashboard", path: "/dashboard", icon: <LayoutDashboard size={20} /> },
    { name: "Subjects", path: "/subjects", icon: <BookOpen size={20} /> },
    { name: "Schedule", path: "/schedule", icon: <CalendarDays size={20} /> },
    { name: "Announcements", path: "/announcements", icon: <Megaphone size={20} /> },
    { name: "Faculty", path: "/faculty", icon: <Users size={20} /> },
    { name: "Profile", path: "/profile", icon: <User size={20} /> },
  ];

  const isAuthenticated = Boolean(localStorage.getItem("token"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  // نخفي الـ Sidebar لو الصفحة Login أو Register
  if (location.pathname === "/login" || location.pathname === "/register") {
    return null;
  }

  return (
    <aside className="fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 px-6 py-6 flex flex-col justify-between z-50">
      <div>
        <Link to="/dashboard" className="block mb-8">
          <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            UNIAPP
          </h1>
        </Link>

        <div className="mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-200 font-bold">
              ST
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                Student
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">Student</p>
            </div>
          </div>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition ${
                  isActive
                    ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`
              }
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex justify-center space-x-4 text-gray-500 dark:text-gray-400">
          <i className="fab fa-facebook-f hover:text-blue-600"></i>
          <i className="fab fa-x-twitter hover:text-blue-400"></i>
          <i className="fab fa-instagram hover:text-pink-500"></i>
          <i className="fab fa-telegram-plane hover:text-sky-500"></i>
        </div>

        <div className="space-y-2">
          {!isAuthenticated && (
            <>
              <NavLink
                to="/"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded"
              >
                Register
              </NavLink>
              <NavLink
                to="/login"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded"
              >
                Login →
              </NavLink>
            </>
          )}

          {isAuthenticated && (
            <span
              onClick={handleLogout}
              className="block text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded cursor-pointer"
            >
              Logout
            </span>
          )}
        </div>
      </div>
    </aside>
  );
}
