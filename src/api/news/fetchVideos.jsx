export const fetchVideos = async (YTUID) => {
  try {
    // API + YT URL
    const proxyUrl = "https://api.allorigins.win/get?url=";
    const feedUrl = encodeURIComponent(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${YTUID}`
    );

    // PARSER
    const response = await fetch(`${proxyUrl}${feedUrl}`);
    const data = await response.json();
    const xmlParser = new DOMParser().parseFromString(
      data.contents,
      "application/xml"
    );

    if (xmlParser.querySelector("parsererror")) {
      console.error(
        "Błąd parsowania XML:",
        xmlParser.querySelector("parsererror").textContent
      );
      return [];
    }

    const entries = xmlParser.querySelectorAll("entry");
    const videos = Array.from(entries).map((entry) => {
      const videoId = new URL(
        entry.querySelector("link").getAttribute("href")
      ).searchParams.get("v");
      return {
        link: `https://www.youtube.com/watch?v=${videoId}`,
        thumbnail: `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
        title: entry.querySelector("title").textContent,
      };
    });

    return videos;
  } catch (error) {
    console.error("Błąd podczas pobierania RSS Feed:", error);
    return [];
  }
};
