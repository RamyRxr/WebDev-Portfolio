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
- 💬 **Client Testimonials** displayed in interactive glowing cards
- 📨 **Functional Contact Form** with EmailJS integration
- 🖥️ **3D Computer Scene** for visual appeal in the contact section
- 👣 **Footer Section** with social media links and copyright information

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
- 🔄 Interactive OrbitControls for 3D models

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
| **EmailJS** | Contact form | Server-less email sending from contact form |
| **React-Responsive** | Responsive design | Media queries for different devices |
| **useRef Hook** | DOM references | Direct access to DOM elements for animations |

## 🏗️ Project Structure
```
📦 3D-Portfolio/
├── public/                      # Static assets
│   ├── images/                  # Image assets (logos, backgrounds, etc.)
│   │   ├── bg.png              # Background image for hero section
│   │   ├── project1.png        # Project showcase images
│   │   ├── project2.png        # Library Management Platform image
│   │   ├── project3.png        # YC Directory image
│   │   └── star.png            # Star icon for reviews
│   └── models/                  # 3D model files (.glb)
│       ├── react.glb           # React 3D icon model
│       └── other-tech.glb      # Various tech stack 3D models
├── src/
│   ├── components/              # Reusable UI components
│   │   ├── AnimatedCounter.jsx  # Counter statistics with React CountUp
│   │   ├── Button.jsx           # Custom animated button component
│   │   ├── GlowCard.jsx         # Interactive card with mouse-following glow
│   │   ├── NavBar.jsx           # Navigation with scroll effects
│   │   ├── TitleHeader.jsx      # Section title component
│   │   ├── Models/              # 3D model components
│   │   │   ├── TechIcon.jsx     # Tech stack 3D model renderer
│   │   │   └── Contacts/        # Contact related components
│   │   │       ├── ContactExperience.jsx # 3D experience for contact section
│   │   │       └── Contact.jsx   # Contact form component
│   │   └── HeroModels/          # 3D models for hero section
│   │       └── HeroExperience.jsx # Main hero 3D scene
│   ├── constants/               # App constants and configuration
│   │   └── index.js             # Data for sections (words, counterItems, techStack)
│   ├── sections/                # Main page sections
│   │   ├── hero.jsx             # Hero section with 3D integration
│   │   ├── TechStack.jsx        # Tech stack section with 3D icons
│   │   ├── Contact.jsx          # Contact section with form and experience
│   │   ├── Testimonials.jsx      # Testimonials section for user feedback
│   │   └── Footer.jsx           # Footer section for additional navigation
│   ├── App.jsx                  # Main application component
│   └── index.css                # Global styles and Tailwind components
├── tailwind.config.js           # Tailwind configuration
├── vite.config.js               # Vite build configuration
├── package.json                 # Project dependencies and scripts
└── README.md                    # Project documentation
```

## ✨ New Components and Sections

### Contact Section
The **Contact** section allows users to send messages directly through a form. It utilizes **EmailJS** for server-less email sending. Users can fill in their name, email, and message, and upon submission, the form sends an email without needing a backend server.

- **EmailJS Integration**: To set up EmailJS, ensure you have created a template in your EmailJS dashboard and added the necessary environment variables in your `.env` file. Use the command:
  ```bash
  npm install @emailjs/browser
  ```
- **Form Handling**: The form captures user input and handles submission with loading states and success/error messages.

### Testimonials Section
The **Testimonials** section displays user feedback and reviews, enhancing the portfolio's credibility and showcasing user satisfaction.

### Footer Section
The **Footer** section contains links and information about the portfolio, providing users with easy navigation and additional resources.

### New Components
- **ContactExperience**: A new component that displays a 3D model related to the contact experience, enhancing user interaction.

## 📧 EmailJS Integration
To enable email functionality, the project uses EmailJS. Follow these steps to set it up:
1. Install the EmailJS library:
   ```bash
   npm install @emailjs/browser
   ```
2. Create an account on EmailJS and set up your email service and template.
3. Add your EmailJS credentials to the `.env` file:
   ```plaintext
   VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
   VITE_APP_EMAILJS_SERVICE_ID=your_service_id
   VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
   ```
