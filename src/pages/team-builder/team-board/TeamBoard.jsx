import {
  AugmentCard,
  ItemPreviewCard,
  ModalCard,
  Trait,
  BoardGrid,
} from "@components/features";
import { TeamProvider } from "@context";
import { useTeamBoardLogic } from "@hooks";
import { icons } from "@assets/icons";

import "./teamBoard.scss";

function TeamBoardContent() {
  const {
    traits,
    items,
    selectedAugments,
    isOpen,
    openModal,
    closeModal,
    handleSelectAugment,
    handleRemoveAugment,
    clearBoard,
    setClearBoard,
  } = useTeamBoardLogic();

  return (
    <section className="team-board">
      <div className="team-board__clear">
        <button onClick={() => setClearBoard(true)}>
          <img src={icons.refreshIcon} alt="" />
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
        <BoardGrid clearBoard={clearBoard} />
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
