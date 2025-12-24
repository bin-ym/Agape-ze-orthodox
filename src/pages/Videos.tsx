import { useEffect, useState } from "react";
import { PlaylistCard } from "../components/PlaylistCard";

export function VideosPage() {
  const defaultPlaylists = [
    {
      id: "PL001",
      title: "Sunday Sermons & Teachings",
      description:
        "Weekly sermon messages, biblical teachings, and spiritual guidance for daily Christian living and growth in faith.",
      image:
        "https://images.unsplash.com/photo-1597807132214-cd7d59a77714?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldGhpb3BpYW4lMjBvcnRob2RveCUyMGNodXJjaHxlbnwxfHx8fDE3NjI3NTk2MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Sermon", "Teaching"],
      url: "https://www.youtube.com/@agapezeortodox/playlists",
    },
    {
      id: "PL002",
      title: "Bible Study & Scripture Exploration",
      description:
        "In-depth Bible studies, verse-by-verse exposition, and theological discussions to deepen your understanding of God's Word.",
      image:
        "https://images.unsplash.com/photo-1653608187002-9a257213f4ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWJsZSUyMHN0dWR5JTIwdGVhY2hpbmd8ZW58MXx8fHwxNzYyNzU5NjMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Bible Study", "Scripture"],
      url: "https://www.youtube.com/@agapezeortodox/playlists",
    },
    {
      id: "PL003",
      title: "Worship & Praise",
      description:
        "Uplifting worship music, hymns, and praise sessions to inspire your devotion and draw you closer to God through song.",
      image:
        "https://694bbaf8f54bb99ca8ce9dcc.imgix.net/Worship.jpg",
      tags: ["Worship", "Music"],
      url: "https://www.youtube.com/@agapezeortodox/playlists",
    },
    {
      id: "PL004",
      title: "Prayer & Devotional Life",
      description:
        "Guidance on developing a deeper prayer life, understanding different forms of prayer, and growing in intimacy with God.",
      image:
        "https://images.unsplash.com/photo-1638371944196-5384528dc373?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2x5JTIwYmlibGUlMjBwcmF5ZXJ8ZW58MXx8fHwxNzYyNzU5NDA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Prayer", "Devotional"],
      url: "https://www.youtube.com/@agapezeortodox/playlists",
    },
    {
      id: "PL005",
      title: "Orthodox Christian Living",
      description:
        "Practical teachings on living out Orthodox Christian values in modern society, family life, and everyday decisions.",
      image:
        "https://images.unsplash.com/photo-1704276864429-9ed5be4cdd25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcnRob2RveCUyMGNodXJjaCUyMGludGVyaW9yfGVufDF8fHx8MTc2Mjc1OTQwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Orthodox", "Lifestyle"],
      url: "https://www.youtube.com/@agapezeortodox/playlists",
    },
    {
      id: "PL006",
      title: "Church History & Traditions",
      description:
        "Explore the rich history of the Orthodox Church, ancient traditions, and the lives of saints who shaped our faith.",
      image:
        "https://images.unsplash.com/photo-1651774031266-867983eccc83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5kbGVzJTIwY2h1cmNoJTIwd29yc2hpcHxlbnwxfHx8fDE3NjI3NTk0MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["History", "Tradition"],
      url: "https://www.youtube.com/@agapezeortodox/playlists",
    },
  ];

  const [playlists, setPlaylists] = useState(defaultPlaylists);

  useEffect(() => {
    fetch("/data/videos.json")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) setPlaylists(data);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0033A0] to-[#0044C0] text-white py-16 md:py-24">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Video Playlists</h1>
            <p className="text-lg text-blue-100">
              Explore our complete collection of spiritual teachings, worship
              sessions, and Bible studies. Each playlist is carefully curated to
              help you grow in your faith journey.
            </p>
          </div>
        </div>
      </section>

      {/* All Playlists */}
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {playlists.map((playlist) => (
              <PlaylistCard
                key={playlist.id}
                title={playlist.title}
                description={playlist.description}
                image={playlist.image}
                tags={playlist.tags}
                url={playlist.url}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
