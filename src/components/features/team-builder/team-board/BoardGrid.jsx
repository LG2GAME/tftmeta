import { useBoardGridLogic } from "@hooks";
import BoardRow from "./board-row/BoardRow";

import "./boardGrid.scss";

const BOARD_COLS = [7, 8, 7, 8];

const BoardGrid = ({ clearBoard }) => {
  const {
    board,
    setBoard,
    championItems,
    setChampionItems,
    manageChampionContext,
    manageItemContext,
    setTraits,
    isHexBlocked,
  } = useBoardGridLogic({ clearBoard });

  return (
    <div className="board">
      {BOARD_COLS.map((cols, row) => (
        <BoardRow
          key={row}
          row={row}
          cols={cols}
          board={board}
          setBoard={setBoard}
          championItems={championItems}
          setChampionItems={setChampionItems}
          manageChampionContext={manageChampionContext}
          manageItemContext={manageItemContext}
          setTraits={setTraits}
          isHexBlocked={isHexBlocked}
        />
      ))}
    </div>
  );
};

export default BoardGrid;
