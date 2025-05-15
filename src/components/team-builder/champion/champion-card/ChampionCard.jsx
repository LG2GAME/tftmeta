import { useState, useRef } from "react";
import { useDrag } from "react-dnd";

import { ChampInfo } from "@components/common/tooltip/Tooltip";

import "./ChampionCard.scss";

export const ChampionCard = ({
  champion,
  champIndex,
  isOnBoard,
  onRemove,
  findFirstFreeHex,
}) => {
  const [hovered, setHovered] = useState(false);
  const triggerRef = useRef(null);

  const [{ isDragging }, dragRef] = useDrag({
    type: "champion",
    item: champion,
    end: (item, monitor) => {
      if (!monitor.didDrop() && isOnBoard) {
        onRemove(champion.uuid);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const handleRightClick = (event) => {
    event.preventDefault();
    onRemove(champion.uuid);
  };

  if (isOnBoard) {
    return (
      <div
        key={champion.uuid}
        className="champion-card__onboard"
        title={champion.name}
        onContextMenu={handleRightClick}
      >
        <img
          src={champion.icon}
          alt={champion.name}
          className={`tier-${champion.tier} champion-card__onboard-icon`}
          ref={dragRef}
        />
      </div>
    );
  }

  return (
    <div
      key={champion.uuid}
      className="champion-card__champ"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      ref={triggerRef}
    >
      <img
        src={champion.icon}
        alt={champion.name}
        className={`tier-${champion.tier} champion-card__champ-icon`}
        ref={dragRef}
      />
      <p className="m-0 champion-card__champ-name">{champion.name}</p>
      {hovered && <ChampInfo champion={champion} triggerRef={triggerRef} />}
    </div>
  );
};
