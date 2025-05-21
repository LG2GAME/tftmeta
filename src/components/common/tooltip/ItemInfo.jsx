import ReactDOM from "react-dom";
import { useTooltipPosition, useItems } from "@hooks";
import "./tooltip.scss";

const ItemInfo = ({ item, triggerRef }) => {
  const items = useItems();
  const { tooltipRef, position, side } = useTooltipPosition(item, triggerRef);

  if (typeof window !== "undefined" && window.innerWidth < 575) return null;
  if (!item) return null;

  const getHalfItem = (halfItemApiName) => {
    const match = items.find((i) => i.apiName === halfItemApiName);
    return match ? (
      <img
        src={match.icon}
        alt={match.name}
        className="item-info__recipe-half-item-icon"
      />
    ) : null;
  };

  return ReactDOM.createPortal(
    <section
      ref={tooltipRef}
      className={`tooltip-info item-info tooltip-info--${side}`}
      style={{ position: "absolute", top: position.top, left: position.left }}
    >
      <div className="item-info__name">
        <img src={item.icon} alt={item.name} className="item-info__name-icon" />
        <p className="item-info__name-name m-0">{item.name}</p>
      </div>
      <div className="item-info__desc">
        <p className="m-0" dangerouslySetInnerHTML={{ __html: item.desc }} />
      </div>
      {item.composition.length > 0 && (
        <div className="item-info__recipe">
          <p className="item-info__recipe-name m-0">Składniki:</p>
          {item.composition.map((half, i) => (
            <div key={i} className="item-info__recipe-half-item">
              {getHalfItem(half)}
            </div>
          ))}
        </div>
      )}
    </section>,
    document.body
  );
};

export default ItemInfo;
