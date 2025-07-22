# Venture Sky Co. - Deployment Guide

## Step 1: Download Project from Replit
1. In Replit, click the three dots menu (⋯) in the file explorer
2. Select "Download as ZIP"
3. Extract the ZIP file to your laptop

## Step 2: Initialize Git and Push to GitHub
Open terminal/command prompt in your project folder and run:

```bash
# Initialize git repository
git init

# Add your GitHub repository as remote
git remote add origin https://github.com/ChummierTitan76/venture_sky.git

# Add all files to git
git add .

# Commit your changes
git commit -m "Initial commit: Venture Sky Co. drone services website"

# Set main branch and push to GitHub
git branch -M main
git push -u origin main --force
```

## Step 3: Install Dependencies on Your Laptop
```bash
# Install Node.js dependencies
npm install

# Install global dependencies if needed
npm install -g tsx
```

## Step 4: Set Up Environment Variables
Create a `.env` file in your project root:

```env
DATABASE_URL=your_postgresql_connection_string
NODE_ENV=development
```

## Step 5: Run Locally
```bash
# Start development server
npm run dev
```

Your site will be available at `http://localhost:5000`

## Deployment Options

### Option A: Vercel (Recommended)
1. Push code to GitHub (steps above)
2. Go to https://vercel.com and sign up
3. Click "New Project" → Import from GitHub
4. Select `venture_sky` repository
5. Add environment variables:
   - `DATABASE_URL`: Your database connection string
   - `NODE_ENV`: `production`
6. Deploy

### Option B: Netlify
1. Go to https://netlify.com and sign up
2. Connect GitHub repository
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Add environment variables in Netlify dashboard

### Option C: Railway
1. Go to https://railway.app and sign up
2. Connect GitHub repository
3. Add environment variables
4. Deploy automatically

## Database Setup for Production
You'll need a production PostgreSQL database:

### Recommended: Neon Database (Free tier available)
1. Go to https://neon.tech
2. Create account and new project
3. Copy the connection string
4. Use this as your `DATABASE_URL` in deployment

### Alternative: Supabase
1. Go to https://supabase.com
2. Create new project
3. Get PostgreSQL connection string from Settings → Database
4. Use as `DATABASE_URL`

## Project Structure
```
venture_sky/
├── client/          # React frontend
├── server/          # Express backend
├── shared/          # Shared types and schemas
├── package.json     # Dependencies and scripts
└── .env            # Environment variables (create this)
```

## Important Notes
- Make sure Node.js is installed on your laptop
- The project uses PostgreSQL database - you'll need a production database for deployment
- All styling is done with Tailwind CSS
- The project includes light/dark theme toggle
- Responsive design works on both desktop and mobile

## Troubleshooting
- If `npm install` fails, try deleting `node_modules` and `package-lock.json`, then run `npm install` again
- If database connection fails, verify your `DATABASE_URL` is correct
- For deployment issues, check the platform's logs for specific error messages