import React from "react";
import { createRoot } from "react-dom/client";
import VirtualFittingRoomEverdreams from "./components/VirtualFittingRoomEverdreams.jsx";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#f4e9ff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h1
        style={{
          color: "#7b2cbf",
          fontWeight: "600",
          fontSize: "2rem",
          marginBottom: "20px",
        }}
      >
        💜 Everdreams Virtual Fitting Room 💜
      </h1>
      <VirtualFittingRoomEverdreams />
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
