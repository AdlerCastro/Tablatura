"use server";

import { api } from "@/data/api";
import { Note } from "@/data/models/Note";

export async function getNotes(): Promise<Note[]> {
  const response = await api("/Notes/getNotes");

  const notes = await response.json();

  return notes;
}
