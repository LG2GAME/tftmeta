import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

import "./CookieConsent.scss";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("cookieConsent", "accepted", { expires: 365 });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-consent">
      <h3 className="header">Cookies!</h3>
      <p>
        Hej, korzystając z <strong>TFTmeta.pl</strong>, akceptujesz nasze pliki
        cookies, które pomagają nam dostarczać Ci najlepsze strategie i treści.
      </p>
      <div className="cookie-consent-more">
        <Link to="/privacy" className="cookie-consent-button">
          Polityka prywatności
        </Link>
        <button className="cookie-consent-button" onClick={handleAccept}>
          Ok
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
