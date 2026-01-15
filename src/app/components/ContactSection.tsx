import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { motion } from "motion/react";
import { Send, Mail, MessageSquare } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <MessageSquare className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            <h2 className="text-slate-900 dark:text-slate-100 text-center">Get In Touch</h2>
          </div>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-16 max-w-2xl mx-auto">
            Whether you have a question, opportunity, or just want to say hello, I'd love to hear from you
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg space-y-6 border border-slate-200 dark:border-slate-700">
            <div>
              <label htmlFor="name" className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 focus:border-emerald-500 dark:focus:border-emerald-400 dark:text-white"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                className="bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 focus:border-emerald-500 dark:focus:border-emerald-400 dark:text-white"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm mb-2 text-slate-700 dark:text-slate-300">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows={6}
                required
                className="bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 focus:border-emerald-500 dark:focus:border-emerald-400 dark:text-white"
              />
            </div>

            <Button 
              type="submit" 
              size="lg"
              className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 dark:from-emerald-500 dark:to-emerald-600 dark:hover:from-emerald-600 dark:hover:to-emerald-700 text-white border-0"
            >
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}