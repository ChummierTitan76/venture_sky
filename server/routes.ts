import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      
      // In a real application, you would send an email here
      console.log("New contact submission:", contact);
      
      res.json({ 
        success: true, 
        message: "Thank you for your message! I will get back to you within 24 hours.",
        contact: contact 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Please fill in all required fields correctly.",
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "An error occurred while sending your message. Please try again." 
        });
      }
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve contacts" 
      });
    }
  });

  // Get gallery items
  app.get("/api/gallery", async (req, res) => {
    try {
      const items = await storage.getGalleryItems();
      res.json(items);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve gallery items" 
      });
    }
  });

  // Get featured gallery items
  app.get("/api/gallery/featured", async (req, res) => {
    try {
      const items = await storage.getFeaturedGalleryItems();
      res.json(items);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve featured gallery items" 
      });
    }
  });

  // Get service packages
  app.get("/api/packages", async (req, res) => {
    try {
      const packages = await storage.getServicePackages();
      res.json(packages);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve service packages" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
