import { z } from "zod";

export const noteSchema = z.object({
    title: z.string().min(1, 'O título é obrigatório'),
    description: z.string().optional(),
    tablature: z.object({
      E: z.number().int(),
      A: z.number().int(),
      D: z.number().int(),
      G: z.number().int(),
      B: z.number().int(),
      e: z.number().int(),
    }),
  });
