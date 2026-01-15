import { motion } from "motion/react";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "Fundamentals of Deep Learning",
    issuer: "NVIDIA",
    description: "Completed comprehensive training in neural networks and deep learning fundamentals"
  },
  {
    title: "Introduction to Artificial Intelligence",
    issuer: "Microsoft",
    description: "Learned core AI concepts, machine learning principles, and practical applications"
  },
  {
    title: "Machine Learning Foundations",
    issuer: "LinkedIn Learning",
    description: "Gained expertise in ML algorithms, data preprocessing, and model evaluation"
  },
  {
    title: "GitHub Foundations",
    issuer: "GitHub",
    description: "Mastered version control, collaboration workflows, and open source contribution"
  },
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-slate-900 dark:text-slate-100 text-center mb-4">Certifications</h2>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-16 max-w-2xl mx-auto">
            Professional certifications and completed courses
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-4 p-6 bg-slate-50 dark:bg-slate-800 rounded-xl hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <div>
                <h3 className="text-lg text-slate-900 dark:text-slate-100 mb-1">
                  {cert.title}
                </h3>
                <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">
                  {cert.issuer}
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}