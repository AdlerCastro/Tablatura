import { z } from "zod";
import { noteSchema } from "../models/Note";

export type NoteFormData = z.infer<typeof noteSchema>;

export type TablatureKeys = keyof NoteFormData['tablature'];
