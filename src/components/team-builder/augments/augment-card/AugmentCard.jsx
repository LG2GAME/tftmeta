import "./AugmentCard.scss";

import { Icons } from "@assets/icons";

export const AugmentCard = ({ augment, onClick, onRemove }) => {
  const handleRightClick = (event) => {
    event.preventDefault();
    if (augment) {
      onRemove();
    }
  };

  return (
    <div
      className="augment-card"
      onClick={onClick}
      onContextMenu={handleRightClick}
    >
      {augment ? (
        <img
          src={augment.icon}
          alt={augment.name}
          className="augment-card__image"
        />
      ) : (
        <Icons.add className="augment-card__icon" />
      )}
    </div>
  );
};
