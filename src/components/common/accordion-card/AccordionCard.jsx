import { Accordion } from "react-bootstrap";

import "./AccordionCard.scss";

import "bootstrap/dist/css/bootstrap.min.css";

const AccordionCard = ({ data, index }) => {
  return (
    <Accordion.Item eventKey={String(index)}>
      <Accordion.Header>
        {index + 1}. {data.title}
      </Accordion.Header>
      <Accordion.Body>
        <p>{data.content.description}</p>
        <ul>
          {data.content.points.map((point, i) => (
            <li key={i}>
              <strong>{point.title}: </strong>
              {point.description}
            </li>
          ))}
        </ul>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default AccordionCard;
