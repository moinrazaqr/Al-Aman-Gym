import React, { useState } from 'react';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { FaWhatsapp } from 'react-icons/fa';

const contactItems = [
    {
        icon: MapPinIcon,
        label: 'Address',
        value: 'Al Aman Gym, 7H22+7QR',
        sub: 'Doha, Qatar',
        href: 'https://maps.google.com/?q=Doha+Qatar',
    },
    {
        icon: PhoneIcon,
        label: 'Phone',
        value: '+974 3086 4663',
        href: 'tel:+97430864663',
    },
    {
        icon: EnvelopeIcon,
        label: 'Email',
        value: 'info@alamangym.qa',
        href: 'mailto:info@alamangym.qa',
    },
];

const initialForm = { name: '', email: '', phone: '', plan: '', message: '' };

const Contact = () => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const validate = () => {
        const e = {};
        if (!form.name.trim()) e.name = 'Name is required.';
        if (!form.email.trim()) e.email = 'Email is required.';
        else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email.';
        if (!form.message.trim()) e.message = 'Please write a message.';
        return e;
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: undefined });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) { setErrors(errs); return; }
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSent(true);
            setForm(initialForm);
        }, 1000);
    };

    const inputClass = (field) =>
        `w-full px-4 py-3 bg-gym-black border rounded-lg text-white text-sm placeholder-gray-600 focus:outline-none focus:ring-1 transition-all duration-300 ${errors[field]
            ? 'border-red-500 focus:ring-red-500'
            : 'border-white/10 focus:border-gym-red focus:ring-gym-red'
        }`;

    return (
        <section id="contact" className="py-24 bg-gym-gray relative overflow-hidden">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-xl h-64 bg-gym-red/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Heading */}
                <div className="text-center mb-14 reveal">
                    <h2 className="section-title">Get In Touch</h2>
                    <div className="section-divider mx-auto mb-4" />
                    <p className="text-gray-400">We'd love to hear from you — reach out to join or ask any question</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10">
                    {/* Left column */}
                    <div className="space-y-6 reveal-left">
                        {/* Contact info cards */}
                        {contactItems.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <a
                                    key={i}
                                    href={item.href}
                                    target={item.icon === MapPinIcon ? '_blank' : undefined}
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-4 p-5 bg-gym-black rounded-xl border border-white/5 hover:border-gym-red/40 hover:shadow-red-sm transition-all duration-300 group"
                                >
                                    <div className="w-11 h-11 rounded-lg bg-gym-red/10 border border-gym-red/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gym-red group-hover:border-gym-red transition-all duration-300">
                                        <Icon className="w-5 h-5 text-gym-red group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-xs uppercase tracking-wider mb-0.5">{item.label}</p>
                                        <p className="text-white font-medium">{item.value}</p>
                                        {item.sub && <p className="text-gray-400 text-sm">{item.sub}</p>}
                                    </div>
                                </a>
                            );
                        })}

                        {/* WhatsApp quick contact */}
                        <a
                            href="https://wa.me/+97430864663?text=Hello!%20I%20am%20interested%20in%20joining%20Al%20Aman%20Gym."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 w-full py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
                        >
                            <FaWhatsapp className="w-5 h-5" />
                            Chat with us on WhatsApp
                        </a>

                        {/* Map */}
                        <div className="rounded-xl overflow-hidden border border-white/5 h-48">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115473.59280694948!2d51.4279975!3d25.2854473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce87f%3A0x44f9b13c5a0d742d!2sDoha%2C%20Qatar!5e0!3m2!1sen!2s!4v1700000000000"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(0.9)' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Al Aman Gym location on Google Maps"
                            />
                        </div>
                    </div>

                    {/* Right column – Form */}
                    <div className="bg-gym-black p-8 rounded-2xl border border-white/5 reveal-right">
                        {sent ? (
                            <div className="flex flex-col items-center justify-center h-full gap-4 py-12 text-center">
                                <CheckCircleIcon className="w-16 h-16 text-green-500" />
                                <h3 className="text-2xl font-semibold text-white">Message Sent!</h3>
                                <p className="text-gray-400">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                                <button
                                    onClick={() => setSent(false)}
                                    className="mt-4 px-6 py-2 btn-primary"
                                >
                                    Send Another
                                </button>
                            </div>
                        ) : (
                            <>
                                <h3 className="text-xl font-semibold text-white mb-6">Send Us a Message</h3>
                                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                                    {/* Name */}
                                    <div>
                                        <label htmlFor="name" className="block text-gray-400 text-sm mb-1.5">Full Name <span className="text-gym-red">*</span></label>
                                        <input id="name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Your full name" className={inputClass('name')} />
                                        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                                    </div>

                                    {/* Email + Phone row */}
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="email" className="block text-gray-400 text-sm mb-1.5">Email <span className="text-gym-red">*</span></label>
                                            <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" className={inputClass('email')} />
                                            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block text-gray-400 text-sm mb-1.5">Phone <span className="text-gray-600">(optional)</span></label>
                                            <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+974 XXXX XXXX" className={inputClass('phone')} />
                                        </div>
                                    </div>

                                    {/* Plan interest */}
                                    <div>
                                        <label htmlFor="plan" className="block text-gray-400 text-sm mb-1.5">Interested In</label>
                                        <select id="plan" name="plan" value={form.plan} onChange={handleChange} className={inputClass('plan')}>
                                            <option value="">Select a membership plan...</option>
                                            <option value="monthly">Monthly – 200 QAR</option>
                                            <option value="2months">2 Months – 350 QAR</option>
                                            <option value="3months">3 Months – 500 QAR (Popular)</option>
                                            <option value="6months">6 Months – 800 QAR</option>
                                            <option value="1year">1 Year – 1,500 QAR</option>
                                            <option value="other">General Enquiry</option>
                                        </select>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label htmlFor="message" className="block text-gray-400 text-sm mb-1.5">Message <span className="text-gym-red">*</span></label>
                                        <textarea id="message" name="message" rows="4" value={form.message} onChange={handleChange} placeholder="Tell us how we can help you..." className={inputClass('message')} />
                                        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className={`w-full py-3.5 btn-primary font-semibold text-base flex items-center justify-center gap-2 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                                    >
                                        {loading ? (
                                            <>
                                                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                                                </svg>
                                                Sending...
                                            </>
                                        ) : 'Send Message'}
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
