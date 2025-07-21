import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Gallery from "@/components/gallery";
import About from "@/components/about";
import Services from "@/components/services";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Lightbox from "@/components/lightbox";
import { useState } from "react";

export default function Home() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState({ src: "", alt: "" });

  const openLightbox = (src: string, alt: string) => {
    setCurrentImage({ src, alt });
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage({ src: "", alt: "" });
  };

  return (
    <div className="font-sans text-textPrimary bg-background">
      <Navigation />
      <Hero />
      <Gallery onImageClick={openLightbox} />
      <About />
      <Services />
      <Contact />
      <Footer />
      <Lightbox 
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        image={currentImage}
      />
    </div>
  );
}
