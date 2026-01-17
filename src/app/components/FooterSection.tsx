import { Linkedin, Github, Instagram, Twitter } from "lucide-react";

// Custom ArtStation icon
const ArtStationIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M0 17.723l2.027 3.505h.001a2.424 2.424 0 0 0 2.164 1.333h13.457l-2.792-4.838H0zm24 .025c0-.484-.143-.935-.388-1.314L15.728 2.728a2.424 2.424 0 0 0-2.142-1.289H9.419L21.598 22.54l1.92-3.325c.378-.637.482-.919.482-1.467zm-11.129-3.462L7.428 6.728 2.01 14.286h10.861z"/>
  </svg>
);

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/lasithwxn/" },
    { name: "GitHub", icon: Github, url: "https://github.com/Lasithwxn" },
    { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/lasithwxn" },
    { name: "ArtStation", icon: ArtStationIcon, url: "https://artstation.com" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com" },
  ];

  return (
    <footer className="bg-slate-900 dark:bg-black text-slate-300 dark:text-slate-400 py-12 transition-colors">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
                  aria-label={social.name}
                >
                  <Icon />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-slate-400 dark:text-slate-500">
            <p>&copy; {currentYear} Lasith Bandara. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}