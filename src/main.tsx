import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createHead, UnheadProvider } from "@unhead/react/client";
import Root from "./routes/root";

// Create head instance
const head = createHead();

export const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <UnheadProvider head={head}>
      <Router>
        <Routes>
          <Route path="/*" element={<Root />} />
        </Routes>
      </Router>
    </UnheadProvider>
  </React.StrictMode>
);
