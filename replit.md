# SkyVision Drone Services - Aerial Photography Website

## Overview

This is a full-stack web application for a professional drone photography and videography business called "SkyVision". The application features a modern, responsive website built with React and TypeScript on the frontend, Express.js on the backend, and uses PostgreSQL with Drizzle ORM for data management. The site showcases aerial photography services, includes a portfolio gallery, service packages, and a contact form for potential clients.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture with clear separation between frontend and backend concerns:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Animations**: Framer Motion for smooth animations and transitions

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for REST API endpoints
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Build Tool**: esbuild for production builds
- **Development**: tsx for TypeScript execution in development

## Key Components

### Frontend Components
- **Navigation**: Fixed header with smooth scrolling navigation
- **Hero Section**: Full-screen landing with call-to-action
- **Gallery**: Interactive portfolio showcase with lightbox functionality
- **About Section**: Professional background and credentials
- **Services**: Package offerings with pricing
- **Contact Form**: Lead capture with validation
- **Footer**: Additional navigation and company info

### Backend Services
- **Contact API**: Handles form submissions and stores inquiries
- **Gallery API**: Serves portfolio images and metadata
- **Services API**: Provides package information
- **Storage Layer**: Abstracted data access with in-memory fallback

### Database Schema
- **users**: Authentication (prepared for future admin features)
- **contacts**: Customer inquiries and form submissions
- **gallery_items**: Portfolio images with categorization
- **service_packages**: Pricing and feature information

## Data Flow

1. **Client Request**: Frontend makes API calls using TanStack Query
2. **API Processing**: Express routes handle requests with validation
3. **Data Access**: Storage layer abstracts database operations
4. **Response**: JSON responses with error handling
5. **UI Updates**: React Query manages cache invalidation and UI updates

The application uses optimistic updates for better user experience and implements proper error boundaries and loading states throughout.

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library

### Data and State Management
- **TanStack Query**: Server state management
- **React Hook Form**: Form handling with validation
- **Zod**: Schema validation for type safety
- **Drizzle ORM**: Type-safe database operations

### Database and Hosting
- **Neon Database**: Serverless PostgreSQL provider
- **Replit**: Development and deployment platform

## Deployment Strategy

### Development
- Vite dev server for frontend with HMR
- tsx for TypeScript execution on backend
- Concurrent development with proxy setup

### Production Build
- Vite builds optimized frontend bundle
- esbuild bundles backend for Node.js
- Static files served from Express
- Environment variables for database connection

### Database Management
- Drizzle Kit for schema migrations
- Schema defined in shared directory for type safety
- Database URL configuration via environment variables

The architecture prioritizes developer experience with TypeScript throughout, fast development cycles with hot reloading, and production readiness with optimized builds and proper error handling.