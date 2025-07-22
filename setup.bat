@echo off
echo Setting up Venture Sky Co. project...
echo.
echo Installing dependencies...
npm install
echo.
echo Creating environment file...
if not exist .env (
    copy .env.example .env
    echo Created .env file. Please edit it with your database URL.
) else (
    echo .env file already exists.
)
echo.
echo Setup complete! Run 'dev.bat' to start the development server.
pause