import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="space-y-16">
      <Header />
      <Outlet />
      {/* Outlet ~ route con của route cha */}

      <Footer />
    </div>
  );
}
