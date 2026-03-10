import React, { useState, useCallback } from 'react';
import { XMarkIcon, ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { MagnifyingGlassPlusIcon } from '@heroicons/react/24/solid';

const images = [
    { src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Main gym floor', span: 'col-span-2 row-span-2' },
    { src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Cardio machines' },
    { src: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Training equipment' },
    { src: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Workout area' },
    { src: 'https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Free weights rack' },
    { src: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Weightlifting platform' },
    { src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Personal trainer session' },
];

const Gallery = () => {
    const [lightbox, setLightbox] = useState(null);

    const open = useCallback((i) => setLightbox(i), []);
    const close = useCallback(() => setLightbox(null), []);
    const prev = useCallback(() => setLightbox((i) => (i - 1 + images.length) % images.length), []);
    const next = useCallback(() => setLightbox((i) => (i + 1) % images.length), []);

    const handleKey = useCallback(
        (e) => {
            if (lightbox === null) return;
            if (e.key === 'ArrowLeft') prev();
            if (e.key === 'ArrowRight') next();
            if (e.key === 'Escape') close();
        },
        [lightbox, prev, next, close]
    );

    React.useEffect(() => {
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [handleKey]);

    return (
        <section id="gallery" className="py-24 bg-gym-gray relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-14 reveal">
                    <h2 className="section-title">Photo Gallery</h2>
                    <div className="section-divider mx-auto mb-4" />
                    <p className="text-gray-400">A glimpse inside Al Aman Gym</p>
                </div>

                {/* Masonry grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-3 h-auto md:h-[520px]">
                    {images.map((img, i) => (
                        <div
                            key={i}
                            onClick={() => open(i)}
                            className={`relative overflow-hidden rounded-xl cursor-pointer group border border-white/5 hover:border-gym-red/40 transition-all duration-300 ${img.span ?? ''} ${i === 0 ? 'row-span-2' : ''}`}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                loading="lazy"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                                <MagnifyingGlassPlusIcon className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {lightbox !== null && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={close}
                >
                    <button
                        onClick={close}
                        className="absolute top-4 right-4 text-white hover:text-gym-red transition"
                        aria-label="Close lightbox"
                    >
                        <XMarkIcon className="w-8 h-8" />
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); prev(); }}
                        className="absolute left-4 text-white hover:text-gym-red transition p-2"
                        aria-label="Previous image"
                    >
                        <ArrowLeftIcon className="w-8 h-8" />
                    </button>
                    <img
                        src={images[lightbox].src.replace('w=600', 'w=1200')}
                        alt={images[lightbox].alt}
                        className="max-w-full max-h-[85vh] rounded-xl shadow-red-md object-contain"
                        onClick={(e) => e.stopPropagation()}
                    />
                    <button
                        onClick={(e) => { e.stopPropagation(); next(); }}
                        className="absolute right-4 text-white hover:text-gym-red transition p-2"
                        aria-label="Next image"
                    >
                        <ArrowRightIcon className="w-8 h-8" />
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
                                className={`w-2 h-2 rounded-full transition-all ${i === lightbox ? 'bg-gym-red w-5' : 'bg-white/40 hover:bg-white/70'}`}
                                aria-label={`Go to image ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
