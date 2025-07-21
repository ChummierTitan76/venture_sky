import { motion } from "framer-motion";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Phone, Mail, MapPin, Instagram, Youtube, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import type { InsertContact } from "@shared/schema";

export default function Contact() {
  const [formData, setFormData] = useState<InsertContact>({
    name: "",
    email: "",
    project: "",
    budget: "",
    message: ""
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message Sent!",
        description: data.message,
      });
      setFormData({
        name: "",
        email: "",
        project: "",
        budget: "",
        message: ""
      });
      queryClient.invalidateQueries({ queryKey: ['/api/contacts'] });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    mutation.mutate(formData);
  };

  const handleInputChange = (field: keyof InsertContact, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to capture your project from a new perspective? Contact me for a consultation and custom quote.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-secondary mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="text-primary text-xl mr-4" />
                  <span className="text-lg">(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="text-primary text-xl mr-4" />
                  <span className="text-lg">hello@ventureskyco.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-primary text-xl mr-4" />
                  <span className="text-lg">San Francisco Bay Area</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-secondary mb-4">Service Areas</h4>
              <ul className="text-muted-foreground space-y-2">
                <li>• San Francisco</li>
                <li>• San Jose</li>
                <li>• Oakland</li>
                <li>• Marin County</li>
                <li>• Peninsula</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-secondary mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href="#"
                  className="text-primary hover:text-blue-700 text-2xl transition-colors duration-200"
                >
                  <Instagram />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href="#"
                  className="text-primary hover:text-blue-700 text-2xl transition-colors duration-200"
                >
                  <Youtube />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href="#"
                  className="text-primary hover:text-blue-700 text-2xl transition-colors duration-200"
                >
                  <Linkedin />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-neutral">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-card-foreground mb-2">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="transition-all duration-200"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-card-foreground mb-2">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="project" className="text-sm font-medium text-card-foreground mb-2">
                        Project Type
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("project", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="real-estate">Real Estate</SelectItem>
                          <SelectItem value="commercial">Commercial</SelectItem>
                          <SelectItem value="event">Event Coverage</SelectItem>
                          <SelectItem value="construction">Construction Progress</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="budget" className="text-sm font-medium text-card-foreground mb-2">
                        Budget Range
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("budget", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-500">Under $500</SelectItem>
                          <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                          <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                          <SelectItem value="2500-plus">$2,500+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-card-foreground mb-2">
                      Project Details *
                    </Label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder="Tell me about your project, timeline, and any specific requirements..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                      className="transition-all duration-200"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={mutation.isPending}
                    className="w-full bg-primary hover:bg-blue-700 text-white py-4 font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    {mutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
