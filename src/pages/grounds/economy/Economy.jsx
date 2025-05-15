import { Accordion } from "react-bootstrap";

import AccordionCard from "@components/common/accordion-card/AccordionCard";

import "./Economy.scss";

import economyData from "@assets/data/economyData.json";

function Economy() {
  return (
    <section className="economy">
      <div className="economy-title">
        <h1 className="header">
          Poznaj podstawy ekonomii i zarządzania złotem w TFT
        </h1>
        <p className="sidetext">
          Efektywne zarządzanie złotem to klucz do zwycięstwa! Naucz się, jak
          optymalizować ekonomię, budować przewagę i dominować w każdej grze.
        </p>
      </div>
      <div className="economy__container mt-5">
        <Accordion defaultActiveKey="0">
          {economyData.map((data, dataIndex) => (
            <AccordionCard key={dataIndex} data={data} index={dataIndex} />
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default Economy;
