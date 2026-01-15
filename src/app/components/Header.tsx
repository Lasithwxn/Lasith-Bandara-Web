import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Certifications", id: "certifications" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm shadow-md py-4"
          : "bg-transparent py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo/Name */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl text-slate-800 dark:text-slate-100 transition-colors"
          >
            <span className="font-medium">LB</span>
          </button>

          {/* Navigation Links + Theme Toggle */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors text-sm"
              >
                {item.name}
              </button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile: Only Theme Toggle (removed duplicate) */}
          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </motion.header>
  );
}