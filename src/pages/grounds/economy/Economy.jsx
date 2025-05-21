import { Accordion } from "react-bootstrap";
import { AccordionCard } from "@components/features";
import { groundsEconomyData } from "@assets/data";
import "./economy.scss";

function GroundsEconomy() {
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
          {groundsEconomyData.map((data, dataIndex) => (
            <AccordionCard key={dataIndex} data={data} index={dataIndex} />
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default GroundsEconomy;
