# Ahaia Frontend

This is the frontend for the Ahaia education platform, built with [Next.js](https://nextjs.org) and Tailwind CSS.

## Features

- **Modern UI**: TikTok-style interface with full-screen scrolling
- **Custom Audio Player**: Built-in audio player with mute/unmute and play/pause controls
- **Responsive Design**: Works on both desktop and mobile devices
- **Ahaia Branding**: Custom Ahaia logo and branding elements

## Project Structure

- `/src/app/` - Next.js app router pages and layouts
- `/src/components/` - Reusable React components
- `/public/images/` - Static images including the Ahaia logo

## Key Components

- `AhaiaLayout` - Main layout component with navigation
- `FullScreenFeed` - Vertical scrolling feed container
- `FullScreenFeedItem` - Individual feed item (podcast or image)
- `CustomAudioPlayer` - Audio player with controls

## Getting Started

### Prerequisites

- Node.js (v16+)
- Backend server running (see main README)

### Running the Frontend

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Development

- The main page is in `src/app/page.tsx`
- Styling is done with Tailwind CSS
- The application fetches content from the backend API running on port 5001

## Building for Production

```bash
# Create an optimized production build
npm run build

# Start the production server
npm start
```
