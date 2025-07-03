import React, { useRef, useEffect } from "react";
import { logoIconsList } from "../constants/index.js";

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={icon.imgPath} alt={icon.name} loading="lazy" />
    </div>
  );
};

const LogoSection = () => {
  const marqueeRef = useRef(null);
  const animationRef = useRef(null);

  // Use requestAnimationFrame for smoother animation
  useEffect(() => {
    const marqueeBox = marqueeRef.current;
    if (!marqueeBox) return;

    let position = 0;
    const speed = 0.5; // Adjust speed as needed
    const totalWidth = marqueeBox.offsetWidth / 3;

    const animate = () => {
      position -= speed;

      // Reset position once one-third has been scrolled
      if (position <= -totalWidth) {
        position = 0;
      }

      marqueeBox.style.transform = `translateX(${position}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    // Clean up
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Create a tripled array for seamless looping
  const duplicatedLogos = [
    ...logoIconsList,
    ...logoIconsList,
    ...logoIconsList,
  ];

  return (
    <div className="md:my-20 my-10 relative">
      <div className="gradient-edge" />
      <div className="gradient-edge" />

      <div className="marquee h-52">
        <div
          ref={marqueeRef}
          className="flex items-center md:gap-12 gap-5 absolute"
          style={{ willChange: "transform" }}
        >
          {duplicatedLogos.map((icon, index) => (
            <LogoIcon key={`${icon.name}-${index}`} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
