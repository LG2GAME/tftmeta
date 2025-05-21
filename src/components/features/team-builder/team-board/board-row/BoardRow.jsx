import BoardCell from "../board-cell/BoardCell";
import "./boardRow.scss";

const BoardRow = ({
  row,
  cols,
  board,
  setBoard,
  championItems,
  setChampionItems,
  manageChampionContext,
  manageItemContext,
  setTraits,
  isHexBlocked,
}) => {
  return (
    <div className="board-row">
      {Array.from({ length: cols }).map((_, col) => {
        const hexIndex = `${row}-${col}`;
        return (
          <BoardCell
            key={hexIndex}
            hexIndex={hexIndex}
            board={board}
            setBoard={setBoard}
            championItems={championItems}
            setChampionItems={setChampionItems}
            manageChampionContext={manageChampionContext}
            manageItemContext={manageItemContext}
            setTraits={setTraits}
            isHexBlocked={isHexBlocked}
          />
        );
      })}
    </div>
  );
};

export default BoardRow;
