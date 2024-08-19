"use client";

import { useMutation } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { noteSchema } from "@/data/models/Note";
import { createNote } from "@/app/actions/createNote";
import { NoteFormData, TablatureKeys } from "@/data/types/NoteFormData";
import { useRouter } from "next/navigation";
import Button from "@/components/atoms/Button";
import { Home } from "lucide-react";

export default function CreateNote() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NoteFormData>({
    resolver: zodResolver(noteSchema),
  });

  const mutation = useMutation({
    mutationFn: async (newNote: NoteFormData) => await createNote(newNote),
  });

  const onSubmit: SubmitHandler<NoteFormData> = (data) => {
    const convertedData: NoteFormData = {
      ...data,
    };

    mutation.mutate(convertedData);
  };

  const router = useRouter();

  return (
    <div className="relative">
      <Button
        onClick={() => router.back()}
        className="absolute top-0 hover:scale-105 flex flex-row gap-2 items-center justify-center bg-green-700 hover:bg-green-800 transition-all duration-200"
      >
        <Home /> Voltar
      </Button>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 items-center justify-center"
      >
        <div className="flex flex-row gap-2">
          <label htmlFor="title">Título:</label>
          <input
            className="bg-zinc-700 rounded-md"
            id="title"
            type="text"
            {...register("title")}
          />
          {errors.title && <p>{errors.title.message}</p>}
        </div>

        <div className="flex flex-row gap-2">
          <label htmlFor="description">Descrição:</label>
          <input
            className="bg-zinc-700 rounded-md"
            id="description"
            type="text"
            {...register("description")}
          />
          {errors.description && <p>{errors.description.message}</p>}
        </div>

        <div className="flex flex-col gap-2">
          <label>Tablatura:</label>
          {["E", "A", "D", "G", "B", "e"].map((key) => {
            const tablatureKey = `tablature.${key}` as keyof NoteFormData;
            return (
              <div key={key} className="flex flex-row gap-2">
                <label htmlFor={`tablature-${key}`}>{key}:</label>
                <input
                  className="bg-zinc-700 rounded-md"
                  id={`tablature-${key}`}
                  type="number"
                  {...register(tablatureKey, {
                    valueAsNumber: true, // Isso garante que o valor seja convertido para número
                  })}
                />
                {errors.tablature?.[key as TablatureKeys] && (
                  <p>{errors.tablature[key as TablatureKeys]?.message}</p>
                )}
              </div>
            );
          })}
        </div>

        <button type="submit" disabled={mutation.isPending}>
          {mutation.isPending ? "Adicionando..." : "Adicionar Nota"}
        </button>
        {mutation.isError && (
          <p>Erro: {(mutation.error as Error)?.message || "Algo deu errado"}</p>
        )}
        {mutation.isSuccess && <p>Nota adicionada com sucesso!</p>}
      </form>
    </div>
  );
}
