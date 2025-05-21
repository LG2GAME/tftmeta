/* eslint-disable react/prop-types */
import { HashLink as Link } from "react-router-hash-link";

import "./card.scss";

const Card = ({ path, imageSRC, blank, title, text }) => {
  return (
    <Link to={path} className="card" target={blank ? "_blank" : null}>
      <img src={imageSRC} alt="" />
      <p className="header">{title}</p>
      <p className="sidetext">{text}</p>
    </Link>
  );
};

export default Card;
