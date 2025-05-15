import { useEffect, useState } from "react";

import { AugmentCard } from "@components/team-builder/augments/augment-card/AugmentCard";
import { ItemPreviewCard } from "@components/team-builder/item/item-card/ItemCard";
import { ModalCard } from "@components/team-builder/augments/augment-modal/ModalCard";
import { Trait } from "@components/team-builder/traits/Trait";
import TeamBoardGrid from "@components/team-builder/board/TeamBoard";

import {
  saveBoardState,
  loadBoardState,
} from "@utils/team-builder/BoardSessinManager";
import { TeamProvider, useTeamContext } from "@context/TeamContext";

import "./TeamBoard.scss";

import { Icons } from "@assets/icons";

function TeamBoardContent() {
  const { traits, items } = useTeamContext();
  const [selectedAugments, setSelectedAugments] = useState([null, null, null]);

  const [isOpen, setIsOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const openModal = (index) => {
    setEditingIndex(index);
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    setEditingIndex(null);
  };

  useEffect(() => {
    const { augments } = loadBoardState();
    if (augments && augments.length > 0) {
      setSelectedAugments(augments);
    }
  }, []);

  const handleSelectAugment = (augment) => {
    if (editingIndex !== null) {
      const updatedAugments = [...selectedAugments];
      updatedAugments[editingIndex] = augment;
      setSelectedAugments(updatedAugments);

      saveBoardState(null, null, updatedAugments);
      closeModal();
    }
  };

  const handleRemoveAugment = (index) => {
    const updatedAugments = [...selectedAugments];
    updatedAugments[index] = null;
    setSelectedAugments(updatedAugments);

    saveBoardState(null, null, updatedAugments);
  };

  const [clearBoard, setClearBoard] = useState(false);

  useEffect(() => {
    if (clearBoard) {
      setSelectedAugments([null, null, null]);
      saveBoardState(null, null, []);

      setClearBoard(false);
    }
  }, [clearBoard, selectedAugments]);

  return (
    <section className="team-board">
      <div className="team-board__clear">
        <button onClick={() => setClearBoard(true)}>
          <Icons.clear size={22} />
        </button>
      </div>
      <section className="team-board__traits">
        <ul className="team-board__traits-list">
          {traits.length > 0 ? (
            traits.map((trait, traitIndex) => (
              <Trait key={traitIndex} trait={trait} isOnBoard={true} />
            ))
          ) : (
            <p className="m-0 sidetext fs-6">Brak dostępnych cech</p>
          )}
        </ul>
      </section>

      <section className="team-board__extra">
        <section className="team-board__extra-augments">
          <p className="team-board__extra-name">Augmenty</p>
          <div className="team-board__extra-augments-container">
            {selectedAugments.map((augment, index) => (
              <AugmentCard
                key={index}
                augment={augment}
                onClick={() => openModal(index)}
                onRemove={() => handleRemoveAugment(index)}
              />
            ))}
          </div>
        </section>

        <section className="team-board__extra-items">
          <p className="team-board__extra-name">Przedmioty</p>
          <div className="team-board__extra-items-container">
            {items.length > 0 &&
              items.map((item, itemIndex) => (
                <ItemPreviewCard key={itemIndex} item={item} />
              ))}
          </div>
        </section>
      </section>

      <section className="team-board__grid">
        <TeamBoardGrid clearBoard={clearBoard} />
      </section>

      <ModalCard
        isOpen={isOpen}
        closeModal={closeModal}
        onSelectAugment={handleSelectAugment}
      />
    </section>
  );
}

function TeamBoard() {
  return (
    <TeamProvider>
      <TeamBoardContent />
    </TeamProvider>
  );
}

export default TeamBoard;
