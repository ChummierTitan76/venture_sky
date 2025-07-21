import { users, contacts, galleryItems, servicePackages, type User, type InsertUser, type Contact, type InsertContact, type GalleryItem, type InsertGalleryItem, type ServicePackage, type InsertServicePackage } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  getGalleryItems(): Promise<GalleryItem[]>;
  getFeaturedGalleryItems(): Promise<GalleryItem[]>;
  getServicePackages(): Promise<ServicePackage[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, Contact>;
  private gallery: Map<number, GalleryItem>;
  private packages: Map<number, ServicePackage>;
  private currentUserId: number;
  private currentContactId: number;
  private currentGalleryId: number;
  private currentPackageId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.gallery = new Map();
    this.packages = new Map();
    this.currentUserId = 1;
    this.currentContactId = 1;
    this.currentGalleryId = 1;
    this.currentPackageId = 1;

    // Initialize with sample gallery items
    this.initializeGallery();
    this.initializePackages();
  }

  private initializeGallery() {
    const sampleItems: Omit<GalleryItem, 'id'>[] = [
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

    sampleItems.forEach(item => {
      const id = this.currentGalleryId++;
      this.gallery.set(id, { ...item, id });
    });
  }

  private initializePackages() {
    const samplePackages: Omit<ServicePackage, 'id'>[] = [
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

    samplePackages.forEach(pkg => {
      const id = this.currentPackageId++;
      this.packages.set(id, { ...pkg, id });
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = { 
      ...insertContact,
      project: insertContact.project || null,
      budget: insertContact.budget || null,
      id,
      createdAt: new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }

  async getGalleryItems(): Promise<GalleryItem[]> {
    return Array.from(this.gallery.values());
  }

  async getFeaturedGalleryItems(): Promise<GalleryItem[]> {
    return Array.from(this.gallery.values()).filter(item => item.featured);
  }

  async getServicePackages(): Promise<ServicePackage[]> {
    return Array.from(this.packages.values());
  }
}

// DatabaseStorage implementation
export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const [contact] = await db
      .insert(contacts)
      .values(insertContact)
      .returning();
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return await db.select().from(contacts);
  }

  async getGalleryItems(): Promise<GalleryItem[]> {
    return await db.select().from(galleryItems);
  }

  async getFeaturedGalleryItems(): Promise<GalleryItem[]> {
    return await db.select().from(galleryItems).where(eq(galleryItems.featured, true));
  }

  async getServicePackages(): Promise<ServicePackage[]> {
    return await db.select().from(servicePackages);
  }
}

export const storage = new DatabaseStorage();
