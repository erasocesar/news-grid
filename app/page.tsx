import NewsGrid from "@/components/news-grid"
import { getNewsItems } from "@/lib/data"

export default async function Home() {
  const newsItems = await getNewsItems()

  return (
    <main className="container mx-auto px-4 py-8 max-w-7xl">
      <NewsGrid items={newsItems} />
    </main>
  )
}
