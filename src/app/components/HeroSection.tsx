import { Button } from "./ui/button";
import { Download, Folder } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-emerald-50/30 to-blue-50/40 dark:from-slate-900 dark:via-emerald-950/20 dark:to-blue-950/30 pt-24 transition-colors">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl text-slate-900 dark:text-slate-100 mb-4">
              Lasith Bandara
            </h1>
            
            <p className="text-2xl mb-3 bg-gradient-to-r from-emerald-600 to-blue-600 dark:from-emerald-400 dark:to-blue-400 bg-clip-text text-transparent">
              Technology for a Greener Future
            </p>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              Undergraduate AI Student | AI & Software Enthusiast
            </p>
            
            <p className="text-base text-slate-600 dark:text-slate-400 mb-10 max-w-lg leading-relaxed">
              Building a foundation in modern computing, AI-driven solutions, and cloud platforms 
              with a focus on creating meaningful, real-world impact through sustainable technology.
            </p>
            
            <div className="flex gap-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 dark:from-emerald-500 dark:to-emerald-600 dark:hover:from-emerald-600 dark:hover:to-emerald-700 text-white border-0"
              >
                <Folder className="w-5 h-5 mr-2" />
                View Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open("https://docs.google.com/document/d/1SBJqa0CGlYck3JoeBvf9comICaNBfPX7/edit?usp=drive_link&ouid=103290585522719682877&rtpof=true&sd=true", "_blank")}
                className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
            </div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-blue-100 dark:from-emerald-900/30 dark:to-blue-900/30 rounded-3xl transform rotate-3"></div>
             <img
  src="/profile.png"
  alt="Lasith Bandara"
  className="relative rounded-3xl w-full max-w-md h-auto object-cover shadow-2xl"
  onError={(e) => {
    console.error('Image failed to load:', e.target.src);  // Logs the bad URL
    e.target.src = '/default-avatar.png';  // Swap to a backup image
  }}
/>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
