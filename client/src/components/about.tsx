import { motion } from "framer-motion";
import { Tag, Shield } from "lucide-react";
import DroneIcon from "@/components/drone-icon";

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">About Me</h2>
            <p className="text-lg text-muted-foreground mb-6">
              I'm a passionate drone pilot and aerial photographer with over 5 years of experience capturing stunning visuals from unique perspectives. My journey began with a fascination for flight and evolved into a professional service helping clients showcase their properties, events, and projects from breathtaking aerial viewpoints.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Licensed and insured, I specialize in real estate photography, commercial videography, and creative aerial content. Every project is approached with meticulous attention to detail and a commitment to delivering exceptional results that exceed expectations.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-neutral rounded-xl"
              >
                <div className="text-3xl font-bold text-primary mb-2">150+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-neutral rounded-xl"
              >
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </motion.div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-4">
                <Tag className="text-primary text-xl" />
                <span className="text-muted-foreground">FAA Part 107 Licensed</span>
              </div>
              <div className="flex items-center space-x-4">
                <Shield className="text-primary text-xl" />
                <span className="text-muted-foreground">Fully Insured</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800"
              alt="Professional drone pilot"
              className="rounded-2xl shadow-2xl w-full"
            />
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-xl"
            >
              <DroneIcon className="w-8 h-8" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
