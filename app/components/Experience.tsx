"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        role: "Full-stack Developer",
        company: "UMAR ZONE INFOTECH PRIVATE LIMITED",
        date: "Jun 2025 – Present",
    },
    {
        role: "Full-stack Developer",
        company: "MS TECHNO VISION",
        date: "Jun 2024 – Jun 2025",
    },
    {
        role: "React Developer (Intern)",
        company: "Banao Technologies",
        date: "Nov 2023 – May 2024",
    },
    // {
    //     role: "Web Developer (Intern)",
    //     company: "Skillhub-IT Solution",
    //     date: "Mar 2023 – Nov 2023",
    // },
];

export default function Experience() {
    return (
        <section className="py-20 px-6 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
                Experience
            </h2>

            <div className="relative border-l border-gray-700 pl-6 space-y-10">

                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* DOT */}
                        <span className="absolute -left-[10px] top-2 w-4 h-4 bg-purple-500 rounded-full shadow-md"></span>

                        {/* CARD */}
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="bg-gray-800 p-5 rounded-lg border border-gray-700 hover:border-purple-400 transition"
                        >
                            <h3 className="font-semibold text-xl">
                                {exp.role}
                            </h3>

                            <p className="text-gray-400 mt-1">
                                {exp.company}
                            </p>

                            <p className="text-sm text-gray-500 mt-1">
                                {exp.date}
                            </p>
                        </motion.div>
                    </motion.div>
                ))}

            </div>
        </section>
    );
}