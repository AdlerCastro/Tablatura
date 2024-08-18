"use client";

import Button from "@/components/atoms/Button";
import Notes from "@/components/molecules/Notes";
import Tab from "@/components/organisms/Tab";
import Empty from "@/components/templates/Empty";
import { Note } from "@/data/types/notes";
import { MoveRight } from "lucide-react";
import { useState } from "react";

export default function HomePage() {
  const [buttonState, setButtonState] = useState(false);
  const [showNote, setShowNote] = useState<Note>();

  const handleClickButton = () => {
    setButtonState(!buttonState);
  };

  const handleShowNote = (data: Note) => {
    setShowNote(data);
  };

  return (
    <>
      <div
        className={`flex flex-row gap-3 p-4 min-w-64 ${
          buttonState ? "w-[800px]" : "w-64"
        } bg-zinc-800 border-t border-solid border-zinc-500 rounded-lg transition-all duration-300`}
      >
        <div className="flex flex-col gap-3 px-4 min-w-60 transition-all items-center overflow-auto overflow-x-hidden scrollbar scrollbar-thumb-zinc-700 scrollbar-thumb-rounded-full scrollbar-w-2">
          <Button
            className="flex flex-row items-center gap-2"
            onClick={handleClickButton}
          >
            <h2 className="text-lg">Notas disponíveis</h2>
            <MoveRight />
          </Button>

          <Notes onSendNote={handleShowNote} />
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 ${
            buttonState ? "w-full block" : "w-0"
          }`}
        >
          {showNote ? <p>{showNote?.description}</p> : <Empty />}
        </div>
      </div>

      <Tab />
    </>
  );
}
