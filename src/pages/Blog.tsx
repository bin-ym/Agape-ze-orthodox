import { BlogCard } from "../components/BlogCard";

export function BlogPage() {
  const allBlogPosts = [
    {
      id: 1,
      title: "The Power of Prayer in Daily Life",
      excerpt: "Discover how incorporating prayer into your daily routine can bring peace, clarity, and spiritual growth. Learn practical ways to maintain a consistent prayer life amidst the busyness of modern living.",
      author: "ዓጋፔ ኦርቶዶክስ",
      date: "November 5, 2025",
      image: "https://images.unsplash.com/photo-1638371944196-5384528dc373?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2x5JTIwYmlibGUlMjBwcmF5ZXJ8ZW58MXx8fHwxNzYyNzU5NDA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      url: "#",
    },
    {
      id: 2,
      title: "Understanding Orthodox Liturgy",
      excerpt: "A deep dive into the beautiful and ancient traditions of Orthodox worship. Explore the meaning behind the rituals, hymns, and symbols that make our liturgy a profound spiritual experience.",
      author: "ዓጋፔ ኦርቶዶክስ",
      date: "October 28, 2025",
      image: "https://images.unsplash.com/photo-1704276864429-9ed5be4cdd25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcnRob2RveCUyMGNodXJjaCUyMGludGVyaW9yfGVufDF8fHx8MTc2Mjc1OTQwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      url: "#",
    },
    {
      id: 3,
      title: "Light in the Darkness: Finding Hope",
      excerpt: "In times of struggle and uncertainty, our faith provides the light we need. Reflections on how to find hope and strength through scripture and community during challenging times.",
      author: "ዓጋፔ ኦርቶዶክስ",
      date: "October 15, 2025",
      image: "https://images.unsplash.com/photo-1651774031266-867983eccc83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5kbGVzJTIwY2h1cmNoJTIwd29yc2hpcHxlbnwxfHx8fDE3NjI3NTk0MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      url: "#",
    },
    {
      id: 4,
      title: "The Importance of Fasting in Spiritual Growth",
      excerpt: "Fasting is more than abstaining from food—it's a spiritual discipline that helps us focus on God and strengthen our faith. Discover the Orthodox perspective on fasting and its transformative power.",
      author: "ዓጋፔ ኦርቶዶክስ",
      date: "October 8, 2025",
      image: "https://images.unsplash.com/photo-1638371944196-5384528dc373?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2x5JTIwYmlibGUlMjBwcmF5ZXJ8ZW58MXx8fHwxNzYyNzU5NDA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      url: "#",
    },
    {
      id: 5,
      title: "Saints as Our Spiritual Guides",
      excerpt: "The lives of saints offer us examples of faith, perseverance, and devotion. Learn how studying the lives of saints can inspire and guide us in our own spiritual journey.",
      author: "ዓጋፔ ኦርቶዶክስ",
      date: "September 25, 2025",
      image: "https://images.unsplash.com/photo-1704276864429-9ed5be4cdd25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcnRob2RveCUyMGNodXJjaCUyMGludGVyaW9yfGVufDF8fHx8MTc2Mjc1OTQwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      url: "#",
    },
    {
      id: 6,
      title: "Building a Strong Family Through Faith",
      excerpt: "In today's world, maintaining strong family bonds can be challenging. Discover how Orthodox Christian principles can help create a loving, faith-centered family environment.",
      author: "ዓጋፔ ኦርቶዶክስ",
      date: "September 12, 2025",
      image: "https://images.unsplash.com/photo-1651774031266-867983eccc83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5kbGVzJTIwY2h1cmNoJTIwd29yc2hpcHxlbnwxfHx8fDE3NjI3NTk0MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      url: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0033A0] to-[#0044C0] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Blog & Reflections</h1>
            <p className="text-blue-100 text-lg">
              Read our latest spiritual insights, biblical reflections, and teachings on Orthodox Christian living. 
              These articles are designed to encourage and deepen your faith walk.
            </p>
          </div>
        </div>
      </section>

      {/* All Blog Posts */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {allBlogPosts.map((post) => (
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
        </div>
      </section>
    </div>
  );
}