import { useEffect, useRef, useState } from "react";
import { ChampionInfo, ItemInfo } from "@components/common";
import { useChampions, useItems, useTraits } from "@hooks";
import { fetchCompositions } from "@api";

import "./composition.scss";

const Composition = ({ count = 3 }) => {
  const [compositions, setCompositions] = useState([]);
  const [maxWidth, setMaxWidth] = useState(null);
  const contentRefs = useRef([]);

  const champions = useChampions();
  const traits = useTraits();
  const items = useItems();

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchCompositions();
        setCompositions(data);
      } catch (err) {
        console.error("Błąd przy ładowaniu danych:", err);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    const updateMaxWidth = () => {
      const widths = contentRefs.current.map((ref) =>
        ref ? ref.scrollWidth : 0
      );
      const max = Math.max(...widths);
      setMaxWidth(max);
    };

    const handleLoad = () => {
      requestAnimationFrame(updateMaxWidth);
    };

    const images = document.querySelectorAll(".comps img");
    let loadedCount = 0;

    images.forEach((img) => {
      if (img.complete) {
        loadedCount++;
      } else {
        img.addEventListener("load", handleLoad);
        img.addEventListener("error", handleLoad);
      }
    });

    if (loadedCount === images.length) {
      handleLoad();
    }

    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", handleLoad);
        img.removeEventListener("error", handleLoad);
      });
    };
  }, [compositions]);

  const CompositionName = ({ composition }) => {
    const currentName = traits.find((trait) => trait.id === composition);
    return currentName ? currentName.name : "Nieznana cecha";
  };

  const CompositionChampion = ({ champ }) => {
    const [champHover, setChampHover] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);
    const champRef = useRef(null);
    const itemRefs = useRef({});

    const currentChampion = champions.find(
      (champion) => champion.id === champ.unitName
    );
    if (!currentChampion) return null;

    return (
      <div className="comps__content-build-unit">
        <img
          ref={champRef}
          src={currentChampion.icon}
          alt={currentChampion.name}
          width={48}
          className={`tier-${currentChampion.tier}`}
          onMouseEnter={() => setChampHover(true)}
          onMouseLeave={() => setChampHover(false)}
        />
        <div className="comps__content-build-unit-items">
          {champ.unitItems.map((item, itemIndex) => {
            const currentItem = items.find(
              (globalItem) => globalItem.apiName === item
            );
            if (!currentItem) return null;

            const itemRef = useRef(null);
            itemRefs.current[itemIndex] = itemRef;

            return (
              <div
                key={itemIndex}
                className="comps__content-build-unit-item-wrapper"
                ref={itemRef}
                onMouseEnter={() =>
                  setHoveredItem({ data: currentItem, ref: itemRef })
                }
                onMouseLeave={() => setHoveredItem(null)}
              >
                <img
                  src={currentItem.icon}
                  alt={currentItem.name || `Item ${itemIndex}`}
                  width={16}
                />
              </div>
            );
          })}
        </div>

        {champHover && (
          <ChampionInfo champion={currentChampion} triggerRef={champRef} />
        )}
        {hoveredItem && (
          <ItemInfo item={hoveredItem.data} triggerRef={hoveredItem.ref} />
        )}
      </div>
    );
  };

  return (
    <>
      {compositions && compositions.length > 0 ? (
        <section className="comps">
          <div
            className="comps__header"
            style={maxWidth ? { width: `${maxWidth}px` } : {}}
          >
            <p className="m-0 comps-info comps-name">Nazwa</p>
            <p className="m-0 comps-body">Kompozycja</p>
            <p className="m-0 comps-info comps-place">Śr. Miejsce</p>
          </div>

          {compositions.slice(0, count).map((comp, index) => (
            <div
              key={index}
              className="comps__content"
              ref={(el) => (contentRefs.current[index] = el)}
              style={maxWidth ? { width: `${maxWidth}px` } : {}}
            >
              <p className="m-0 comps-info comps-name">
                {index + 1}. <CompositionName composition={comp.name} />
              </p>
              <div className="m-0 comps-body comps__content-build">
                {comp.units.map((champion, champIndex) => (
                  <CompositionChampion key={champIndex} champ={champion} />
                ))}
              </div>
              <p className="m-0 comps-info comps-place">{comp.avgPlace}</p>
            </div>
          ))}
        </section>
      ) : (
        "Kompozycje nie zostały jeszcze załadowane"
      )}
    </>
  );
};

export default Composition;
