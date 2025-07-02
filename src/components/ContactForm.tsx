import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white/70 backdrop-blur-sm border-0 shadow-lg rounded-2xl p-8">
      <h2 className="text-2xl font-bold text-fresh-700 mb-6">
        Send us a Message
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">First Name</label>
            <Input
              name="firstName"
              placeholder="Your first name"
              required
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Last Name</label>
            <Input
              name="lastName"
              placeholder="Your last name"
              required
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <Input
            name="email"
            type="email"
            placeholder="your.email@example.com"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Phone (Optional)
          </label>
          <Input
            name="phone"
            type="tel"
            placeholder="+1 (607) 000-0000"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Subject</label>
          <Input
            name="subject"
            placeholder="What is this regarding?"
            required
            value={formData.subject}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Message</label>
          <Textarea
            name="message"
            placeholder="Tell us how we can help you..."
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full bg-gradient-to-r from-fresh-500 to-fresh-600 hover:from-fresh-600 hover:to-fresh-700 text-white shadow-lg"
        >
          <Send className="w-5 h-5 mr-2" />
          Send Message
        </Button>
      </form>
    </div>
  );
}
