# Day Tracker

A simple day counter web application with animated sun/moon and cloud effects.

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm start
   ```

3. Open http://localhost:3000 in your browser

## Deployment on Render

1. Push your code to GitHub
2. Connect your GitHub repo to Render
3. Create a new Web Service
4. Set the following:
   - **Runtime**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Deploy!

The app will automatically use the PORT environment variable provided by Render.