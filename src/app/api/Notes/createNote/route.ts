import { NextResponse } from 'next/server';
import { z } from 'zod';
import fs from 'fs';
import path from 'path';
import { noteSchema } from '@/data/models/Note';

// Caminho para o arquivo JSON
const jsonFilePath = path.join(process.cwd(), 'src', 'app', 'api', 'Notes', 'data.json');

// Função para ler o JSON
const getNotesData = () => {
  try {
    const jsonData = fs.readFileSync(jsonFilePath, 'utf-8');
    console.log("Dados lidos do arquivo:", jsonData); // Adicione log aqui
    return JSON.parse(jsonData);
  } catch (error) {
    console.error("Erro ao ler o arquivo JSON:", error);
    throw new Error("Erro ao ler o arquivo de dados");
  }
};

const saveNotesData = (data: any) => {
  try {
    console.log("Dados a serem salvos:", data); // Adicione log aqui
    fs.writeFileSync(jsonFilePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Erro ao salvar o arquivo JSON:", error);
    throw new Error("Erro ao salvar os dados");
  }
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
