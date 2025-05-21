import { Card } from "@components/common";
import { heroListData } from "@assets/data";
import "./hero.scss";

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
        {heroListData.map(({ path, image, title, description }, index) => (
          <Card
            key={index}
            path={path}
            imageSRC={image}
            title={title}
            text={description}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
