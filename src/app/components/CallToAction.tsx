import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Mail, Github, Send } from "lucide-react";

export function CallToAction() {
  return (
    <section className="py-24 bg-gradient-to-br from-emerald-50 via-blue-50 to-slate-50 dark:from-emerald-950/20 dark:via-blue-950/20 dark:to-slate-900 transition-colors">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-slate-900 dark:text-slate-100 mb-6">
            Let's Connect
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10">
            I'm always open to learning opportunities, collaboration, and conversations 
            about technology and sustainability. Feel free to reach out!
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 dark:from-emerald-500 dark:to-emerald-600 dark:hover:from-emerald-600 dark:hover:to-emerald-700 text-white border-0"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              asChild
            >
              <a href="https://github.com/Lasithwxn" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View My GitHub
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
