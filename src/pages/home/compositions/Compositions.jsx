import { Composition } from "@components/features";
import { Button } from "@components/common";
import "./compositions.scss";

function Compositions() {
  return (
    <section className="compsect-container">
      <div>
        <h1 className="header">najlepsze kompozycje w TFT</h1>
        <p className="sidetext">
          Sprawdź najlepsze strategie i kompozycje, które zapewnią Ci zwycięstwo
          w TFT!
        </p>
      </div>
      <Composition count={3} />
      <Button link="/comps" text="Zobacz więcej" />
    </section>
  );
}

export default Compositions;
