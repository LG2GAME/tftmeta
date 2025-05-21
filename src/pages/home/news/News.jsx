// import { Article } from "@components/common/article/Article";
// import { fetchPatchNotes } from "@utils/patch-notes/FetchPatchNotes";
import { Media } from "@components/features";
import "./news.scss";

function News() {
  // const [patchnotes, setPatchnotes] = useState([]);

  return (
    <section className="latest-news">
      <div>
        <h1 className="header">Najnowsze wiadomości i zasoby</h1>
        <p className="sidetext">
          Nowinki i filmy z najnowszymi strategiami TFT.
        </p>
      </div>
      <section className="latest-news__content">
        <div className="latest-news__content-video">
          <Media />
        </div>
        <section className="latest-news__content-news">
          {/* {patchnotes.length > 0 ? (
            patchnotes
              .slice(0, 3)
              .map((patchData, index) => (
                <Article key={index} patchData={patchData} />
              ))
          ) : (
            <div>Brak dostępnych patch notes</div>
          )} */}
        </section>
      </section>
    </section>
  );
}

export default News;
