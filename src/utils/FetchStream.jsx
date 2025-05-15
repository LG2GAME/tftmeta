const CHANNEL_NAME = "noseynosey";

export const fetchKickStream = async () => {
  try {
    const response = await fetch(
      `https://kick.com/api/v1/channels/${CHANNEL_NAME}`
    );
    const data = await response.json();

    if (data.livestream) {
      return {
        isLive: true,
        title: data.livestream.session_title,
        thumbnail: data.livestream.thumbnail.url,
        link: `https://kick.com/${CHANNEL_NAME}`,
      };
    }

    return {
      isLive: false,
    };
  } catch (error) {
    console.error("Failed to fetch Kick stream status:", error);
    return [];
  }
};
