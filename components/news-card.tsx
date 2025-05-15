import Image from "next/image"
import Link from "next/link"
import type { NewsItem } from "@/lib/types"

interface NewsCardProps {
  item: NewsItem
}

export default function NewsCard({ item }: NewsCardProps) {
  return (
    <Link href={item.url} target="_blank" className="block h-full">
      <div className="relative h-[300px] overflow-hidden group transition-all duration-300 hover:shadow-[0_0_0_3px_#00b2ff]">
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10 z-10" />

        <Image
          src={item.imageUrl || "/placeholder.svg"}
          alt={item.title}
          width={800}
          height={500}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute bottom-0 left-0 z-20 p-6 text-white w-full">
          <div className="mb-2">
            <span className="uppercase text-xs font-bold tracking-wider bg-black/80 text-[#00b2ff] px-6 py-1">
              {item.category}
            </span>
          </div>
          <h2 className="text-[20px] font-bold mb-1 leading-tight">{item.title}</h2>
          <p className="text-[15px] text-gray-200 leading-tight">{item.description}</p>
        </div>
      </div>
    </Link>
  )
}
