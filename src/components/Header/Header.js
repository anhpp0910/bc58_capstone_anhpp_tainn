import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Header() {
  let { user } = useSelector((state) => state.userSlice);
  let navigate = useNavigate();

  const handleToLoginPage = () => {
    navigate("/login");
  };

  const handleToRegisterPage = () => {
    navigate("/register");
  };

  const handleLogout = () => {
    // xoá localStorage
    localStorage.removeItem("USER_INFO");
    window.location.reload();
  };

  let renderMenu = () => {
    let cssBtn =
      "text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2";
    if (user) {
      return (
        <>
          <span>{user.hoTen}</span>
          <button className={cssBtn} onClick={handleLogout}>
            Đăng xuất
          </button>
        </>
      );
    } else {
      return (
        <>
          <button className={cssBtn} onClick={handleToLoginPage}>
            Đăng nhập
          </button>
          <button className={cssBtn} onClick={handleToRegisterPage}>
            Đăng ký
          </button>
        </>
      );
    }
  };

  return (
    <div className="h-24">
      <div className="shadow-lg bg-white fixed top-0 w-full z-50">
        <div className="container h-24 flex justify-around items-center">
          <NavLink to="/" className="text-4xl font-bold text-purple-700">
            MyCine
          </NavLink>
          <div className="space-x-4">{renderMenu()}</div>
        </div>
      </div>
    </div>
  );
}
