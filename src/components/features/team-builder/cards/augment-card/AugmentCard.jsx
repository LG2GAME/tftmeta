import "./augmentCard.scss";

import { icons } from "@assets/icons";

const AugmentCard = ({ augment, onClick, onRemove }) => {
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
        <img src={icons.addIcon} alt="" className="augment-card__icon" />
      )}
    </div>
  );
};
export default AugmentCard;
