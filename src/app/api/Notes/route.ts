import { NextResponse } from "next/server"
import data from "./data.json"
export async function GET() {
    try {
        return new NextResponse(JSON.stringify(data.notes), {status: 200})
        
    } catch (error) {
        return new NextResponse(`Erro ao resgatar as notas: ${error}`, {status: 501})
    }
}