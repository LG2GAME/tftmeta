import { useState, useEffect } from "react";

import { fetchTftDatabase } from "./FetchTFTData";
import {
  extractTraits,
  extractChampions,
  extractItems,
  extractAugments,
} from "./extractData";

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

const itemBlacklist = ["debug", "unusable", "sentinelswarm"];

export const useChampions = () => {
  const [tftCharacters, setTftCharacters] = useState([]);

  useEffect(() => {
    const fetchChampions = async () => {
      const db = await fetchTftDatabase();
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

export const useTraits = () => {
  const [tftTraits, setTftTraits] = useState([]);

  useEffect(() => {
    const fetchTraits = async () => {
      const db = await fetchTftDatabase();
      const traits = extractTraits(db, currentSet);

      setTftTraits(traits);
    };

    fetchTraits();
  }, []);

  return tftTraits;
};

export const useItems = () => {
  const [tftItems, setTftItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const db = await fetchTftDatabase();
      const items = extractItems(db, 13, itemBlacklist);

      setTftItems(items);
    };

    fetchItems();
  }, []);

  return tftItems;
};

export const useAugments = () => {
  const [tftAugments, setTftAugments] = useState([]);

  useEffect(() => {
    const fetchAugments = async () => {
      const db = await fetchTftDatabase();
      const augments = extractAugments(db, currentSet);

      setTftAugments(augments);
    };

    fetchAugments();
  }, []);

  return tftAugments;
};
