import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/Home";
import { VideosPage } from "./pages/Videos";
import { BlogPage } from "@/pages/Blog";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "videos":
        return <VideosPage />;
      case "blog":
        return <BlogPage />;
      case "home":
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-1">{renderPage()}</main>
      <Footer />
    </div>
  );
}
