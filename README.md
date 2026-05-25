# Akene Uzezi Portfolio

A modern portfolio website showcasing the work and skills of Akene Uzezi, a full-stack software engineer specializing in robust backend systems, containerized infrastructure, and interactive frontend experiences.

## Table of Contents
- [Overview](#overview)
- [Technology Stack](#technology-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Development](#development)
- [Build and Deployment](#build-and-deployment)
- [Contributing](#contributing)
- [License](#license)

## Overview

This portfolio website demonstrates Akene Uzezi's expertise as a full-stack engineer. Built with modern web technologies, it features a clean, responsive design with smooth animations and intuitive navigation. The site highlights experience in backend development with Go and Node.js, containerized infrastructure, and creating fluid interactive frontend experiences.

## Technology Stack

### Frontend
- **Framework**: [Next.js](https://nextjs.org/) 16.2.6 (React 19.2.4)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4
- **Components**: [shadcn/ui](https://ui.shadcn.com/) via shadcn-space
- **Animations**: [Motion](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/) and [Iconify](https://iconify.design/)
- **Typography**: Google Fonts (Geist, Geist Mono, Instrument Serif)
- **Language**: TypeScript

### Development Tools
- **Linting**: ESLint
- **Package Manager**: npm/yarn/pnpm
- **Version Control**: Git

## Features

- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Modern UI**: Clean, professional interface with shadcn/ui components
- **Smooth Animations**: Motion-powered transitions and effects
- **Interactive Elements**: Engaging user experience with hover states and animations
- **Performance Optimized**: Built with Next.js for optimal performance and SEO
- **Accessible**: Follows web accessibility best practices

### Sections
- **Hero Section**: Introduction with animated headline and professional description
- **Navigation**: Easy access to key sections (Home, About, Projects, Experience, Contact)
- **Brand Slider**: Showcase of technologies and companies worked with

## Project Structure

```
akene-uzezi-portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with metadata and fonts
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global CSS styles
│   └── favicon.ico         # Site favicon
├── components/             # Reusable components
│   ├── shadcn-space/       # shadcn/ui components (blocks, animations)
│   │   ├── blocks/         # Pre-built section blocks
│   │   │   ├── hero-01/    # Hero section components
│   │   │   └── navbar-01/  # Navigation bar components
│   │   └── animations/     # Animation components (marquee, etc.)
│   ├── brands/             # Brand/logo components
│   └── ui/                 # Base UI components (button, dropdown-menu, etc.)
├── lib/                    # Utility functions and helpers
├── assets/                 # Static assets (images, icons, etc.)
├── public/                 # Public static files
├── .kilo/                  # Kilo configuration
├── .gitignore              # Git ignore rules
├── eslint.config.mjs       # ESLint configuration
├── next.config.ts          # Next.js configuration
├── postcss.config.mjs      # PostCSS configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd akene-uzezi-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Environment Configuration**
   No environment variables are required for basic functionality. Create a `.env.local` file if needed for future extensibility.

## Development

To start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## Build and Deployment

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm run start
```

The build output will be in the `.next/` directory and can be deployed to any platform that supports Next.js applications (Vercel, Netlify, AWS, Docker, etc.).

## Contributing

While this is a personal portfolio, suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code follows the existing style and passes linting checks.

## License

This project is personal portfolio work. All rights reserved.

---

*Built with Next.js, Tailwind CSS, and shadcn/ui*