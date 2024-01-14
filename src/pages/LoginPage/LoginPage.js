import React from "react";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <div className="grid grid-cols-2">
      <div className="bg-purple-300" style={{ height: "100vh" }}></div>
      <div className="">
        <LoginForm />
      </div>
    </div>
  );
}
