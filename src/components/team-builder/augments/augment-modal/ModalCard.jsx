import { useState } from "react";

import { useAugments } from "@utils/team-builder/tft-data/useTFTData";
import Modal from "react-modal";

import "./ModalCard.scss";

import { Icons } from "@assets/icons";

export const ModalCard = ({ isOpen, closeModal, onSelectAugment }) => {
  const augments = useAugments();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAugments = augments.filter((augment) =>
    augment.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Augment Modal"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <div className="modal-content__header">
        <h1 className="header mb-4">Wybierz swoje augmenty</h1>
        <Icons.close className="modal-close-btn" onClick={closeModal} />
      </div>

      <div className="modal__search-bar">
        <Icons.search size={20} />
        <input
          type="search"
          placeholder="Wyszukaj po nazwie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="modal-content__container">
        {filteredAugments.length > 0 ? (
          filteredAugments.map((augment) => (
            <div
              key={augment.id}
              className="augment-option"
              onClick={() => onSelectAugment(augment)}
            >
              <img
                src={augment.icon}
                alt={augment.name}
                className="augment-option__image"
              />
              <p className="augment-option__name">{augment.name}</p>
            </div>
          ))
        ) : (
          <p className="modal__no-results">Brak wyników</p>
        )}
      </div>
    </Modal>
  );
};
