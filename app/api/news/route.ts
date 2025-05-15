import { NextResponse } from "next/server"
import { getNewsItems } from "@/lib/data"

export async function GET() {
  const newsItems = await getNewsItems()
  return NextResponse.json(newsItems)
}
