"use client";

import { useTab } from "@/context/tab-provider";
import { NoteFormData } from "@/data/types/NoteFormData";
import { useEffect, useRef, useState } from "react";

interface TablaturaProps {
  note: NoteFormData;
}

export default function ShowNotesOnTab() {
  const { notes } = useTab();
  const [scrolling, setScrolling] = useState(false); // Estado para controlar a rolagem automática
  const containerRef = useRef<HTMLDivElement>(null);
  // const [scrollSpeed, setScrollSpeed] = useState(1); // Velocidade da rolagem

  function Tablatura({ note }: TablaturaProps) {
    const { title, tablature: tab } = note;

    return (
      <div className="flex flex-col gap-y-3 items-center">
        <h2 className="text-xl p-2 bg-orange-600 font-bold font-poppins rounded-md">
          {title}
        </h2>
        <span>---{tab.e === 0 ? "----" : `${tab.e}---`}---</span>
        <span>---{tab.B === 0 ? "----" : `${tab.B}---`}---</span>
        <span>---{tab.G === 0 ? "----" : `${tab.G}---`}---</span>
        <span>---{tab.D === 0 ? "----" : `${tab.D}---`}---</span>
        <span>---{tab.A === 0 ? "----" : `${tab.A}---`}---</span>
        <span>---{tab.E === 0 ? "----" : `${tab.E}---`}---</span>
      </div>
    );
  }

  useEffect(() => {
    let animationFrameId: number | null = null; // Inicializa como null

    const scrollContainer = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      container.scrollLeft += 1; // Rolagem horizontal

      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth
      ) {
        container.scrollLeft = 0; // Voltar ao início quando chegar ao final
      }

      if (scrolling) {
        animationFrameId = requestAnimationFrame(scrollContainer); // Solicita o próximo frame
      }
    };

    if (scrolling) {
      animationFrameId = requestAnimationFrame(scrollContainer); // Inicia a rolagem automática
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId); // Limpa o frame de animação ao desmontar
      }
    };
  }, [scrolling]);

  return (
    <div className="w-full max-w-full h-full flex flex-col justify-between overflow-auto">
      <div className="flex flex-row gap-4">
        <div className="mt-14 flex flex-col gap-3">
          <p>E</p>
          <p>A</p>
          <p>D</p>
          <p>G</p>
          <p>B</p>
          <p>e</p>
        </div>

        <div
          ref={containerRef}
          className="w-full flex flex-row overflow-x-auto whitespace-nowrap"
          style={{ scrollBehavior: "smooth" }} // Suavizar a rolagem
        >
          {notes.map((note, index) => (
            <div key={index} className="flex-shrink-0">
              <Tablatura note={note.note} />
            </div>
          ))}
        </div>
      </div>

      {/* Botão para iniciar ou pausar a rolagem automática */}
      <button
        onClick={() => setScrolling(!scrolling)}
        className="p-2 bg-blue-500 text-white rounded"
      >
        {scrolling ? "Pausar" : "Iniciar"} Rolagem Automática
      </button>

      {/* Controles de velocidade 
      <div className="w-full mt-4">
        <label htmlFor="scrollSpeed" className="mr-2">
          Velocidade:
        </label>
        <input
          id="scrollSpeed"
          type="range"
          min="1"
          max="10"
          value={scrollSpeed}
          onChange={(e) => setScrollSpeed(Number(e.target.value))}
        />
      </div>*/}
    </div>
  );
}
