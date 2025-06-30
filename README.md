# 🚀 3D Portfolio | Ramy's Interactive Developer Space

Welcome to my 3D portfolio — a modern, interactive space showcasing my web development skills and projects. This portfolio combines sleek design with immersive 3D elements to create an engaging user experience.

![Portfolio Preview](./preview.png)

## ✨ Current Features

- 🎯 Interactive Hero section with animated word cycling
- 🌐 Integrated 3D model scene in the Hero section
- 🎨 Custom button component with advanced hover animations
- 📱 Fully responsive design for all devices
- 💫 Smooth animations and transitions

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React** | Frontend framework for the UI |
| **Tailwind CSS** | Utility-first styling with custom components |
| **Three.js** | 3D graphics rendering |
| **React Three Fiber** | React renderer for Three.js |
| **GLTFJSX** | Converting 3D models (.glb) to React components |
| **React-Responsive** | Handling responsive behavior |

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

### Custom UI Components

- **Button Component**: Features gradient background and animated arrow on hover
- **Hero Section**: Combines animated text with 3D scene integration
- **Responsive Layout**: Adapts seamlessly from mobile to desktop

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
