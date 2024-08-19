import { z } from "zod";

export const noteSchema = z.object({
  id: z.number().optional(), // Torne o id opcional para facilitar a criação
  title: z.string().min(1, 'O título é obrigatório'),
  description: z.string().optional(),
  tablature: z.record(z.number().int()), // Define que as chaves são strings e os valores são números inteiros
});

export type Note = z.infer<typeof noteSchema>;