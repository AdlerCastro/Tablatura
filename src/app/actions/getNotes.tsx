"use server";

import { api } from "@/data/api";
import { Note } from "@/data/types/notes";

export async function getNotes(): Promise<Note[]> {
  const response = await api("/Notes", {
    next: {
      revalidate: 60 * 2,
    },
  });

  const notes = await response.json();

  return notes;
}
