import { motion } from "motion/react";
import { Linkedin, Github, Instagram, Youtube } from "lucide-react";

// Custom TikTok icon
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com", color: "hover:text-slate-700 dark:hover:text-slate-300" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com", color: "hover:text-blue-600 dark:hover:text-blue-400" },
  { name: "Instagram", icon: Instagram, url: "https://instagram.com", color: "hover:text-pink-600 dark:hover:text-pink-400" },
  { name: "TikTok", icon: TikTokIcon, url: "https://tiktok.com", color: "hover:text-slate-900 dark:hover:text-white" },
  { name: "YouTube", icon: Youtube, url: "https://youtube.com", color: "hover:text-red-600 dark:hover:text-red-400" },
];

export function SocialSection() {
  return (
    <section className="py-16 bg-white dark:bg-slate-950 transition-colors border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl text-slate-900 dark:text-slate-100 mb-4">Connect & Follow</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            Follow my learning journey and projects on social media
          </p>
          
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 ${social.color} transition-all duration-300 hover:scale-110`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  aria-label={social.name}
                >
                  <Icon />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}