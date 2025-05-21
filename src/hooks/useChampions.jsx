import { useEffect, useState } from "react";
import { fetchTftData } from "@api";
import { extractChampions } from "@utils";

const currentSet = 14;

const champWhitelist = [`TFT${currentSet}`, "BlueGolem", "TrainingDummy"];
const champBlacklist = [
  "NPC",
  "Summon",
  "EmblemArmoryKey",
  "GoldenOxProp",
  "AnimaSquadMeep",
  "CypherProp",
  "Virus_Bloblet",
  "HackedEgg",
];

export const useChampions = () => {
  const [tftCharacters, setTftCharacters] = useState([]);

  useEffect(() => {
    const fetchChampions = async () => {
      const db = await fetchTftData();
      const champions = extractChampions(
        db,
        14,
        champWhitelist,
        champBlacklist
      );

      setTftCharacters(champions);
    };

    fetchChampions();
  }, []);

  return tftCharacters;
};
