import { useEffect, useState } from "react";
import Stream from "./stream/Stream";
import Video from "./video/Video";
import "./media.scss";
import { fetchStream, fetchVideos } from "@api";

const Media = () => {
  const [data, setData] = useState({ kick: null, video: null });

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [kick, videos] = await Promise.all([
          fetchStream(),
          fetchVideos("UCATzuvhVPlmBe0Fbckx2tPw"),
        ]);
        setData({ kick, video: videos?.[0] ?? null });
      } catch (err) {
        console.error("Błąd podczas pobierania danych:", err);
      }
    };

    fetchAllData();
  }, []);

  if (data.kick?.isLive) return <Stream kickData={data.kick} />;
  if (data.video) return <Video videoData={data.video} />;
  return <div>Brak nowych filmów</div>;
};

export default Media;
