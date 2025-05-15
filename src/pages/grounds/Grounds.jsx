import { Cards as Card } from "@components/common/cards/Cards";

import "./Grounds.scss";

import coachingIMG from "@assets/images/coaching.svg";
import economyIMG from "@assets/images/economy.svg";
import firstStepsIMG from "@assets/images/first-steps.svg";

function Grounds() {
  return (
    <section className="grounds">
      <div>
        <h1 className="header">Rozpocznij swoją przygodę w TFT</h1>
        <p className="sidetext">
          Postaw swoje pierwsze kroki w TFT dzięki poradom i narzędziom na
          <span style={{ textTransform: "none" }}> tftmeta.pl</span>!
        </p>
      </div>
      <div className="grounds__list">
        <Card
          path="https://www.youtube.com/watch?v=-qCOE1gWw6k"
          imageSRC={firstStepsIMG}
          blank={true}
          title="podstawy gry"
          text="Opanuj podstawy TFT – twórz drużyny, zarządzaj przedmiotami i dominuj na planszy!"
        />
        <Card
          path="economy"
          imageSRC={economyIMG}
          title="ekonomia"
          text="Naucz się podstaw oszczędzania i inwestowania złota"
        />
        <Card
          path="leveling"
          imageSRC={coachingIMG}
          title="Poziom"
          text="Dowiedz się, kiedy awansować i zdobyć przewagę!"
        />
      </div>
    </section>
  );
}

export default Grounds;
