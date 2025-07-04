import React from 'react';
import TitleHeader from '../components/TitleHeader.jsx';
import { techStackIcons } from '../constants/index.js';
import TechIcon from '../components/Models/TechLogos/TechIcon.jsx';

import { useGSAP } from "@gsap/react";
import gsap from "gsap";



const TechStack = () => {

    useGSAP(() => {

        gsap.fromTo(
            ".tech-card",
            {
                // Initial values
                y: 50, // Move the cards down by 50px
                opacity: 0, // Set the opacity to 0
            },
            {
                // Final values
                y: 0, // Move the cards back to the top
                opacity: 1, // Set the opacity to 1
                duration: 1, // Duration of the animation
                ease: "power2.inOut", // Ease of the animation
                stagger: 0.2, // Stagger the animation by 0.2 seconds
                scrollTrigger: {
                    trigger: "#skills", // Trigger the animation when the user scrolls to the #skills wrapper
                    start: "top center", // Start the animation when the top of the wrapper is at the center of the screen
                },
            }
        );
    });

    return (
        <div id="skills" className='flex-center section-padding'>
            <div className='w-full h-full md:px-10 px-5'>
                <TitleHeader
                    title="My Preferred Tech Stack"
                    sub="🤝 The Skills I Bring to teh Table"
                />

                <div className='tech-grid'>
                    {techStackIcons.map((icon) => (
                        <div key={icon.name} className='card-border tech-card overflow-hidden group xl:rounded-full rounded-lg'>
                            <div className='tech-card-animated-bg' />
                            <div className='tech-card-content'>
                                <div className='tech-icon-wrapper'>
                                    <TechIcon model={icon} />
                                </div>

                                <div className='padding-x w-full'>
                                    <p>{icon.name}</p>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>

            </div>

        </div>
    )
}

export default TechStack