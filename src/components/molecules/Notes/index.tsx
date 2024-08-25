"use client";

import { getNotes } from "@/app/actions/getNotes";
import { useQuery } from "@tanstack/react-query";
import Button from "@/components/atoms/Button";
import { NoteFormData } from "@/data/types/NoteFormData";
import Loading from "@/app/(Project)/loading";

interface NotesProps {
  onSendNote: (data: NoteFormData) => void;
}

export default function Notes({ onSendNote }: NotesProps) {
  const { data, isLoading } = useQuery({
    queryFn: async () => await getNotes(),
    queryKey: ["Notes"],
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col gap-3 w-full items-center overflow-auto">
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
