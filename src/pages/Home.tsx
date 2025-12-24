import { Hero } from "@/components/Hero";
import { PlaylistCard } from "../components/PlaylistCard";
import { BlogCard } from "../components/BlogCard";
import { ArrowRight } from "lucide-react";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const featuredPlaylists = [
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
      title: "Worship & Praise Sessions",
      description:
        "Uplifting worship music, hymns, and praise sessions to inspire your devotion and draw you closer to God through song.",
      image:
        "https://images.unsplash.com/photo-1553404954-7858899788e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JzaGlwJTIwbXVzaWMlMjBwcmFpc2V8ZW58MXx8fHwxNzYyNzU5NjMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Worship", "Music"],
      url: "https://www.youtube.com/@agapezeortodox/playlists",
    },
  ];

  const recentBlogPosts = [
    {
      id: 1,
      title: "The Power of Prayer in Daily Life",
      excerpt:
        "Discover how incorporating prayer into your daily routine can bring peace, clarity, and spiritual growth. Learn practical ways to maintain a consistent prayer life amidst the busyness of modern living.",
      author: "ዓጋፔ ኦርቶዶክስ",
      date: "November 5, 2025",
      image:
        "https://images.unsplash.com/photo-1638371944196-5384528dc373?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2x5JTIwYmlibGUlMjBwcmF5ZXJ8ZW58MXx8fHwxNzYyNzU5NDA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      url: "#",
    },
    {
      id: 2,
      title: "Understanding Orthodox Liturgy",
      excerpt:
        "A deep dive into the beautiful and ancient traditions of Orthodox worship. Explore the meaning behind the rituals, hymns, and symbols that make our liturgy a profound spiritual experience.",
      author: "ዓጋፔ ኦርቶዶክስ",
      date: "October 28, 2025",
      image:
        "https://images.unsplash.com/photo-1704276864429-9ed5be4cdd25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcnRob2RveCUyMGNodXJjaCUyMGludGVyaW9yfGVufDF8fHx8MTc2Mjc1OTQwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      url: "#",
    },
    {
      id: 3,
      title: "Light in the Darkness: Finding Hope",
      excerpt:
        "In times of struggle and uncertainty, our faith provides the light we need. Reflections on how to find hope and strength through scripture and community during challenging times.",
      author: "ዓጋፔ ኦርቶዶክስ",
      date: "October 15, 2025",
      image:
        "https://images.unsplash.com/photo-1651774031266-867983eccc83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5kbGVzJTIwY2h1cmNoJTIwd29yc2hpcHxlbnwxfHx8fDE3NjI3NTk0MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      url: "#",
    },
  ];

  return (
    <>
      <Hero
        heroImage="church-father-image-url"
        title="Welcome to ዓጋፔ ኦርቶዶክስ"
        subtitle="Sharing God's love through spiritual teachings, worship, and biblical wisdom. Join our community as we grow together in faith and walk in the light of Christ."
        actionButton={{
          text: "Watch on YouTube",
          url: "https://www.youtube.com/@agapezeortodox/playlists",
        }}
      />

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[#0033A0] mb-6">
              About ዓጋፔ ኦርቶዶክስ
            </h2>
            <p className="text-gray-600 mb-6">
              ዓጋፔ ኦርቶዶክስ (Agape Orthodox) is a spiritual
              community dedicated to spreading the Gospel of
              Jesus Christ and nurturing believers in their
              faith journey. Through our YouTube channel, we
              share weekly sermons, Bible teachings, worship
              sessions, and reflections rooted in Orthodox
              Christian tradition.
            </p>
            <p className="text-gray-600 mb-6">
              Our mission is to provide accessible spiritual
              resources that inspire, educate, and uplift
              believers around the world. We believe in the
              transformative power of God's Word and strive to
              create content that brings hope, encouragement,
              and spiritual growth to all who seek truth.
            </p>
            <p className="text-gray-600">
              Whether you're looking for Sunday sermon messages,
              in-depth Bible studies, or uplifting worship
              music, our playlists are curated to meet you where
              you are in your spiritual walk. Join us as we
              explore the depths of Scripture and celebrate the
              beauty of Orthodox faith together.
            </p>
          </div>
        </div>
      </section>

      {/* Videos/Playlists Section */}
      <section
        id="videos"
        className="py-16 md:py-24 bg-gray-50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-[#FFD700] mb-4">
              Featured Playlists
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover curated YouTube playlists on faith,
              spirituality, and teaching.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredPlaylists.map((playlist) => (
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
          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate("videos")}
              className="inline-flex items-center gap-2 bg-[#0033A0] text-white px-8 py-4 rounded-lg hover:bg-[#FFD700] hover:text-[#0033A0] transition-colors"
            >
              View All Playlists
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-[#FFD700] mb-4">
              Latest Blog Posts
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Words and reflections originally shared on
              Facebook and beyond.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {recentBlogPosts.map((post) => (
              <BlogCard
                key={post.id}
                title={post.title}
                excerpt={post.excerpt}
                author={post.author}
                date={post.date}
                image={post.image}
                url={post.url}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate("blog")}
              className="inline-flex items-center gap-2 bg-[#0033A0] text-white px-8 py-4 rounded-lg hover:bg-[#FFD700] hover:text-[#0033A0] transition-colors"
            >
              View All Blog Posts
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact & Donate Section */}
      <section
        id="contact"
        className="py-16 md:py-24 bg-gradient-to-br from-[#0033A0] to-[#0044C0] text-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Get in Touch</h2>
            <p className="mb-8 text-blue-100">
              Reach out for spiritual guidance, inquiries, or
              support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@example.com"
                className="bg-[#FFD700] text-[#0033A0] px-8 py-3 rounded-lg hover:bg-[#FFD700]/90 transition-colors inline-block"
              >
                Send an Email
              </a>
              <a
                href="#"
                className="bg-white/10 text-white px-8 py-3 rounded-lg hover:bg-white/20 transition-colors inline-block border border-white/20"
              >
                Donate
              </a>
              <a
                href="https://www.facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#0033A0] px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors inline-block"
              >
                Facebook Page
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}