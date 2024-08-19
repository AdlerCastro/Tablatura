import { NextResponse } from 'next/server';
import { z } from 'zod';
import fs from 'fs';
import path from 'path';
import { noteSchema } from '@/data/models/Note';

// Caminho para o arquivo JSON
const jsonFilePath = path.join(process.cwd(), 'app', 'api', 'notes', 'data.json');

// Função para ler o JSON
const getNotesData = () => {
  const jsonData = fs.readFileSync(jsonFilePath, 'utf-8');
  return JSON.parse(jsonData);
};

// Função para salvar no JSON
const saveNotesData = (data: any) => {
  fs.writeFileSync(jsonFilePath, JSON.stringify(data, null, 2));
};

export async function POST(request: Request) {
  const body = await request.json();

  try {
    // Valida os dados com Zod
    const validatedData = noteSchema.parse(body);

    const data = getNotesData();
    const newNote = {
      id: data.notes.length + 1,
      ...validatedData,
    };

    data.notes.push(newNote);
    saveNotesData(data);

    return NextResponse.json(newNote, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    return NextResponse.json({ error: 'Erro ao salvar a nota' }, { status: 500 });
  }
}
