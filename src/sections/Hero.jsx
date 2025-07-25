import { words } from "../constants/index.js";
import Button from "../components/Button.jsx";
import HeroExperience from "../components/Models/HeroModels/HeroExperience.jsx";
import AnimatedCounter from "../components/AnimatedCounter.jsx";

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Hero = () => {

    useGSAP(() => {
        
        const ctx = gsap.context(() => {
            gsap.fromTo('.hero-text h1',
                {
                    y: 50,
                    opacity: 0,
                    force3D: true 
                },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.2,
                    duration: 1,
                    ease: 'power2.out' 
                }
            );
        });
        
        return () => ctx.revert(); 
    });


    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">
                <img src="/images/bg.png" alt="Background" />
            </div>

            <div className="hero-layout">

                {/*LEFT : HERO COntent*/}
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                    <div className="flex flex-col gap-7 max-w-full">
                        <div className="hero-text">
                            <h1>
                                Shaping
                                <span className="slide">
                                    <span className="wrapper">
                                        {words.map((word) => (
                                            <span
                                                key={word.text}
                                                className="flex items-center md:gap-3 gap-1 pb-2"
                                            >
                                                <img
                                                    src={word.imgPath}
                                                    alt={word.text}
                                                    className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                                                />
                                                <span>{word.text}</span>
                                            </span>
                                        ))}
                                    </span>
                                </span>
                            </h1>

                            <h1>into Real Projects</h1>
                            <h1>that Deliver Results</h1>
                        </div>

                        <p className="text-white-50 md:text-xl relative z-10 pointer-events-none max-w-xl break-words">
                            Hi, I'm Ramy, a front end developer with a passion for crafting
                            exceptional digital experiences. I specialize in transforming
                            ideas into real projects that deliver results.
                        </p>

                        <Button
                            className="md:w-80 md:h-16 w-60 h-12"
                            id="buttton"
                            text="See my work"
                        />
                    </div>
                </header>

                {/*RIGHT : HERO IMAGE*/}
                <figure>
                    <div className="hero-3d-layout">
                        <HeroExperience />
                    </div>
                </figure>
            </div>

            <AnimatedCounter />
        </section>
    );
};

export default Hero;