"use client";

import { motion } from "framer-motion";

export default function Projects() {
    const projects = [
        {
            title: "Online Chat",
            description:
                "Real-time chat app using React and Socket.io. Supports messaging, media sharing, and live updates.",
            img: "/images/chatimg.png",
        },
        {
            title: "TextCraft",
            description:
                "Advanced text editor with multilingual typing, speech-to-text, and rich formatting features.",
            img: "/images/editer.png",
            live: "https://neweditor-sage.vercel.app/",
        },
        {
            title: "Ecommerce Website",
            description:
                "Full-stack MERN ecommerce platform with authentication, cart, and product management.",
            img: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
        },
        {
            title: "QuizSphere",
            description:
                "MCQ-based quiz platform with instant feedback and score tracking.",
            img: "/images/test.png",
            live: "https://student-test-one.vercel.app/",
        },
        {
            title: "9XGo Marketplace",
            description:
                "Buy/sell marketplace like OLX with secure listings and smooth user experience.",
            img: "/images/i2okimg.jpeg",
            live: "https://www.9xgo.com/",
        },
    ];

    return (
        <section id="projects" className="py-20 px-6 bg-gray-950">
            <h2 className="text-4xl font-bold text-center mb-14">
                My Projects
            </h2>

            <div className="max-w-6xl mx-auto space-y-16">

                {projects.map((p, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        {/* IMAGE */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="overflow-hidden rounded-xl"
                        >
                            <img
                                src={p.img}
                                alt={p.title}
                                className="w-full h-[250px] object-cover rounded-xl"
                            />
                        </motion.div>

                        {/* CONTENT */}
                        <div>
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                                {p.title}
                            </h3>

                            <p className="text-gray-400 mt-3 leading-relaxed">
                                {p.description}
                            </p>

                            <div className="mt-5 flex gap-4">
                                {p.live && (
                                    <a
                                        href={p.live}
                                        target="_blank"
                                        className="px-5 py-2 border border-purple-400 rounded-lg hover:bg-purple-600 transition"
                                    >
                                        Live Demo
                                    </a>
                                )}

                                <button className="px-5 py-2 border rounded-lg hover:bg-gray-800 transition">
                                    Source Code
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}

            </div>
        </section>
    );
}