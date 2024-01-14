import React from "react";
import RegisterForm from "./RegisterForm";

export default function RegisterPage() {
  return (
    <div className="grid grid-cols-2">
      <div className="bg-purple-300" style={{ height: "100vh" }}></div>
      <div className="">
        <RegisterForm />
      </div>
    </div>
  );
}
