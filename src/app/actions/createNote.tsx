"use server";

import { api } from "@/data/api";
import { NoteFormData } from "@/data/types/NoteFormData";

// Função para criar a nota
export async function createNote(newNote: NoteFormData) {
  const response = await api("/Notes/createNote", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newNote), // Certifique-se de enviar `newNote`
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Erro ao adicionar a nota");
  }

  return response.json();
}
