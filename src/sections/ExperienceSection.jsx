import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader.jsx";
import GlowCard from "../components/GlowCard.jsx";

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  // Add a ref to scope animations to this section only
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Only kill ScrollTriggers that belong to this component
    const mySection = sectionRef.current;
    if (!mySection) return;

    // Query elements only inside this section
    const timelineCards = gsap.utils.toArray(".timeline-card", mySection);
    const timelines = gsap.utils.toArray(".timeline", mySection);
    const expTexts = gsap.utils.toArray(".expText", mySection);

    // Loop through each timeline card and animate them in
    // as the user scrolls to each card
    timelineCards.forEach((card) => {
      // Animate the card coming in from the left
      // and fade in
      gsap.from(card, {
        // Move the card in from the left
        xPercent: -100,
        // Make the card invisible at the start
        opacity: 0,
        // Set the origin of the animation to the left side of the card
        transformOrigin: "left left",
        // Animate over 1 second
        duration: 1,
        // Use a power2 ease-in-out curve
        ease: "power2.inOut",
        // Trigger the animation when the card is 80% of the way down the screen
        scrollTrigger: {
          // The card is the trigger element
          trigger: card,
          // Trigger the animation when the card is 80% down the screen
          start: "top 80%",
          markers: false,
          // Add these optimizations
          fastScrollEnd: true,
          preventOverlaps: true,
        },
      });
    });

    // Optimize timeline height animation - scope to this section's timelines
    timelines.forEach((timeline) => {
      gsap.to(timeline, {
        // Set the origin of the animation to the bottom of the timeline
        transformOrigin: "bottom bottom",
        // Animate the timeline height over 1 second
        ease: "power1.inOut",
        // Trigger the animation when the timeline is at the top of the screen
        // and end it when the timeline is at 70% down the screen
        scrollTrigger: {
          trigger: timeline,
          start: "top center",
          end: "70% center",
          // Use scrub: true instead of onUpdate for better performance
          scrub: 0.5,
          markers: false,
          preventOverlaps: true,
        },
        scaleY: 0, // Animate directly to 0 scale
      });
    });

    // Loop through each expText element and animate them in
    // as the user scrolls to each text element
    expTexts.forEach((text) => {
      // Animate the text opacity from 0 to 1
      // and move it from the left to its final position
      // over 1 second with a power2 ease-in-out curve
      gsap.from(text, {
        // Set the opacity of the text to 0
        opacity: 0,
        // Move the text from the left to its final position
        // (xPercent: 0 means the text is at its final position)
        xPercent: 0,
        // Animate over 1 second
        duration: 1,
        // Use a power2 ease-in-out curve
        ease: "power2.inOut",
        // Trigger the animation when the text is 60% down the screen
        scrollTrigger: {
          // The text is the trigger element
          trigger: text,
          // Trigger the animation when the text is 60% down the screen
          start: "top 60%",
          markers: false,
          fastScrollEnd: true,
          preventOverlaps: true,
        },
      });
    });

    // Return a cleanup function
    return () => {
      // Get all ScrollTrigger instances that belong to elements in this section
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger && mySection.contains(st.trigger)) {
          st.kill();
        }
      });
    };
  }, []);

  return (
    <section
      id="experience"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
      ref={sectionRef}
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Professional Work Experience"
          sub="💼 My Career Overview"
        />

        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card) => (
              <div key={card.title} className="exp-card-wrapper">
                <div className="xl:w-2/6">
                  <GlowCard card={card}>
                    <div>
                      <img src={card.imgPath} alt="exp-img" />
                    </div>
                  </GlowCard>
                </div>

                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>

                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo">
                        <img src={card.logoPath} alt="logo" />
                      </div>

                      <div>
                        <h1 className="font-semibold text-3xl">{card.title}</h1>

                        <p className="my-5 text-white-50">
                          🗓️&nbsp;{card.date}
                        </p>

                        <p className="text-[#839CB5] italic">
                          Responsibilities
                        </p>

                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                          {card.responsibilities.map(
                            (responsibility, index) => (
                              <li key={index} className="text-lg">
                                {responsibility}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};



export default ExperienceSection;
