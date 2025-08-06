# Be Feynman

A Next.js application that implements the Feynman Method for learning - explain topics to an AI that asks perfect questions until you truly understand them.

## Overview

"Explain It Until You Own It" - Pick any topic, teach it to an AI student, and walk away with genuine understanding. This app creates an interactive learning environment where you explain concepts and get challenged with clarifying questions that reveal knowledge gaps.

## Features

- Clean, modern landing page built with Next.js 14
- Responsive design optimized for all devices
- TypeScript for type safety
- Optimized images with Next.js Image component
- CSS custom properties for consistent theming
- Inter font integration for clean typography

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd feynman
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```
Edit `.env.local` with your configuration values.

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
feynman/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout component
│   │   └── page.tsx            # Home page
│   ├── components/
│   │   ├── Header.tsx          # Site header
│   │   ├── Hero.tsx            # Hero section
│   │   ├── FeatureCard.tsx     # Feature grid cards
│   │   └── Footer.tsx          # Site footer
│   └── styles/
│       └── globals.css         # Global styles
├── public/                     # Static assets
├── next.config.js             # Next.js configuration
├── package.json               # Dependencies and scripts
└── tsconfig.json             # TypeScript configuration
```

## Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

This project can be deployed on any platform that supports Next.js:

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
- Netlify
- Railway
- AWS Amplify
- Docker containers

## Future Enhancements

- AI integration for interactive conversations
- User authentication and session management
- Note-taking and session history
- Topic suggestions and difficulty levels
- Progress tracking and analytics

## The Feynman Method

This application is based on the Feynman Technique:

1. **Pick Your Topic** - Choose something you want to understand
2. **Start Explaining** - Teach it in simple terms
3. **Get Challenged** - Identify gaps in your knowledge
4. **Master It** - Refine until you can explain it clearly



## License

This project is licensed under the MIT License.