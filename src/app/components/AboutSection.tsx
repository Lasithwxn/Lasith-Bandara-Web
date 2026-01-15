import { motion } from "motion/react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-slate-900 dark:text-slate-100 mb-8">About Me</h2>
          
          <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              Lasith Bandara is an undergraduate technology student with a strong interest in 
              artificial intelligence, software development, and emerging technologies that 
              contribute to a greener and more sustainable future. He is currently building 
              a foundation in modern computing, cloud platforms, and AI-driven solutions, with 
              a focus on practical learning through projects and certifications.
            </p>
            
            <p>
              Lasith aims to grow into a responsible technologist who creates meaningful, 
              real-world impact through innovation. His learning journey focuses on understanding 
              how technology can be leveraged to solve environmental challenges while maintaining 
              efficiency and scalability.
            </p>
            
            <div className="pt-8 grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-950/30 dark:to-blue-950/30 border border-emerald-200/50 dark:border-emerald-800/30">
                <div className="text-sm text-emerald-700 dark:text-emerald-400 mb-2">Current Status</div>
                <div className="text-slate-900 dark:text-slate-100">Undergraduate Student</div>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-950/30 dark:to-blue-950/30 border border-blue-200/50 dark:border-blue-800/30">
                <div className="text-sm text-blue-700 dark:text-blue-400 mb-2">Focus Areas</div>
                <div className="text-slate-900 dark:text-slate-100">AI & Cloud Computing</div>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-950/30 dark:to-blue-950/30 border border-emerald-200/50 dark:border-emerald-800/30">
                <div className="text-sm text-emerald-700 dark:text-emerald-400 mb-2">Goal</div>
                <div className="text-slate-900 dark:text-slate-100">Sustainable Tech Innovation</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}