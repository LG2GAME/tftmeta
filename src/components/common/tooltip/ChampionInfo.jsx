import ReactDOM from "react-dom";
import { useTooltipPosition } from "@hooks";
import { Trait } from "@components/features";
import { icons } from "@assets/icons";
import "./tooltip.scss";

const ChampionInfo = ({ champion, triggerRef }) => {
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
      style={{ position: "absolute", top: position.top, left: position.left }}
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
          {champion.traits.map((trait, index) => (
            <Trait key={index} trait={trait} />
          ))}
        </ul>
      </div>
      <div className="champ-info__cost">
        <p className="m-0">{champion.tier}</p>
        <img src={icons.coinIcon} alt="" width={20} />
      </div>
    </section>,
    document.body
  );
};

export default ChampionInfo;
