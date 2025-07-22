# Windows Setup Guide for Venture Sky Co.

## Prerequisites for Windows

### 1. Install Required Software
1. **Node.js**: Download from https://nodejs.org/ (LTS version recommended)
2. **Git**: Download from https://git-scm.com/download/win
3. **Visual Studio Code**: Download from https://code.visualstudio.com/

### 2. Install VS Code Extensions (Recommended)
- TypeScript and JavaScript Language Features (built-in)
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- Prettier - Code formatter
- GitLens

## Clone Repository to Windows

### Option 1: Using VS Code (Recommended)
1. Open Visual Studio Code
2. Press `Ctrl+Shift+P` to open command palette
3. Type "Git: Clone" and select it
4. Enter repository URL: `https://github.com/ChummierTitan76/venture_sky.git`
5. Choose folder location (e.g., `C:\Users\YourName\Projects\`)
6. Click "Open" when prompted

### Option 2: Using Command Prompt/PowerShell
1. Open Command Prompt or PowerShell
2. Navigate to your desired folder:
   ```cmd
   cd C:\Users\YourName\Projects
   ```
3. Clone the repository:
   ```cmd
   git clone https://github.com/ChummierTitan76/venture_sky.git
   ```
4. Open in VS Code:
   ```cmd
   cd venture_sky
   code .
   ```

## Setup and Run Project

### 1. Install Dependencies
Open terminal in VS Code (`Ctrl+`` ` or Terminal → New Terminal) and run:
```cmd
npm install
```

### 2. Set Up Environment Variables
1. Copy the example environment file:
   ```cmd
   copy .env.example .env
   ```
2. Edit `.env` file in VS Code with your database URL:
   ```
   DATABASE_URL=your_postgresql_connection_string
   NODE_ENV=development
   ```

### 3. Run Development Server
Since cross-env is installed, you can use:
```cmd
npm run dev
```

If that doesn't work on Windows, use the batch file (see below) or run directly:
```cmd
set NODE_ENV=development && npx tsx server/index.ts
```

## Windows Batch Files (Alternative)

I've created batch files for easier Windows usage:

### dev.bat - Start Development Server
```batch
@echo off
set NODE_ENV=development
npx tsx server/index.ts
```

### build.bat - Build for Production
```batch
@echo off
npm run build
```

## Troubleshooting Windows Issues

### Common Problems and Solutions

1. **"tsx is not recognized" error:**
   ```cmd
   npm install -g tsx
   ```

2. **Permission errors:**
   - Run VS Code as Administrator
   - Or use PowerShell instead of Command Prompt

3. **Node modules issues:**
   - Delete `node_modules` folder
   - Delete `package-lock.json`
   - Run `npm install` again

4. **Environment variable not working:**
   - Use PowerShell instead of Command Prompt:
   ```powershell
   $env:NODE_ENV="development"; npx tsx server/index.ts
   ```

5. **Port already in use:**
   - Check what's running on port 5000:
   ```cmd
   netstat -ano | findstr :5000
   ```
   - Kill the process if needed:
   ```cmd
   taskkill /PID [process_id] /F
   ```

## Development Workflow on Windows

1. **Start VS Code**: `code .` in project folder
2. **Open Terminal**: `Ctrl+`` ` 
3. **Start Dev Server**: `npm run dev`
4. **Open Browser**: Navigate to `http://localhost:5000`
5. **Edit Files**: Changes auto-reload with hot module replacement

## VS Code Configuration for Windows

### Recommended settings.json additions:
```json
{
  "terminal.integrated.defaultProfile.windows": "PowerShell",
  "prettier.singleQuote": true,
  "prettier.trailingComma": "es5",
  "editor.formatOnSave": true,
  "typescript.preferences.importModuleSpecifier": "relative"
}
```

## Database Setup

For development, you can use:
1. **Local PostgreSQL**: Install PostgreSQL for Windows
2. **Cloud Database**: Neon.tech (recommended for easy setup)
3. **Docker**: If you have Docker Desktop for Windows

### Neon Database Setup (Easiest):
1. Go to https://neon.tech
2. Create free account
3. Create new project
4. Copy connection string
5. Add to `.env` file as `DATABASE_URL`

## Running the Project

After setup, your typical workflow:

1. Open VS Code
2. Open terminal (`Ctrl+`` `)
3. Run: `npm run dev`
4. Open browser to `http://localhost:5000`
5. Edit code - changes will auto-reload

The website includes:
- Responsive design (works on mobile and desktop)
- Interactive gallery with lightbox
- Contact form with database storage
- Service packages display
- Light/dark theme toggle
- Custom drone icons

## Deployment from Windows

Once you're ready to deploy:

1. **Push changes to GitHub:**
   ```cmd
   git add .
   git commit -m "Your commit message"
   git push
   ```

2. **Deploy to Vercel:**
   - Go to vercel.com
   - Connect GitHub repo
   - Add `DATABASE_URL` environment variable
   - Deploy

Your Windows development environment is now ready!