4. Use the `emailjs.sendForm` method in the `handleSubmit` function of the Contact component to send emails.

## 🔧 Installation & Setup Commands

### Core Dependencies
Install the main project dependencies:

```bash
# Install base dependencies
npm install react react-dom @react-three/fiber @react-three/drei three gsap @gsap/react

# Install UI and animation libraries
npm install tailwindcss react-countup react-responsive

# Install contact functionality
npm install @emailjs/browser

# Install additional 3D effects
npm install @react-three/postprocessing
```

### GSAP Setup
GSAP requires proper initialization and plugin registration in your components:

```jsx
// Import GSAP and plugins
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins (must be done before using)
gsap.registerPlugin(ScrollTrigger);

// Use in component with useGSAP hook
const YourComponent = () => {
  useGSAP(() => {
    // GSAP animations here
    gsap.to(".element", { /* animation properties */ });
    
    // ScrollTrigger setup
    ScrollTrigger.create({
      trigger: ".trigger-element",
      // Other ScrollTrigger options
    });
  }, []);
  
  // Component JSX
};
```

### React Three Fiber Setup
For 3D components using React Three Fiber:

```jsx
// Import necessary components
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import * as THREE from "three";

// Create your 3D component
const Model = () => {
  const { scene } = useGLTF("/path/to/model.glb");
  return <primitive object={scene} />;
};

// Use within a Canvas
const Scene = () => (
  <Canvas>
    <ambientLight intensity={0.5} />
    <directionalLight position={[5, 5, 5]} intensity={1} />
    <Environment preset="city" />
    <OrbitControls />
    <Model />
  </Canvas>
);
```

### EmailJS Configuration
To configure EmailJS:

```bash
# Create a .env file in your project root
touch .env

# Add your EmailJS credentials
echo "VITE_APP_EMAILJS_SERVICE_ID=your_service_id" >> .env
echo "VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id" >> .env
echo "VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key" >> .env
```

Then initialize EmailJS in your app:

```jsx
import { useEffect } from "react";
import emailjs from "@emailjs/browser";

const App = () => {
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);
  }, []);
  
  // App JSX
};
```

### Tailwind CSS Setup
To set up Tailwind CSS with Vite:

```bash
# Install Tailwind CSS
npm install -D tailwindcss @tailwindcss/vite

# Generate config files
npx tailwindcss init

# Add to vite.config.js
```

```javascript
// vite.config.js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

## 🔒 Environment Setup

This project uses environment variables for sensitive information. To set up your local environment:

1. Create a `.env` file in the root directory
2. Copy the structure from `.env.example`
3. Fill in your own API keys and credentials

**IMPORTANT**: Never commit your `.env` file to version control. It's already added to `.gitignore` to prevent accidental commits.

## 🚀 Getting Started
To run the project locally:
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 📋 Development Progress
### ✅ Completed
- Initial project setup with React and Tailwind CSS
- Hero section with animated text cycling
- Button component with custom animations
- 3D model integration using React Three Fiber and drei
- Responsive design implementation
- GSAP animations for UI elements
- GlowCard component with mouse-following effects
- Experience section with timeline animations
- Logo carousel with RequestAnimationFrame optimization
- Feature cards section for skills display
- TechStack section with interactive 3D models
- 3D tech icons with floating animations
- **Contact Section** with email functionality
- **Testimonials Section** for user feedback
- **Footer Section** for additional navigation and information
- **Contact Component** for user inquiries
- **ContactExperience Component** for displaying 3D models

### 🔄 In Progress
- Additional portfolio sections (About)
- More interactive 3D elements
- Animation refinements
- Performance optimizations for mobile devices

### 🔮 Future Plans
- Dark/Light theme toggle
- Project showcase with detailed case studies
- Interactive resume section
- More advanced 3D interactions

## 📬 Contact
Feel free to reach out if you have any questions or would like to collaborate!

**Ramy** - [Your Contact Info]

## 📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

---
> Built with React, Three.js, React Three Fiber, GSAP, and more advanced web technologies