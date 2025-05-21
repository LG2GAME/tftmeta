import "./legal.scss";

function AboutUs() {
  return (
    <section className="info">
      <h1 className="header">O Nas!</h1>
      <div className="info__container-more">
        <p>
          Witaj na TFTMeta.pl! Nasza misja to dostarczanie najbardziej
          aktualnych informacji, analiz i narzędzi dla społeczności Teamfight
          Tactics.
        </p>
        <p>
          Początki naszej pasji do TFT sięgają pierwszego seta – to właśnie
          wtedy zaczęła się nasza przygoda z tą niezwykle dynamiczną i
          strategiczną grą. Choć z niektórymi edycjami mieliśmy różne
          doświadczenia, to jeden fakt pozostaje niezmienny – kochamy TFT i
          chcemy dzielić się tą pasją z innymi.
        </p>
      </div>
      <section className="info__container">
        <h2>Co oferujemy?</h2>
        <div className="info__container-more">
          <ul>
            <li>
              Newsy i analizy – publikujemy najnowsze informacje o grze,
              balansie i zmianach w mecie.
            </li>
            <li>
              Filmy i poradniki – gromadzimy treści edukacyjne, które pomogą Ci
              doskonalić swoje umiejętności.
            </li>
            <li>
              Kompozycje i strategie – dostarczamy sprawdzone buildy i sposoby
              na skuteczną grę.
            </li>
            <li>
              Team Builder – interaktywne narzędzie, które ułatwia tworzenie i
              testowanie kompozycji.
            </li>
          </ul>
          <p>
            Dążymy do tego, aby nasza platforma była miejscem, gdzie zarówno
            nowi gracze, jak i doświadczeni weterani znajdą wartościowe treści
            oraz wsparcie w rozwijaniu swoich umiejętności. Jeśli masz pytania,
            pomysły lub chcesz z nami współpracować – jesteśmy otwarci na
            kontakt!
          </p>
          <p>Dziękujemy, że jesteś z nami i razem twórzmy społeczność TFT!</p>
        </div>
      </section>
    </section>
  );
}

export default AboutUs;
