import { useState, useRef } from "react";
import { useDrag } from "react-dnd";

import { ItemInfo } from "@components/common";

import { useItems } from "@hooks";

import "./itemCard.scss";

const ItemCard = ({
  item,
  itemIndex,
  isHalfItem,
  onClick,
  isOnBoard,
  onRemove,
}) => {
  const [hovered, setHovered] = useState(false);
  const triggerRef = useRef(null);
  const items = useItems();

  const [{ isDragging }, dragRef] = useDrag({
    type: "item",
    item: item,
    end: (item, monitor) => {
      if (isOnBoard && !monitor.didDrop()) {
        onRemove(item.uuid);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const handleRightClick = (event) => {
    event.preventDefault();
    onRemove(item.uuid);
  };

  if (isOnBoard) {
    return (
      <img
        src={item.icon}
        alt={item.name}
        className="item-card__onboard-icon"
        ref={dragRef}
        title={item.name}
        onContextMenu={handleRightClick}
      />
    );
  }

  return (
    <div
      key={itemIndex}
      className={`item-card__items-${isHalfItem ? "half" : "full"}-item`}
      onClick={() => onClick(item)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      title={item.name}
      ref={triggerRef}
    >
      <img
        src={item.icon}
        alt={item.name}
        className={`item-card__items-${isHalfItem ? "half" : "full"}-item-icon`}
        ref={dragRef}
      />
      {hovered && <ItemInfo item={item} triggerRef={triggerRef} />}
    </div>
  );
};

export const ItemPreviewCard = ({ item }) => {
  const items = useItems();
  const setItemIcon = (item) => {
    const findItem = items.find((varItem) => varItem.apiName === item);
    return findItem ? findItem.icon : null;
  };

  return (
    <li className="item-preview" title={item.name}>
      <img
        src={setItemIcon(item.name)}
        alt={item.name}
        className="item-preview__icon"
      />
      <p className="m-0 item-preview__count">x{item.count}</p>
    </li>
  );
};

export default ItemCard;
