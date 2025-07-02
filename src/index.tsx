import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router";
import Program from "./pages/Program";
import Transport from "./pages/Transport";
import Navbar from "./components/Navbar";
import Priser from "./pages/Priser";
import RSVP from "./pages/RSVP";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<App />} />
        <Route path={"/program"} element={<Program />} />
        <Route path={"/transport"} element={<Transport />} />
        <Route path={"/priser"} element={<Priser />} />
        <Route path={"/rsvp"} element={<RSVP />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
