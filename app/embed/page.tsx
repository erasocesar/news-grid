import NewsGrid from "@/components/news-grid"
import { getNewsItems } from "@/lib/data"

export default async function EmbedPage() {
  const newsItems = await getNewsItems()

  return (
    <div className="p-2 bg-transparent max-w-7xl mx-auto">
      <NewsGrid items={newsItems} />
    </div>
  )
}
