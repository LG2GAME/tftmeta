import { BrowserRouter } from "react-router-dom";
import Modal from "react-modal";
import AppRoutes from "@routes/AppRoutes";

import { Navigation, Footer, CookieConsent } from "@components/layout";

import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/globals.scss";
import "@styles/theme.scss";

Modal.setAppElement("#root");

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <AppRoutes />
      <Footer />
      <CookieConsent />
    </BrowserRouter>
  );
}

export default App;
