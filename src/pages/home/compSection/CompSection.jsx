import Button from "@components/layout/button/Button";
import Comps from "@components/common/comps/Comps";

import "./CompSection.scss";

function CompSection() {
  return (
    <section className="compsect-container">
      <div>
        <h1 className="header">najlepsze kompozycje w TFT</h1>
        <p className="sidetext">
          Sprawdź najlepsze strategie i kompozycje, które zapewnią Ci zwycięstwo
          w TFT!
        </p>
      </div>
      <Comps count={3} />
      <Button link="/comps" text="Zobacz więcej" />
    </section>
  );
}

export default CompSection;
