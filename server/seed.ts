import { db } from "./db";
import { galleryItems, servicePackages } from "@shared/schema";

async function seedDatabase() {
  console.log("Seeding database...");

  // Check if data already exists
  const existingGallery = await db.select().from(galleryItems).limit(1);
  const existingPackages = await db.select().from(servicePackages).limit(1);

  if (existingGallery.length > 0 && existingPackages.length > 0) {
    console.log("Database already seeded, skipping...");
    return;
  }

  // Seed gallery items
  if (existingGallery.length === 0) {
    const sampleGalleryItems = [
      {
        title: "Aerial City Skyline",
        description: "Modern city skyline captured at golden hour",
        imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "commercial",
        featured: true
      },
      {
        title: "Professional Drone Equipment",
        description: "State-of-the-art drone technology in action",
        imageUrl: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "equipment",
        featured: true
      },
      {
        title: "Coastal Landscape",
        description: "Breathtaking aerial view of coastline",
        imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "landscape",
        featured: true
      },
      {
        title: "Video Production",
        description: "Behind the scenes of drone video production",
        imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "production",
        featured: false
      },
      {
        title: "Real Estate Aerial",
        description: "Luxury property aerial photography",
        imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "real-estate",
        featured: true
      },
      {
        title: "Mountain Valley",
        description: "Stunning mountain landscape from above",
        imageUrl: "https://images.unsplash.com/photo-1464822759844-d150b16c1ddb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "landscape",
        featured: false
      }
    ];

    await db.insert(galleryItems).values(sampleGalleryItems);
    console.log("Gallery items seeded successfully");
  }

  // Seed service packages
  if (existingPackages.length === 0) {
    const samplePackages = [
      {
        name: "Basic Package",
        price: 299,
        duration: "2-3 hours",
        features: [
          "Up to 20 high-resolution photos",
          "Basic editing and color correction",
          "Online gallery delivery",
          "48-hour turnaround"
        ],
        popular: false
      },
      {
        name: "Professional Package",
        price: 599,
        duration: "4-5 hours",
        features: [
          "Up to 50 high-resolution photos",
          "Professional editing & retouching",
          "2-3 minute promotional video",
          "Multiple angle perspectives",
          "24-hour turnaround"
        ],
        popular: true
      },
      {
        name: "Premium Package",
        price: 999,
        duration: "Full day",
        features: [
          "Unlimited high-resolution photos",
          "Cinematic 4K video production",
          "Advanced editing & effects",
          "Custom music & branding",
          "Same-day preview"
        ],
        popular: false
      }
    ];

    await db.insert(servicePackages).values(samplePackages);
    console.log("Service packages seeded successfully");
  }

  console.log("Database seeding completed!");
}

// Run the seed function
seedDatabase().catch(console.error);