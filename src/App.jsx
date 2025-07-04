import { useEffect } from "react";
import emailjs from "@emailjs/browser";
import NavBar from "./components/NavBar.jsx";
import Hero from "./sections/hero.jsx";
import ShowcaseSection from "./sections/ShocaseSection.jsx";
import LogoSection from "./sections/LogoSection.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import TechStack from "./sections/TechStack.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";

const App = () => {
    // Initialize EmailJS
    useEffect(() => {
        emailjs.init(import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);
    }, []);

    return (
        <>
            <NavBar />
            <Hero />
            <ShowcaseSection />
            <FeatureCards />
            <LogoSection />
            <ExperienceSection />

            <TechStack />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    );
};

export default App;
