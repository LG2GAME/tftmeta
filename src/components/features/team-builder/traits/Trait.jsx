import { useTraits } from "@hooks";
import { findMatchingTrait } from "./trait.utils";
import "./trait.scss";

const Trait = ({ trait, isOnBoard }) => {
  const availableTraits = useTraits();
  const traitName = isOnBoard ? trait.name : trait;
  const matchingTrait = findMatchingTrait(availableTraits, traitName);

  if (!matchingTrait) return null;

  return (
    <li className="trait">
      {isOnBoard && (
        <p className={`m-0 trait-${trait.style} trait__counter`}>
          {trait.count}
        </p>
      )}
      <img
        src={matchingTrait.icon}
        alt={traitName}
        className="champ-info__traits-icon trait__icon"
      />
      <p className="m-0 trait__name">{traitName}</p>
    </li>
  );
};

export default Trait;
