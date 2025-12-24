import { Youtube, Facebook, Mail, Heart } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  // Make sure the Facebook URL is updated for your page
  const socialLinks = [
    { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@agapezeortodox/playlists" },
    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/yourpage" },
    { icon: Mail, label: "Email", href: "mailto:contact@example.com" },
  ];

  return (
    <footer className="bg-[#0033A0] text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand/Copyright */}
          <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
            <img src={logo} alt="ዓጋፔ ኦርቶዶክስ Logo" className="h-16 w-auto" />
            <p className="text-[#FFD700] font-bold text-xl">ዓጋፔ ኦርቶዶክስ</p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-3 bg-white/10 hover:bg-[#FFD700] rounded-full transition-colors group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-5 w-5 group-hover:text-[#0033A0]" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-blue-200">
          <p className="flex items-center justify-center gap-2 flex-wrap text-base">
            <span>© 2025 ዓጋፔ ኦርቶዶክስ. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
