"use client";
// Required for validation
import { useMutation } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { noteSchema } from "@/data/models/Note";
import { createNote } from "@/app/actions/createNote";
import { NoteFormData } from "@/data/types/NoteFormData";
// Components
import Button from "@/components/atoms/Button";
import { FileUp, Home, LoaderIcon } from "lucide-react";

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
    mutation.mutate(data);
  };

  const router = useRouter();

  return (
    <>
      <Button
        onClick={() => router.back()}
        className="absolute top-[168px] left-2 hover:scale-105 flex flex-row gap-2 items-center justify-center bg-green-700 hover:bg-green-800 transition-all duration-200"
      >
        <Home /> Voltar
      </Button>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 items-center mt-16"
      >
        <div className="flex flex-col gap-2 items-start">
          <div className="flex flex-col gap-2 items-start">
            <label htmlFor="title" className="mr-4 flex flex-row gap-2">
              Título:
            </label>
            <input
              className="bg-zinc-700 rounded-md"
              id="title"
              type="text"
              {...register("title")}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="description"
              className="flex flex-row gap-2 items-end"
            >
              Descrição: <p className="text-sm">&#40;Opcional&#41;</p>
            </label>
            <input
              className="bg-zinc-700 rounded-md"
              id="description"
              type="text"
              {...register("description")}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 items-center justify-center">
          <label>Tablatura:</label>
          {["E", "A", "D", "G", "B", "e"].map((key) => {
            const tablatureKey = `tablature.${key}` as keyof NoteFormData;
            return (
              <div
                key={key}
                className="flex flex-row gap-2 items-center justify-center"
              >
                <label htmlFor={`tablature-${key}`}>{key}:</label>
                <input
                  className="bg-zinc-700 rounded-md"
                  id={`tablature-${key}`}
                  type="number"
                  {...register(tablatureKey, {
                    valueAsNumber: true, // Garante que o valor seja convertido para número
                  })}
                  required
                />
                {errors.tablature?.[key] && (
                  <p>{errors.tablature[key]?.message}</p>
                )}
              </div>
            );
          })}
        </div>

        <Button
          type="submit"
          disabled={mutation.isPending}
          className={`${
            mutation.isPending
              ? "bg-green-800 hover:bg-green-800"
              : "bg-green-700 hover:bg-green-800"
          }`}
        >
          {mutation.isPending ? (
            <p className="flex gap-1">
              Adicionando nota
              <LoaderIcon className="animate-spin-slow" />
            </p>
          ) : (
            <p className="flex gap-1">
              Adicionar nota <FileUp />
            </p>
          )}
        </Button>
        {mutation.isError && (
          <p>
            Erro:{" "}
            {(mutation.error as Error)?.message || "Ops, algo deu errado ;-;"}
          </p>
        )}
        {mutation.isSuccess && <p>Nota adicionada com sucesso!</p>}
      </form>
    </>
  );
}
