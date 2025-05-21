import { Card } from "@components/common";

import "./grounds.scss";

import { groundsListData } from "@assets/data";

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
        {groundsListData.map(
          ({ path, image, blank, title, description }, index) => (
            <Card
              key={index}
              path={path}
              imageSRC={image}
              blank={blank ? blank : null}
              title={title}
              text={description}
            />
          )
        )}
      </div>
    </section>
  );
}

export default Grounds;
