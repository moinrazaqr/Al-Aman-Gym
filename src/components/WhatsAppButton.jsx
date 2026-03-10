import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    const [hovered, setHovered] = useState(false);
    const phone = '+97430864663';
    const message = 'Hello! I am interested in joining Al Aman Gym. Please share the details.';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Al Aman Gym on WhatsApp"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
        >
            {/* Tooltip label */}
            <span
                className={`bg-gym-black text-white text-sm font-medium px-3 py-1.5 rounded-lg border border-white/10 whitespace-nowrap shadow-lg transition-all duration-300 ${hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
                    }`}
            >
                Chat with us
            </span>

            {/* Button with pulse rings */}
            <div className="relative">
                {/* Outer pulse ring */}
                <span className="absolute inset-0 rounded-full bg-green-500 animate-pulse-ring opacity-60" />
                {/* Inner pulse ring */}
                <span className="absolute inset-0 rounded-full bg-green-500 animate-pulse-ring opacity-40 [animation-delay:0.5s]" />

                <div className="relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110">
                    <FaWhatsapp className="w-7 h-7 text-white" />
                </div>
            </div>
        </a>
    );
};

export default WhatsAppButton;
