import NoData from "../ui/NoData";
import BoardPreview from "./BoardPreview";
import boardUrl from "@/assets/images/board.svg";
import { useContext } from "react";
import { BoardsTabContext } from "../../contexts/BoardsTabContext";
import Loader from "../ui/Loader";

export default function BoardsTab() {
  const { data, isLoading } = useContext(BoardsTabContext);

  if (isLoading) return <Loader />;

  return (
    <>
      {data.boards.length === 0 ? (
        <NoData
          text="Any boards you administrate will show up here!"
          imageUrl={boardUrl}
        />
      ) : (
        data.boards.map((board) => (
          <BoardPreview key={board._id} board={board} />
        ))
      )}
    </>
  );
}
