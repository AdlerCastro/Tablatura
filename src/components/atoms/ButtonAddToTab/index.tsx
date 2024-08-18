"use client";

import { useTab } from "@/context/tab-provider";
import Button from "../Button";

export interface ButtonAddToTabProps {
  noteId: number;
}

export function ButtonAddToTab({ noteId }: ButtonAddToTabProps) {
  const { addToTab } = useTab();
  function handleAddNote() {
    addToTab(noteId);
  }

  return (
    <Button className="bg-blue-900 hover:bg-blue-800" onClick={handleAddNote}>
      Adicionar a tablatura
    </Button>
  );
}
