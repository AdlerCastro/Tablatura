"use client";

import { useTab } from "@/context/tab-provider";
import { NoteFormData } from "@/data/types/NoteFormData";
import Button from "../Button";

export interface ButtonAddToTabProps {
  note: NoteFormData;
}

export function ButtonAddToTab({ note }: ButtonAddToTabProps) {
  const { addToTab } = useTab();
  function handleAddNote() {
    addToTab(note);
  }

  return (
    <Button className="bg-blue-900 hover:bg-blue-800" onClick={handleAddNote}>
      Adicionar a tablatura
    </Button>
  );
}
