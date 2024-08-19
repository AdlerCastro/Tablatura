import { NextResponse } from "next/server"
import data from "../data.json"

export async function GET() {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    try {
        return NextResponse.json(data.notes, {status: 200})
        
    } catch (error) {
        return NextResponse.json(`Erro ao resgatar as notas: ${error}`, {status: 501})
    }
}