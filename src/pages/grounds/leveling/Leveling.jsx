import { Accordion } from "react-bootstrap";
import { AccordionCard } from "@components/features";
import "./leveling.scss";
import { groundsLevelingData } from "@assets/data";

function GroundsLeveling() {
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
          {groundsLevelingData.map((data, dataIndex) => (
            <AccordionCard key={dataIndex} data={data} index={dataIndex} />
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default GroundsLeveling;
