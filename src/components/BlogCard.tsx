import { Calendar, User } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  url?: string;
}

export function BlogCard({ title, excerpt, author, date, image, url = "#" }: BlogCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-[#0033A0] mb-3 line-clamp-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        <div className="flex items-center gap-4 text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            <span className="text-sm">{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">{date}</span>
          </div>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#0033A0] text-white px-6 py-2 rounded-lg hover:bg-[#FFD700] hover:text-[#0033A0] transition-colors"
        >
          Read More
        </a>
      </div>
    </article>
  );
}
