import "./Info.scss";

function Privacy() {
  return (
    <section className="info">
      <h1 className="header">Polityka prywatności</h1>
      <section className="info__container">
        <h2>1. Informacje ogólne</h2>
        <div className="info__container-more">
          <p>
            Niniejsza polityka prywatności określa zasady przetwarzania i
            ochrony danych osobowych użytkowników korzystających ze strony
            internetowej [Nazwa Twojej Strony] (dalej: "Strona").
          </p>
          <p>
            Strona nie wymaga zakładania konta, nie zbiera danych osobowych
            użytkowników i nie umożliwia dodawania komentarzy. Jednak w celu
            dostarczenia treści może korzystać z danych pochodzących z innych
            źródeł.
          </p>
        </div>
      </section>
      <section className="info__container">
        <h2>2. Zbieranie danych</h2>
        <div className="info__container-more">
          <p>Strona może zbierać informacje techniczne takie jak:</p>
          <ul>
            <li>Adres IP użytkownika,</li>
            <li>Rodzaj przeglądarki i systemu operacyjnego,</li>
            <li>Czas wizyty i podstrony, które zostały odwiedzone.</li>
          </ul>
          <p>
            Dane te są wykorzystywane wyłącznie do celów statystycznych i
            poprawy funkcjonowania strony.
          </p>
        </div>
      </section>
      <section className="info__container">
        <h2>3. Treści zewnętrzne</h2>
        <div className="info__container-more">
          <p>
            Strona korzysta z treści pobieranych z innych źródeł, takich jak:
          </p>
          <ul>
            <li>
              <a href="https://www.youtube.com" target="_blank">
                Youtube
              </a>
            </li>
            <li>
              <a href="https://www.communitydragon.org" target="_blank">
                Community Dragon
              </a>
            </li>
            <li>
              <a href="https://www.riotgames.com" target="_blank">
                Riot Games
              </a>
            </li>
          </ul>
          <p>
            Strona nie przechowuje żadnych prywatnych danych związanych z tymi
            źródłami, a jedynie prezentuje publicznie dostępne treści.
          </p>
        </div>
      </section>
      <section className="info__container">
        <h2>4. Pliki cookie</h2>
        <div className="info__container-more">
          <p>
            Strona może wykorzystywać pliki cookie do celów analitycznych i
            poprawy funkcjonalności. Możesz zablokować pliki cookie w
            ustawieniach swojej przeglądarki, ale może to wpłynąć na działanie
            niektórych funkcji strony.
          </p>
        </div>
      </section>
      <section className="info__container">
        <h2>5. Linki do stron trzecich</h2>
        <div className="info__container-more">
          <p>
            Strona może zawierać linki do zewnętrznych serwisów, takich jak
            YouTube, Riot Games czy inne strony z newsami. Nie odpowiadamy za
            treści i polityki prywatności tych witryn. Zalecamy zapoznanie się z
            ich regulaminami.
          </p>
        </div>
      </section>
      <section className="info__container">
        <h2>6. Zmiany w polityce prywatności</h2>
        <div className="info__container-more">
          <p>
            Zastrzegamy sobie prawo do aktualizacji niniejszej polityki
            prywatności w celu dostosowania jej do zmian prawnych lub
            technicznych. Aktualna wersja będzie zawsze dostępna na stronie.
          </p>
        </div>
      </section>
      <section className="info__container">
        <h2>7. Kontakt</h2>
        <div className="info__container-more">
          <p>
            W razie pytań dotyczących polityki prywatności możesz skontaktować
            się z nami pod adresem: nosey466@gmail.com lub poprzez Discord.
          </p>
        </div>
      </section>
    </section>
  );
}

export default Privacy;
