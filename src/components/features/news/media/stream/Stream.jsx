/* eslint-disable react/prop-types */

import { Details } from "@components/common";

const Stream = ({ kickData }) => (
  <>
    <div className="video-thumbnail">
      <img src={kickData.thumbnail} alt={kickData.title} />
    </div>
    <div className="video-description">
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

export default Stream;
