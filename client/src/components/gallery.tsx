import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Expand, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import type { GalleryItem } from "@shared/schema";

interface GalleryProps {
  onImageClick: (src: string, alt: string) => void;
}

export default function Gallery({ onImageClick }: GalleryProps) {
  const [showAll, setShowAll] = useState(false);

  const { data: galleryItems = [], isLoading } = useQuery<GalleryItem[]>({
    queryKey: ['/api/gallery'],
  });

  const displayItems = showAll ? galleryItems : galleryItems.slice(0, 6);

  if (isLoading) {
    return (
      <section id="gallery" className="py-20 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Featured Work</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore stunning aerial photography and videography captured with state-of-the-art drone technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-muted rounded-xl h-64 animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="gallery" className="py-20 bg-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Featured Work</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore stunning aerial photography and videography captured with state-of-the-art drone technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-card"
              onClick={() => onImageClick(item.imageUrl, item.title)}
            >
              <div className="relative">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  {item.category === "production" ? (
                    <Play className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  ) : (
                    <Expand className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </div>
              </div>
              {item.title && (
                <div className="p-4">
                  <h3 className="font-semibold text-card-foreground">{item.title}</h3>
                  {item.description && (
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {!showAll && galleryItems.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button
              onClick={() => setShowAll(true)}
              className="bg-primary hover:bg-blue-700 text-white px-8 py-3 font-semibold transition-all duration-300"
            >
              Load More Work
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
