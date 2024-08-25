"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { MoveRight, PlusCircle } from "lucide-react";
// Componentes
import Button from "@/components/atoms/Button";
import Notes from "@/components/molecules/Notes";
import Tab from "@/components/organisms/Tab";
import Empty from "@/components/templates/Empty";
import { Note } from "@/data/models/Note";
import { ButtonAddToTab } from "@/components/atoms/ButtonAddToTab";

export default function Home() {
  const [buttonState, setButtonState] = useState(false);
  const [showNote, setShowNote] = useState<Note>();

  const router = useRouter();

  const handleClickButton = () => {
    setButtonState(!buttonState);
  };

  const handleShowNote = (data: Note) => {
    setShowNote(data);
  };

  return (
    <div className="w-full flex flex-col lg:flex-row gap-2 px-2 py-4 h-main overflow-auto">
      <div
        className={`flex flex-row gap-3 p-4 w-full ${
          buttonState ? "h-96 lg:h-full lg:w-96" : "h-20 lg:w-48 lg:h-full"
        } bg-zinc-800 border-t border-solid border-zinc-500 rounded-lg transition-all duration-300 overflow-x-hidden`}
      >
        <div className="flex flex-col gap-3 h-full transition-all items-center scrollbar scrollbar-thumb-zinc-700 scrollbar-thumb-rounded-full scrollbar-w-2">
          <Button
            className="flex flex-row items-center gap-2 group hover:scale-105"
            onClick={handleClickButton}
          >
            <h2 className="text-lg transition-all duration-300">Notas</h2>
            <MoveRight className="hidden lg:block group-hover:scale-125 transition-all duration-300" />
          </Button>

          <Notes onSendNote={handleShowNote} />

          <Button
            onClick={() => router.push("/CreateNote")}
            className="w-[80%] hover:scale-105 flex flex-row gap-2 items-center justify-center bg-green-700 hover:bg-green-800 p-3 transition-all duration-200"
          >
            <PlusCircle /> Criar nota
          </Button>
        </div>

        {showNote ? (
          <div
            className={`flex flex-col gap-2 items-center overflow-x-hidden transition-all duration-500 h-full ${
              buttonState ? "w-full block" : "w-0"
            }`}
          >
            <p>{showNote.title}</p>
            <p>{showNote.description}</p>
            <div className="flex flex-col gap-2 bg-green-800 p-4 border border-solid border-green-300 rounded-md">
              {Object.keys(showNote.tablature).map((corda) => (
                <pre key={corda}>
                  {`Corda ${corda}: Casa ${showNote.tablature[corda]}`}
                </pre>
              ))}
            </div>
            <ButtonAddToTab note={showNote}></ButtonAddToTab>
          </div>
        ) : (
          <Empty />
        )}
      </div>

      <div
        className={`w-full transition-all ${
          buttonState ? "h-tab lg:h-full lg:w-[70%]" : "h-full lg:w-full"
        }`}
      >
        <Tab />
      </div>
    </div>
  );
}
