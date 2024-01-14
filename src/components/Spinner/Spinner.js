import React from "react";
import { useSelector } from "react-redux";
import { MoonLoader } from "react-spinners";

export default function Spinner() {
  let { isLoading } = useSelector((state) => state.spinnerSlice);

  return isLoading ? (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        background: "#eae4e9",
        top: 0,
        left: 0,
        zIndex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MoonLoader color="#3a0ca3" loading size="120px" speedMultiplier="0.5" />
    </div>
  ) : (
    <></>
  );
}
