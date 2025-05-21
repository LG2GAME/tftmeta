export const extractAugments = (db, currentSet) => {
  return db.items
    .filter(
      (augment) =>
        augment.apiName.toLowerCase().startsWith(`tft${currentSet}_augment`) &&
        augment.apiName !== "TFT14_Augment_Mob_Splash"
    )
    .map((augment) => ({
      type: "augment",
      name: augment.name,
      apiName: augment.apiName,
      desc: augment.desc,
      icon: augment.icon
        ? `https://raw.communitydragon.org/latest/game/${augment.icon
            .toLowerCase()
            .replace(".tex", ".png")}`
        : null,
    }));
};
