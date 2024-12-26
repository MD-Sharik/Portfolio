import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useTheme } from "../context/ThemeContext";

function Layout() {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={`${isDarkMode ? 'bg-[#18181B]' : 'bg-gradient-to-b from-slate-200 to-slate-200'} min-h-screen`}>
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
