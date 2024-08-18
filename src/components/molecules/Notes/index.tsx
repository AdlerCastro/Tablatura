"use client";

import { getNotes } from "@/app/actions/getNotes";
import { useQuery } from "@tanstack/react-query";
import Button from "@/components/atoms/Button";
import { useState } from "react";
import { Note } from "@/data/types/notes";

interface NotesProps {
  onSendNote: (data: Note) => void;
}

export default function Notes({ onSendNote }: NotesProps) {
  const { data, isLoading } = useQuery({
    queryFn: async () => await getNotes(),
    queryKey: ["Notes"],
  });

  return (
    <div className="flex flex-col gap-3 w-full items-center">
      {data?.map((note) => (
        <Button
          key={note.id}
          onClick={() => onSendNote(note)}
          className="w-[80%] hover:scale-110"
        >
          {note.title}
        </Button>
      ))}
    </div>
  );
}
