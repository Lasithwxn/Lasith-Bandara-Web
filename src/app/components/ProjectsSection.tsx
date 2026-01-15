import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI-Based Academic Project",
    description: "Machine learning model for data classification using Python and scikit-learn",
    image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBjb2RlfGVufDF8fHx8MTc2NjkwNzEwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tech: ["Python", "ML", "Jupyter"],
    status: "Completed",
    github: true,
    demo: false
  },
  {
    title: "Personal Portfolio Website",
    description: "Modern responsive portfolio built with React and Tailwind CSS",
    image: "https://images.unsplash.com/photo-1587120511358-98f9104cc096?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaWxsdXN0cmF0aW9ufGVufDF8fHx8MTc2NjgxMDI3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tech: ["React", "Tailwind", "TypeScript"],
    status: "Completed",
    github: true,
    demo: true
  },
  {
    title: "Cloud Infrastructure Learning",
    description: "Hands-on AWS projects exploring EC2, S3, and Lambda services",
    image: "https://images.unsplash.com/photo-1660165458059-57cfb6cc87e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3klMjBhYnN0cmFjdHxlbnwxfHx8fDE3NjY4NDk1NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tech: ["AWS", "Cloud", "DevOps"],
    status: "In Progress",
    github: false,
    demo: false
  },
  {
    title: "Sustainability Data Tracker",
    description: "Learning project tracking environmental metrics and carbon footprint data",
    image: "https://images.unsplash.com/photo-1705254613735-1abb457f8a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFydCUyMGNvbG9yZnVsfGVufDF8fHx8MTc2Njg4NTI2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tech: ["JavaScript", "APIs", "Data Viz"],
    status: "Learning Project",
    github: true,
    demo: false
  },
  {
    title: "Neural Network Fundamentals",
    description: "Educational project exploring deep learning concepts with TensorFlow",
    image: "https://images.unsplash.com/photo-1712784311939-d2e7c0eaf7df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcGFpbnRpbmclMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzY2ODY5OTA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tech: ["TensorFlow", "Python", "AI"],
    status: "In Progress",
    github: true,
    demo: false
  },
  {
    title: "Web Development Practice",
    description: "Collection of frontend projects for learning modern web development",
    image: "https://images.unsplash.com/photo-1677212004257-103cfa6b59d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyYWN0ZXIlMjBkZXNpZ24lMjBhcnR8ZW58MXx8fHwxNzY2ODUwMzYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tech: ["HTML", "CSS", "JavaScript"],
    status: "Learning Project",
    github: true,
    demo: true
  },
];

const statusColors = {
  "Completed": "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  "In Progress": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  "Learning Project": "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
};

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
    >
      <div className="aspect-video overflow-hidden bg-slate-100 dark:bg-slate-700">
        <ImageWithFallback 
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg text-slate-900 dark:text-slate-100 flex-1">
            {project.title}
          </h3>
          <Badge className={statusColors[project.status as keyof typeof statusColors]}>
            {project.status}
          </Badge>
        </div>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span key={i} className="px-2 py-1 text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          {project.github && (
            <button className="flex items-center gap-1 px-3 py-1.5 text-sm bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg transition-colors">
              <Github className="w-4 h-4" />
              GitHub
            </button>
          )}
          {project.demo && (
            <button className="flex items-center gap-1 px-3 py-1.5 text-sm bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-200 dark:hover:bg-emerald-900/50 rounded-lg transition-colors">
              <ExternalLink className="w-4 h-4" />
              Demo
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-slate-900 dark:text-slate-100 text-center mb-4">Projects</h2>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-16 max-w-2xl mx-auto">
            Learning-focused projects demonstrating practical application of technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}