import { useEffect, useState } from "react";
import { Details } from "@components/common/details/Details";
import { Article } from "@components/common/article/Article";
import { fetchVideos } from "@utils/fetchVideos";
import { fetchPatchNotes } from "@utils/patch-notes/FetchPatchNotes";
import { fetchKickStream } from "@utils/FetchStream";
import "./LatestNews.scss";

function LatestNews() {
  const [videoData, setVideoData] = useState([]);
  const [kickData, setKickData] = useState([]);
  const [patchnotes, setPatchnotes] = useState([]);

  const fetchAllData = async () => {
    try {
      const [stream, videos, patchnotes] = await Promise.all([
        fetchKickStream(),
        fetchVideos("UCATzuvhVPlmBe0Fbckx2tPw"),
        // fetchPatchNotes(),
      ]);
      setKickData(stream);
      setVideoData(videos);
      // setPatchnotes(patchnotes);
    } catch (error) {
      console.error("Błąd podczas pobierania danych:", error);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  const renderMedia = () => {
    if (kickData.isLive) {
      return (
        <>
          <div className="latest-news__content-video-thumbnail">
            <img src={kickData.thumbnail} alt={kickData.title} />
          </div>
          <div className="latest-news__content-video-description">
            <Details EInfo="stream" />
            <p className="header">{kickData.title}</p>
            <a
              href={kickData.link}
              className="sidetext"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zobacz stream na kicku
            </a>
          </div>
        </>
      );
    } else if (videoData.length > 0) {
      return (
        <>
          <div className="latest-news__content-video-thumbnail">
            <img src={videoData[0].thumbnail} alt={videoData[0].title} />
          </div>
          <div className="latest-news__content-video-description">
            <Details EInfo="filmik" />
            <p className="header">{videoData[0].title}</p>
            <a
              href={videoData[0].link}
              className="sidetext"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zobacz filmik na YouTube
            </a>
          </div>
        </>
      );
    }
    return <div>Brak nowych filmów</div>;
  };

  return (
    <section className="latest-news">
      <div>
        <h1 className="header">Najnowsze wiadomości i zasoby</h1>
        <p className="sidetext">
          Nowinki i filmy z najnowszymi strategiami TFT.
        </p>
      </div>
      <section className="latest-news__content">
        <div className="latest-news__content-video">{renderMedia()}</div>
        <section className="latest-news__content-news">
          {patchnotes.length > 0 ? (
            patchnotes
              .slice(0, 3)
              .map((patchData, index) => (
                <Article key={index} patchData={patchData} />
              ))
          ) : (
            <div>Brak dostępnych patch notes</div>
          )}
        </section>
      </section>
    </section>
  );
}

export default LatestNews;
