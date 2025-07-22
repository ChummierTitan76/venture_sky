# Venture Sky Co. - Professional Drone Services Website

A modern, responsive website for Venture Sky Co., showcasing professional drone photography and videography services.

## Features

- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Interactive Gallery**: Portfolio showcase with lightbox functionality
- **Service Packages**: Professional pricing and service displays
- **Contact Form**: Client inquiry form with database storage
- **Light/Dark Theme**: Toggle with automatic system preference detection
- **Custom Drone Icons**: Wireframe-style DJI Inspire 2 and Mini 3 designs
- **Smooth Animations**: Framer Motion powered transitions

## Tech Stack

### Frontend
- React 18 with TypeScript
- Vite for fast development
- Tailwind CSS for styling
- shadcn/ui components
- Framer Motion for animations
- TanStack Query for state management

### Backend
- Node.js with Express
- TypeScript
- PostgreSQL with Drizzle ORM
- Neon Database (serverless PostgreSQL)

## Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/ChummierTitan76/venture_sky.git
   cd venture_sky
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your database URL
   ```

4. Start development server:
   ```bash
   npm run dev
   ```

5. Open http://localhost:5000 in your browser

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run db:push` - Push database schema changes

## Deployment

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed deployment instructions.

### Quick Deploy Options:
- **Vercel**: Connect GitHub repo, add DATABASE_URL, deploy
- **Netlify**: Connect GitHub repo, build settings configured
- **Railway**: Automatic deployment with PostgreSQL included

## Project Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utilities and configurations
├── server/                # Express backend
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   ├── db.ts             # Database connection
│   └── storage.ts        # Data access layer
├── shared/               # Shared types and schemas
│   └── schema.ts         # Database schema and types
└── components.json       # shadcn/ui configuration
```

## Environment Variables

Required environment variables:

- `DATABASE_URL`: PostgreSQL connection string
- `NODE_ENV`: Environment (development/production)

## Database Schema

The application uses PostgreSQL with the following main tables:

- **users**: User authentication (prepared for admin features)
- **contacts**: Customer inquiries from contact form
- **gallery_items**: Portfolio images and metadata
- **service_packages**: Service offerings and pricing

## Contact

For questions about this project:
- Email: hello@ventureskyco.com
- Website: [Venture Sky Co.](https://your-deployed-url.com)

---

Built with ❤️ for professional drone services