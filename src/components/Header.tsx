import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", page: "home" },
    { label: "Videos", page: "videos" },
    { label: "Blog", page: "blog" },
  ];

  const handleNavigation = (page: string, section?: string) => {
    setMobileMenuOpen(false);
    if (page === "home" && section) {
      onNavigate("home");
      setTimeout(() => {
        const element = document.getElementById(section);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavigation("home")}
              className="flex items-center"
            >
              <img src={logo} alt="Logo" className="h-12 w-auto" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavigation(link.page)}
                className={`text-gray-700 hover:text-[#0033A0] transition-colors ${
                  currentPage === link.page
                    ? "text-[#0033A0] font-semibold"
                    : ""
                }`}
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => handleNavigation("home", "contact")}
              className="bg-[#FFD700] text-[#0033A0] hover:bg-[#FFD700]/90"
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-[#0033A0] p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavigation(link.page)}
                  className={`text-gray-700 hover:text-[#0033A0] transition-colors px-2 text-left ${
                    currentPage === link.page
                      ? "text-[#0033A0] font-semibold"
                      : ""
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => handleNavigation("home", "contact")}
                className="bg-[#FFD700] text-[#0033A0] hover:bg-[#FFD700]/90 w-full"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
