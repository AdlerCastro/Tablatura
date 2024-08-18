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
        <div className="flex flex-col gap-3 min-w-60 transition-all items-center overflow-auto overflow-x-hidden scrollbar scrollbar-thumb-zinc-700 scrollbar-thumb-rounded-full scrollbar-w-2">
          <Button
            className="flex flex-row items-center gap-2 group hover:scale-105"
            onClick={handleClickButton}
          >
            <h2 className="text-lg transition-all duration-300">
              Notas disponíveis
            </h2>
            <MoveRight className="group-hover:scale-125 transition-all duration-300" />
          </Button>

          <Notes onSendNote={handleShowNote} />
        </div>

        {showNote ? (
          <div
            className={`flex flex-col gap-2 items-center overflow-hidden transition-all duration-500 ${
              buttonState ? "w-full block" : "w-0"
            }`}
          >
            <p>{showNote?.title}</p>
            <p>{showNote?.description}</p>
          </div>
        ) : (
          <Empty />
        )}
      </div>

      <Tab />
    </>
  );
}
