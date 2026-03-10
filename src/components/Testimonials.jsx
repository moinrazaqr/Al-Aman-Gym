import React, { useState, useEffect, useCallback } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const testimonials = [
    {
        name: 'Ahmed Al-Mansoori',
        role: 'Member since 2023',
        content: 'Al Aman Gym is the best fitness decision I ever made. Open 24/7, great equipment, incredibly affordable. Highly recommended to everyone in Doha!',
        rating: 5,
        initials: 'AA',
        color: 'bg-red-700',
    },
    {
        name: 'Fatima Hassan',
        role: 'Member since 2022',
        content: 'The ladies section is fantastic — clean, private, and well-equipped. The female trainers are friendly, supportive, and really know their stuff.',
        rating: 5,
        initials: 'FH',
        color: 'bg-orange-700',
    },
    {
        name: 'Khalid Ibrahim',
        role: 'Member since 2021',
        content: "I love the bodybuilding floor. Plenty of free weights, great barbells, and a motivating atmosphere. I've achieved my best results here.",
        rating: 5,
        initials: 'KI',
        color: 'bg-purple-700',
    },
    {
        name: 'Mariam Al-Thani',
        role: 'Member since 2023',
        content: 'Convenient location, always spotlessly clean, and the staff is genuinely welcoming. Outstanding value for money in Doha.',
        rating: 5,
        initials: 'MA',
        color: 'bg-teal-700',
    },
    {
        name: 'Tariq Al-Najjar',
        role: 'Member since 2022',
        content: 'I work nights, so the 24/7 access is a game-changer for me. The gym is always clean and well-maintained no matter what time I come in.',
        rating: 5,
        initials: 'TN',
        color: 'bg-blue-700',
    },
];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);

    const prev = useCallback(() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length), []);
    const next = useCallback(() => setCurrent((c) => (c + 1) % testimonials.length), []);

    useEffect(() => {
        if (paused) return;
        const timer = setInterval(next, 4000);
        return () => clearInterval(timer);
    }, [paused, next]);

    const t = testimonials[current];

    return (
        <section id="testimonials" className="py-24 bg-gym-black relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gym-red/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center mb-14 reveal">
                    <h2 className="section-title">What Our Members Say</h2>
                    <div className="section-divider mx-auto mb-4" />
                    <p className="text-gray-400">Real results from real members</p>
                </div>

                {/* Carousel */}
                <div
                    className="max-w-3xl mx-auto"
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                >
                    <div className="relative bg-gym-gray rounded-2xl p-8 sm:p-12 border border-white/5 transition-all duration-500">
                        {/* Quote mark */}
                        <div className="absolute top-6 left-8 text-gym-red/20 font-bebas text-8xl leading-none select-none" aria-hidden>
                            "
                        </div>

                        {/* Stars */}
                        <div className="flex gap-1 mb-6">
                            {[...Array(t.rating)].map((_, i) => (
                                <StarIcon key={i} className="w-5 h-5 text-gym-red" />
                            ))}
                        </div>

                        <p className="text-gray-200 text-lg sm:text-xl leading-relaxed mb-8 relative z-10">
                            "{t.content}"
                        </p>

                        <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 ${t.color}`}>
                                {t.initials}
                            </div>
                            <div>
                                <p className="text-white font-semibold">{t.name}</p>
                                <p className="text-gray-400 text-sm">{t.role}</p>
                            </div>
                        </div>

                        {/* Navigation arrows */}
                        <div className="flex items-center justify-between mt-8">
                            <button
                                onClick={prev}
                                className="p-2 rounded-full border border-white/10 hover:border-gym-red hover:bg-gym-red/10 text-gray-400 hover:text-gym-red transition-all duration-300"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeftIcon className="w-5 h-5" />
                            </button>

                            {/* Dot indicators */}
                            <div className="flex gap-2">
                                {testimonials.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrent(i)}
                                        className={`rounded-full transition-all duration-300 ${i === current ? 'w-6 h-2.5 bg-gym-red' : 'w-2.5 h-2.5 bg-white/20 hover:bg-white/50'
                                            }`}
                                        aria-label={`Go to testimonial ${i + 1}`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={next}
                                className="p-2 rounded-full border border-white/10 hover:border-gym-red hover:bg-gym-red/10 text-gray-400 hover:text-gym-red transition-all duration-300"
                                aria-label="Next testimonial"
                            >
                                <ChevronRightIcon className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mini thumbnail strip */}
                <div className="flex justify-center gap-4 mt-8 flex-wrap">
                    {testimonials.map((item, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`flex items-center gap-2 px-3 py-2 rounded-full border transition-all duration-300 text-sm ${i === current
                                    ? 'border-gym-red bg-gym-red/10 text-white'
                                    : 'border-white/10 text-gray-500 hover:border-white/30'
                                }`}
                        >
                            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold ${item.color}`}>
                                {item.initials}
                            </span>
                            <span className="hidden sm:inline">{item.name}</span>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
