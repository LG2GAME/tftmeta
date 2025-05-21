import { HashLink as Link } from "react-router-hash-link";
import "./footer.scss";
import { media } from "../../../assets/icons";

const socialsLinks = {
  facebook: "https://facebook.com/groups/nosynoseya",
  twitter: "https://x.com/nosorozecnosey",
  instagram: "https://instagram.com/nosorozecnosey",
  youtube: "https://youtube.com/@noseynosey",
  tiktok: "https://tiktok.com/@tftmetapl",
  twitch: "https://twitch.tv/noseynosey",
};

export default function footer() {
  return (
    <footer className="footer container">
      <div className="container footer-content">
        <section className="footer__logo">
          <img src="/logo-footer.svg" alt="" />
          <div className="footer__logo-text">
            <p className="sidetext">
              Twoje centrum strategii i społeczności dla graczy Teamfight
              Tactics.
            </p>
            <p className="footer__logo-text-info">
              COPYRIGHT © 2023 NOSEYNOSEY <br />
              Designed by AstroCode.pl
            </p>
          </div>
        </section>
        <section className="footer__t-container footer__info ">
          <h5 className="header m-0">informacje</h5>
          <ul className="m-0 p-0">
            <Link to="/privacy" className="footer__t-container-link">
              <p className="m-0 ">Polityka prywatności</p>
            </Link>
            <Link to="/statute" className="footer__t-container-link">
              <p className="m-0 ">Regulamin strony</p>
            </Link>
            <Link to="/about-us" className="footer__t-container-link">
              <p className="m-0 ">o nas</p>
            </Link>
          </ul>
        </section>
        <section className="footer__t-container footer__f-links">
          <h5 className="header m-0">szybkie linki</h5>
          <ul className="m-0 p-0">
            <Link to="/" className="footer__t-container-link">
              <p className="m-0 ">Home</p>
            </Link>
            <Link to="/patchnotes" className="footer__t-container-link">
              <p className="m-0 ">Aktualności</p>
            </Link>
            <Link to="/grounds" className="footer__t-container-link">
              <p className="m-0 ">Podstawy TFT</p>
            </Link>
            <Link to="/comps" className="footer__t-container-link">
              <p className="m-0 ">Kompozycje</p>
            </Link>
            <Link to="/team-builder" className="footer__t-container-link">
              <p className="m-0 ">Team builder</p>
            </Link>
          </ul>
        </section>
      </div>
      <section className="footer__media">
        <a href={socialsLinks.facebook} target="_blank">
          <img src={media.facebookIcon} alt="" width={32} />
        </a>
        <a href={socialsLinks.twitter} target="_blank">
          <img src={media.twitterIcon} alt="" width={32} />
        </a>
        <a href={socialsLinks.instagram} target="_blank">
          <img src={media.instagramIcon} alt="" width={32} />
        </a>
        <a href={socialsLinks.youtube} target="_blank">
          <img src={media.youtubeIcon} alt="" width={32} />
        </a>
        <a href={socialsLinks.tiktok} target="_blank">
          <img src={media.tiktokIcon} alt="" width={32} />
        </a>
        <a href={socialsLinks.twitch} target="_blank">
          <img src={media.twitchIcon} alt="" width={32} />
        </a>
      </section>
    </footer>
  );
}
