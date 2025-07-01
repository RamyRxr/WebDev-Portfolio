# 🚀 3D Portfolio | Ramy's Interactive Developer Space

Welcome to my 3D portfolio — a modern, interactive space showcasing my web development skills and projects. This portfolio combines sleek design with immersive 3D elements to create an engaging user experience.

![Portfolio Preview](./preview.png)

## ✨ Features Overview

### Core Features
- 🎯 **Interactive Hero Section** with animated word cycling and GSAP animations
- 🌐 **3D Model Integration** through React Three Fiber
- 🎨 **Custom UI Components** with advanced hover effects and animations
- 📊 **Animated Statistics** with CountUp for dynamic number displays
- 🖼️ **Project Showcase** with scroll-triggered reveal animations
- 📱 **Fully Responsive Design** optimized for all device sizes

### Animation Features
- ✨ GSAP-powered title animations with staggered entrances
- 🔄 Dynamic text cycling in hero section
- 📜 ScrollTrigger-based animations for project reveals
- 🔢 Numerical statistics with animated counting effect
- 🌊 Smooth transitions between sections

## 🛠️ Tech Stack

| Technology | Purpose | Implementation |
|------------|---------|----------------|
| **React** | Frontend framework | Component-based UI architecture |
| **Tailwind CSS** | Styling | Utility-first approach with custom classes |
| **Three.js** | 3D rendering | Core 3D graphics engine |
| **React Three Fiber** | Three.js integration | React components for 3D elements |
| **GSAP** | Animations | Advanced timeline-based animations |
| **ScrollTrigger** | Scroll animations | Trigger animations on scroll |
| **React CountUp** | Numerical animations | Animated number counting |
| **GLTFJSX** | 3D model conversion | Converting .glb files to React components |
| **React-Responsive** | Responsive design | Media queries for different devices |

## 🏗️ Project Structure
```
📦 3D-Portfolio/
├── public/              # Static assets (3D models, images)
│   └── images/          # Image assets used throughout the site
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Button.jsx   # Custom button with animations
│   │   └── HeroModels/  # 3D models for the hero section
│   ├── constants/       # App constants and configuration
│   ├── sections/        # Main page sections
│   │   └── hero.jsx     # Hero section with 3D integration
│   ├── App.jsx          # Main application component
│   └── index.css        # Global styles and Tailwind components
└── package.json         # Project dependencies
```

## 💡 Implementation Details

### 3D Model Integration

The portfolio features a 3D scene in the hero section using:
- GLB models converted to React components using `npx gltfjsx`
- React Three Fiber for declarative 3D rendering
- Responsive positioning based on screen size

### Animation System

The site includes multiple animation types:
- Text cycling animation in the hero headline
- Custom button hover animations
- Transition effects between sections
- GSAP animations for smooth element entrances

### Custom UI Components

- **Button Component**: Features gradient background and animated arrow on hover
- **Hero Section**: Combines animated text with 3D scene integration
- **Responsive Layout**: Adapts seamlessly from mobile to desktop
- **CountUp Component**: Displays animated numerical statistics

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone [your-repo-url]
   cd 3D-Portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start development server
   ```bash
   npm run dev
   ```

## 📋 Development Progress

### ✅ Completed
- Initial project setup with React and Tailwind CSS
- Hero section with animated text cycling
- Button component with custom animations
- 3D model integration using gltfjsx and React Three Fiber
- Responsive design implementation
- GSAP animations for UI elements

### 🔄 In Progress
- Additional portfolio sections (About, Projects, Contact)
- More interactive 3D elements
- Animation refinements

### 🔮 Future Plans
- Dark/Light theme toggle
- Project showcase with detailed case studies
- Interactive resume section
- Contact form with validation

## 📬 Contact

Feel free to reach out if you have any questions or would like to collaborate!

**Ramy** - [Your Contact Info]

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---
> Built with React, Tailwind CSS, and Three.js