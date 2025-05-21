import { Composition } from "@components/features";

import "./compositions.scss";

function Compositions() {
  return (
    <section className="composition">
      <div>
        <h1 className="header">Najlepsze kompozycje w TFT</h1>
        <p className="sidetext">
          Sprawdź najlepsze strategie i kompozycje, które zapewnią Ci zwycięstwo
          w TFT!
        </p>
      </div>
      <Composition count={10} />
    </section>
  );
}

export default Compositions;
