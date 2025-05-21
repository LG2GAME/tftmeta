/* eslint-disable react/prop-types */

import { Details } from "@components/common";

const Video = ({ videoData }) => (
  <>
    <div className="video-thumbnail">
      <img src={videoData.thumbnail} alt={videoData.title} />
    </div>
    <div className="video-description">
      <Details EInfo="filmik" />
      <p className="header">{videoData.title}</p>
      <a
        href={videoData.link}
        className="sidetext"
        target="_blank"
        rel="noopener noreferrer"
      >
        Zobacz filmik na YouTube
      </a>
    </div>
  </>
);

export default Video;
