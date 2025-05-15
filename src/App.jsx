import { BrowserRouter } from "react-router-dom";
import Modal from "react-modal";
import AppRoutes from "@routes/AppRoutes";

import Footer from "@components/layout/footer/Footer";
import Navbar from "@components/layout/navbar/Navbar";
import CookieConsent from "@components/layout/cookies/CookieConsent";

import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/globals.scss";
import "@styles/theme.scss";

Modal.setAppElement("#root");

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
      <Footer />
      <CookieConsent />
    </BrowserRouter>
  );
}

export default App;
