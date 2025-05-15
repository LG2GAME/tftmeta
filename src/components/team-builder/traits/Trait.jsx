import { useTraits } from "@utils/team-builder/tft-data/useTFTData";

import "./Trait.scss";

const findMatchingTrait = (traits, traitName) => {
  return traits.find((trait) => trait.name === traitName);
};

export const Trait = ({ trait, isOnBoard }) => {
  const availableTraits = useTraits();
  const matchingTrait = findMatchingTrait(
    availableTraits,
    isOnBoard ? trait.name : trait
  );

  return matchingTrait ? (
    <li className="trait">
      {isOnBoard ? (
        <p
          className={`m-0 ${
            isOnBoard ? `trait-${trait.style}` : null
          } trait__counter`}
        >
          {trait.count}
        </p>
      ) : null}
      <img
        src={matchingTrait.icon}
        alt={trait}
        className="champ-info__traits-icon trait__icon"
      />
      <p className="m-0 trait__name">{isOnBoard ? trait.name : trait}</p>
    </li>
  ) : null;
};
