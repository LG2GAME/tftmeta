import { HashLink as Link } from "react-router-hash-link";

import "./button.scss";

const button = ({ link, text }) => {
  return (
    <Link to={link} className="button fs-5">
      {text}
    </Link>
  );
};

export default button;
