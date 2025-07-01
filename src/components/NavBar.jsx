import React from "react";
import { navLinks } from "../constants/index.js";
import { useEffect, useState } from "react";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    // Fixed the scroll handler - it was always setting scrolled to true
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled); // Fix: now properly sets based on scroll position
        };

        // Initial check on mount
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Log to help debug if navLinks is properly loaded
    console.log("navLinks:", navLinks);

    return (
        <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
            <div className="inner">
                <a className="logo" href="#hero">
                    Ram-Rxr
                </a>

                {/* Fix: Ensure nav is visible regardless of screen size temporarily */}
                <nav className="desktop" style={{ display: "block" }}>
                    <ul>
                        {navLinks && navLinks.length > 0 ? (
                            navLinks.map(({ link, name }) => (
                                <li key={name} className="group">
                                    <a href={link}>
                                        <span>{name}</span>
                                        <span className="underline" />
                                    </a>
                                </li>
                            ))
                        ) : (
                            <li>No navigation links available</li>
                        )}
                    </ul>
                </nav>

                <a className="contact-btn group" href="#contact">
                    <div className="inner">
                        <span>Contact me</span>
                    </div>
                </a>
            </div>
        </header>
    );
};

export default NavBar;
