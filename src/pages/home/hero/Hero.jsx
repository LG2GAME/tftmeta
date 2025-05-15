import { Cards as Card } from "@components/common/cards/Cards";

import "./Hero.scss";

// import coachingIMG from "@assets/images/coaching.svg";
import compsIMG from "@assets/images/comps.svg";
import firstStepsIMG from "@assets/images/first-steps.svg";

function Hero() {
  return (
    <section className="hero">
      <div>
        <h1 className="header">Rozpocznij swoją przygodę w TFT</h1>
        <p className="sidetext">
          Postaw swoje pierwsze kroki w TFT dzięki poradom i narzędziom na
          <span style={{ textTransform: "none" }}> tftmeta.pl</span>!
        </p>
      </div>
      <div className="hero__list">
        <Card
          path="grounds"
          imageSRC={firstStepsIMG}
          title="Pierwsze kroki"
          text="Dowiedz się, jak zacząć grę w TFT i poznaj podstawy mechaniki."
        />
        <Card
          path="comps"
          imageSRC={compsIMG}
          title="Kompozycje"
          text="Poznaj topowe strategie i kompozycje w TFT."
        />
      </div>
    </section>
  );
}

export default Hero;
