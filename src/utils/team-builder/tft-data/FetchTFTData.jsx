export const fetchTftDatabase = async () => {
  try {
    const response = await fetch(
      "https://raw.communitydragon.org/latest/cdragon/tft/en_us.json"
    );
    return await response.json();
  } catch (error) {
    console.error("Błąd pobierania bazy danych:", error);
    return null;
  }
};
