import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router";
import Praktisk from "./pages/Praktisk";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route index element={<App />} />
        <Route path={"/praktisk"} element={<Praktisk />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
