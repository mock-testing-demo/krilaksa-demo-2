# Krilaksa - Creative Agency Website

A premium, minimal, story-driven creative agency website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Premium minimal design with editorial feel
- 📱 Fully responsive across all devices
- ⚡ Built with Next.js 14 App Router
- 🎭 Smooth animations with Framer Motion
- 🎯 SEO-optimized structure
- 💼 6 core pages: Home, Services, Work, Portfolio, About, Connect
- 🛍️ Individual service detail pages
- 🎨 Portfolio filtering system
- 📧 Contact form with conversational UX

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Home page
│   ├── services/
│   │   ├── page.tsx        # Services overview
│   │   └── [slug]/
│   │       └── page.tsx    # Individual service pages
│   ├── work/
│   │   └── page.tsx        # Case studies
│   ├── portfolio/
│   │   └── page.tsx        # Portfolio with filtering
│   ├── about/
│   │   └── page.tsx        # About page
│   └── connect/
│       └── page.tsx        # Contact form
├── components/
│   └── Navigation.tsx      # Main navigation component
└── public/                 # Static assets
```

## Pages

### Home
- Hero section with brand tagline
- Three value sections (Creative, Mindset, Trust)
- Service introduction
- Call to action

### Services
- Overview of all 6 services
- Clean card layout
- Links to individual service detail pages

### Service Detail Pages
- Editorial Shoots
- Content Creation
- Social Media Strategy & Management
- E-commerce
- Website
- Branding

### Work (Case Studies)
- Client logos section
- Detailed project case studies
- Challenge and outcome sections
- Service tags

### Portfolio
- Filterable grid layout
- Filter by industry (Fashion, Product, Jewelry, E-commerce)
- Filter by type (Video, Shoot, Website, Branding)
- Pinterest-style browsing

### About
- Brand story and philosophy
- Values and approach
- Team/expertise overview

### Connect
- Conversational contact form
- Service selection (multi-select)
- Timeline options
- Budget ranges
- Thank you confirmation

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Font:** Inter (Google Fonts)

## Design Principles

- Minimal, editorial aesthetic
- White background with dark blue/near black text
- Minimal red accent color
- Generous whitespace
- Light, readable typography
- Smooth, subtle animations
- Focus on storytelling over sales

## Build for Production

```bash
npm run build
npm start
```

## License

All rights reserved - Krilaksa Creative Agency
