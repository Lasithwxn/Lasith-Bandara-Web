import { motion } from "motion/react";
import { Code2, Globe, Brain, Cloud, Github, Figma as FigmaIcon, Terminal, Users, Lightbulb, Target } from "lucide-react";

const technicalSkills = [
  { name: "Programming Fundamentals", icon: Code2 },
  { name: "Web Technologies", icon: Globe },
  { name: "AI & Machine Learning Basics", icon: Brain },
  { name: "Cloud & DevOps Fundamentals", icon: Cloud },
];

const toolsPlatforms = [
  { name: "Git & GitHub", icon: Github },
  { name: "AWS (Learning)", icon: Cloud },
  { name: "Figma", icon: FigmaIcon },
  { name: "Linux / Windows", icon: Terminal },
];

const softSkills = [
  { name: "Problem-Solving", icon: Lightbulb },
  { name: "Continuous Learning", icon: Target },
  { name: "Team Collaboration", icon: Users },
];

function SkillCard({ skill, index }: { skill: typeof technicalSkills[0], index: number }) {
  const Icon = skill.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-gradient-to-r hover:from-emerald-50 hover:to-blue-50 dark:hover:from-emerald-950/30 dark:hover:to-blue-950/30 transition-all"
    >
      <div className="w-10 h-10 bg-gradient-to-br from-emerald-100 to-blue-100 dark:from-emerald-900/50 dark:to-blue-900/50 rounded-lg flex items-center justify-center">
        <Icon className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />
      </div>
      <span className="text-slate-700 dark:text-slate-300">{skill.name}</span>
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-slate-900 dark:text-slate-100 text-center mb-4">Skills & Expertise</h2>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-16 max-w-2xl mx-auto">
            Building a strong foundation across technical and collaborative domains
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Technical Skills */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-xl text-slate-800 dark:text-slate-200 mb-6"
            >
              Technical Skills
            </motion.h3>
            <div className="space-y-3">
              {technicalSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Tools & Platforms */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-xl text-slate-800 dark:text-slate-200 mb-6"
            >
              Tools & Platforms
            </motion.h3>
            <div className="space-y-3">
              {toolsPlatforms.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-xl text-slate-800 dark:text-slate-200 mb-6"
            >
              Soft Skills
            </motion.h3>
            <div className="space-y-3">
              {softSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}