import { Details } from "@components/common";
import { images } from "@assets/images/";
import "./article.scss";

const Article = ({ patchData }) => {
  return (
    <article className="article">
      <img src={patchData.image || images.defPatchnoteImage} alt="" />
      <div className="article__content">
        <h1 className="article__content-header">{patchData.header}</h1>
        <p className="m-0 article__content-desc">{patchData.content}</p>
        <div className="article__more">
          <a
            href="https://www.leagueoflegends.com/en-us/news/tags/teamfight-tactics-patch-notes/"
            target="_blank"
          >
            Zobacz więcej
          </a>
          <Details EInfo="Patch notes" />
        </div>
      </div>
    </article>
  );
};

export default Article;
