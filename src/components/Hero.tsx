import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/aba.png";

interface HeroProps {
  heroImage?: string; // Optional hero image prop
  title: string;
  subtitle: string;
  actionButton: {
    text: string;
    url: string;
  };
}

export function Hero({ title, subtitle, actionButton }: HeroProps) {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-white to-blue-50 pt-20 pb-8 md:pt-24 md:pb-12 lg:pt-32 lg:pb-16" // Added padding-top for the header space
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            <div className="inline-block bg-[#FFD700]/20 text-[#0033A0] px-4 py-2 rounded-full mb-6">
              <p>Welcome</p>
            </div>
            <h1 className="mb-6">{title}</h1>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto md:mx-0">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                asChild
                className="bg-[#0033A0] text-white hover:bg-[#0033A0]/90"
              >
                <a
                  href={actionButton.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {actionButton.text}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <Button
                variant="outline"
                className="border-[#0033A0] text-[#0033A0] hover:bg-[#0033A0]/10"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 w-full order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-[#FFD700]/20 rounded-lg blur-2xl"></div>
              <img
                src={heroImage}
                alt="Hero"
                className="relative w-full h-auto rounded-lg shadow-2xl object-cover aspect-square md:aspect-[4/5]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}