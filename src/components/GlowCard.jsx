import { useRef } from "react";
import React from "react";

const GlowCard = ( { card , index, children }) => {

    const cardRefs = useRef([]);

    const handleMouseMove = (index) => (e) => {
        const card = cardRefs.current[index];
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;

        let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

        angle = (angle + 360) % 360;

        card.style.setProperty("--start", angle + 60);
    };

    return (
        <div className="card card-border timline-card rounded-xl p-10 mb-5 break-inside-avoid-column"
            ref={(el) => (cardRefs.current[index] = el)}
            onMouseMove={handleMouseMove(index)}
        >
            <div className='glow'/>
            <div>
                {Array.from({lenght: 5}, (_,i) => (
                    <img src="/images/star.png" key={i} alt="star" className='size-5' />
                ))}
            </div>

            <div className="mb-5">
                <p className='text-white-50 text-lg'>{card.review}</p>
            </div>

            {children}


        </div>
    )

}

export default GlowCard