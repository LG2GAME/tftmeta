/* eslint-disable react/prop-types */
import { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";

import { Trait } from "@components/team-builder/traits/Trait";
import { useItems } from "@utils/team-builder/tft-data/useTFTData";

import "./Tooltip.scss";

import { Icons } from "@assets/icons";

const useTooltipPosition = (dependency, triggerRef) => {
  const tooltipRef = useRef(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [side, setSide] = useState("right");

  useEffect(() => {
    if (triggerRef?.current && tooltipRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();

      const isOutOfBounds =
        triggerRect.right + tooltipRect.width > window.innerWidth;

      setSide(isOutOfBounds ? "left" : "right");

      setPosition({
        top: triggerRect.top + window.scrollY,
        left:
          triggerRect.left +
          (isOutOfBounds ? -tooltipRect.width : triggerRect.width) +
          window.scrollX,
      });
    }
  }, [dependency, triggerRef]);

  return { tooltipRef, position, side };
};

export const ChampInfo = ({ champion, triggerRef }) => {
  const { tooltipRef, position, side } = useTooltipPosition(
    champion,
    triggerRef
  );

  if (typeof window !== "undefined" && window.innerWidth < 575) return null;

  if (!champion) return null;

  return ReactDOM.createPortal(
    <section
      ref={tooltipRef}
      className={`tooltip-info champ-info tooltip-info--${side}`}
      style={{
        position: "absolute",
        top: position.top,
        left: position.left,
      }}
    >
      <div className="champ-info__name">
        <img
          src={champion.icon}
          alt={champion.name}
          className="champ-info__name-icon"
        />
        <p className="champ-info__name-name m-0">{champion.name}</p>
      </div>
      <div className="champ-info__traits">
        <ul className="champ-info__traits-list">
          {champion.traits.map((trait, traitIndex) => (
            <Trait key={traitIndex} trait={trait} />
          ))}
        </ul>
      </div>
      <div className="champ-info__cost">
        {Icons?.coin && <Icons.coin />}
        <p className="m-0">{champion.tier}</p>
      </div>
    </section>,
    document.body
  );
};

export const ItemInfo = ({ item, triggerRef }) => {
  const items = useItems();
  const { tooltipRef, position, side } = useTooltipPosition(item, triggerRef);

  if (typeof window !== "undefined" && window.innerWidth < 575) return null;

  if (!item) return null;

  const handleHalfItem = (halfItemApiName) => {
    const matchingHalfItem = items.find(
      (varItem) => varItem.apiName === halfItemApiName
    );
    return matchingHalfItem ? (
      <img
        src={matchingHalfItem.icon}
        alt={matchingHalfItem.name}
        className="item-info__recipe-half-item-icon"
      />
    ) : null;
  };

  return ReactDOM.createPortal(
    <section
      ref={tooltipRef}
      className={`tooltip-info item-info tooltip-info--${side}`}
      style={{
        position: "absolute",
        top: position.top,
        left: position.left,
      }}
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
          {item.composition.map((halfItem, index) => (
            <div key={index} className="item-info__recipe-half-item">
              {handleHalfItem(halfItem)}
            </div>
          ))}
        </div>
      )}
    </section>,
    document.body
  );
};
