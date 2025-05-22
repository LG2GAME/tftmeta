import { useEffect, useState } from "react";
import { saveBoardState, loadBoardState } from "@utils";
import { useTeamContext } from "@context";

export function useTeamBoardLogic() {
  const { traits = [], items = [] } = useTeamContext() || {};
  const [selectedAugments, setSelectedAugments] = useState([null, null, null]);
  const [isOpen, setIsOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [clearBoard, setClearBoard] = useState(false);

  useEffect(() => {
    const { augments } = loadBoardState();
    if (augments && augments.length > 0) {
      setSelectedAugments(augments);
    }
  }, []);

  useEffect(() => {
    if (clearBoard) {
      setSelectedAugments([null, null, null]);
      saveBoardState(null, null, []);
      setClearBoard(false);
    }
  }, [clearBoard]);

  const openModal = (index) => {
    setEditingIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setEditingIndex(null);
  };

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

  return {
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
  };
}
