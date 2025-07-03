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
- ✨ **Interactive Glowing Cards** with mouse-following effects
- 🏢 **Professional Experience Timeline** with scroll animations
- 🔄 **Infinite Logo Carousel** with seamless looping animation
- 🧩 **Feature Cards** showcasing key abilities and services
- 🛠️ **3D Tech Stack Display** with floating interactive models
- 🧊 **Animated 3D Icons** with hover effects and realistic lighting

### Animation Features
- ✨ GSAP-powered title animations with staggered entrances
- 🔄 Dynamic text cycling in hero section
- 📜 ScrollTrigger-based animations for project reveals
- 🔢 Numerical statistics with animated counting effect
- 🌊 Smooth transitions between sections
- 🌟 Mouse-reactive glowing borders on cards
- ⏱️ Timeline animations that respond to scroll position
- 🔄 Optimized infinite marquee with no visible breaks
- 💫 Floating 3D models with realistic physics
- 🌓 Environment lighting and shadows for 3D elements

## 🛠️ Tech Stack

| Technology | Purpose | Implementation |
|------------|---------|----------------|
| **React** | Frontend framework | Component-based UI architecture |
| **Tailwind CSS** | Styling | Utility-first approach with custom classes |
| **Three.js** | 3D rendering | Core 3D graphics engine with custom materials and lighting |
| **React Three Fiber** | Three.js integration | React components for 3D elements with Canvas |
| **@react-three/drei** | 3D helpers | Environment, Float, OrbitControls, useGLTF utilities |
| **GSAP** | Animations | Advanced timeline-based animations with ScrollTrigger |
| **ScrollTrigger** | Scroll animations | Trigger animations on scroll position |
| **React CountUp** | Numerical animations | Animated number counting |
| **GLTFJSX** | 3D model conversion | Converting .glb files to React components |
| **React-Responsive** | Responsive design | Media queries for different devices |
| **useRef Hook** | DOM references | Direct access to DOM elements for animations |

## 🏗️ Project Structure
```
📦 3D-Portfolio/
├── public/                  # Static assets
│   ├── images/              # Image assets (bg, logos, project images)
│   └── models/              # 3D model files (.glb)
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── AnimatedCounter.jsx  # Animated statistics counter
│   │   ├── Button.jsx       # Custom animated button
│   │   ├── GlowCard.jsx     # Interactive card with glowing effect
│   │   ├── TitleHeader.jsx  # Section title component
│   │   ├── TechIcon.jsx     # Technology icon component
│   │   ├── NavBar.jsx       # Navigation bar with scroll effects
│   │   └── HeroModels/      # 3D models for hero section
│   ├── sections/            # Main page sections
│   │   ├── hero.jsx         # Hero section with 3D scene
│   │   ├── ShocaseSection.jsx  # Project showcase section
│   │   ├── LogoSection.jsx  # Infinite logo carousel
│   │   ├── ExperienceSection.jsx # Work experience with timeline
│   │   ├── FeatureCards.jsx # Skills and abilities display
│   │   └── TechStack.jsx    # Technology stack section with icons
│   ├── constants/           # App constants and configuration
│   │   └── index.js         # Exported data (words, counterItems, etc.)
│   ├── App.jsx              # Main application component
│   └── index.css            # Global styles and Tailwind components
├── tailwind.config.js       # Tailwind configuration
└── package.json             # Project dependencies
```

## ✨ New Components and Sections

### GlowCard Component
The **GlowCard** component features an animated hover effect that enhances user interaction. When hovered over, the card emits a glowing effect, drawing attention to the content. This component is designed to showcase key features or information in a visually appealing manner.

### TitleHeader Component
The **TitleHeader** component serves as a reusable header for various sections throughout the portfolio. It provides a consistent look and feel, ensuring that each section is clearly defined and visually appealing.

### Experience Section
The **Experience Section** highlights the user's professional journey and skills. It includes animations that engage users as they scroll, providing a dynamic way to present career milestones and achievements.

### Feature Section
The **Feature Section** showcases the main features of the portfolio. Each feature is presented with engaging animations that activate on scroll, making the content more interactive and visually appealing.

### LogoSection
The **LogoSection** displays various logos in a continuous marquee animation. This section utilizes GSAP for smooth transitions and animations, ensuring that the logos flow seamlessly across the screen without interruptions. The use of `useRef` allows for efficient DOM manipulation, enhancing performance.

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

### GSAP and useRef
The project leverages **GSAP** (GreenSock Animation Platform) for advanced animations throughout the portfolio. This library allows for smooth, high-performance animations that enhance user experience. The **useRef** hook is utilized to directly reference DOM elements, enabling precise control over animations and transitions.

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