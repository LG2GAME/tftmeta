import { Accordion } from "react-bootstrap";

import AccordionCard from "@components/common/accordion-card/AccordionCard";

import "./Leveling.scss";

import levelingData from "@assets/data/levelingData.json";

function Economy() {
  return (
    <section className="leveling">
      <div className="leveling-title">
        <h1 className="header">
          Poznaj podstawy ekonomii i zarządzania złotem w TFT
        </h1>
        <p className="sidetext">
          Efektywne zarządzanie złotem to klucz do zwycięstwa! Naucz się, jak
          optymalizować ekonomię, budować przewagę i dominować w każdej grze.
        </p>
      </div>
      <div className="leveling__container mt-5">
        <Accordion defaultActiveKey="0">
          {levelingData.map((data, dataIndex) => (
            <AccordionCard key={dataIndex} data={data} index={dataIndex} />
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default Economy;
