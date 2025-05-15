import Comps from "@components/common/comps/Comps";

import "./Composition.scss";

function Composition() {
  return (
    <section className="composition">
      <div>
        <h1 className="header">Najlepsze kompozycje w TFT</h1>
        <p className="sidetext">
          Sprawdź najlepsze strategie i kompozycje, które zapewnią Ci zwycięstwo
          w TFT!
        </p>
      </div>
      <Comps count={10} />
      {/* <h1 className="header">
        Nowe kompozycje będą dostępne ze startem setu 14!
      </h1> */}
    </section>
  );
}

export default Composition;
