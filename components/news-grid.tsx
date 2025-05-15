import type { NewsItem } from "@/lib/types"
import NewsCard from "./news-card"

interface NewsGridProps {
  items: NewsItem[]
}

export default function NewsGrid({ items }: NewsGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 auto-rows-auto">
      {/* Primera fila - 2 elementos (primero más ancho) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {items.slice(0, 2).map((item, index) => (
          <div
            key={item.id}
            className={`
              ${index === 0 ? "md:col-span-2" : "md:col-span-1"}
              transition-transform duration-300 hover:scale-[1.01]
            `}
          >
            <NewsCard item={item} />
          </div>
        ))}
      </div>

      {/* Segunda fila - 3 elementos iguales */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.slice(2, 5).map((item) => (
          <div key={item.id} className="transition-transform duration-300 hover:scale-[1.01]">
            <NewsCard item={item} />
          </div>
        ))}
      </div>
    </div>
  )
}
