import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Youtube } from "lucide-react";

interface PlaylistCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  url: string;
}

export function PlaylistCard({
  title,
  description,
  image,
  tags,
  url,
}: PlaylistCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-[#0033A0]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white rounded-full hover:bg-[#FFD700] transition-colors"
          >
            <Youtube className="h-5 w-5 text-[#0033A0]" />
          </a>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white rounded-full hover:bg-[#FFD700] transition-colors"
          >
            <ExternalLink className="h-5 w-5 text-[#0033A0]" />
          </a>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-[#0033A0]">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-[#FFD700]/20 text-[#0033A0]"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
