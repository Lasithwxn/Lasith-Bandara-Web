import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { motion } from "motion/react";
import { Send, MessageSquare, CheckCircle, AlertCircle } from "lucide-react";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Initialize EmailJS with your public key
    // Get your public key from: https://dashboard.emailjs.com/admin/account
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "X0cuS95oi0PV_qsjL";
    if (PUBLIC_KEY) emailjs.init(PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus("error");
      setErrorMessage("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "service_txf1qaf";
      const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "template_qsw4nag";
      
      console.log("Sending email with:", {
        SERVICE_ID,
        TEMPLATE_ID,
        data: {
          to_email: "lasithwxn@gmail.com",
          name: formData.name,
          email: formData.email,
          message: formData.message
        }
      });

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          to_email: "lasithwxn@gmail.com",
          name: formData.name,
          email: formData.email,
          message: formData.message
        }
      );
      
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Email send error:", error);
      setSubmitStatus("error");
      setErrorMessage("Failed to send message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
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
            {submitStatus === "success" && (
              <div className="flex items-center gap-3 p-4 bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 rounded-lg">
                <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <p className="text-emerald-800 dark:text-emerald-200">Message sent successfully! I'll get back to you soon.</p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg">
                <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                <p className="text-red-800 dark:text-red-200">{errorMessage}</p>
              </div>
            )}

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
                disabled={isLoading}
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
                disabled={isLoading}
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
                disabled={isLoading}
                required
                className="bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 focus:border-emerald-500 dark:focus:border-emerald-400 dark:text-white"
              />
            </div>

            <Button 
              type="submit" 
              size="lg"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 dark:from-emerald-500 dark:to-emerald-600 dark:hover:from-emerald-600 dark:hover:to-emerald-700 text-white border-0 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5 mr-2" />
              {isLoading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}