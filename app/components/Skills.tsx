"use client";

import { motion } from "framer-motion";

const skills = [
    "Next.js", "React.js", "TypeScript", "Redux Toolkit", "JavaScript",
    "HTML5", "CSS3", "Tailwind CSS", "MUI",
    "Node.js", "MongoDB", "Git-Hub",
];

export default function Skills() {
    return (
        <section className="py-20 px-6 bg-gray-950">
            <h2 className="text-4xl font-bold text-center mb-12">
                Skills
            </h2>

            <motion.div
                className="flex flex-wrap justify-center gap-5 max-w-4xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.08
                        }
                    }
                }}
            >
                {skills.map((skill, index) => (
                    <motion.span
                        key={index}
                        variants={{
                            hidden: { opacity: 0, y: 30, scale: 0.9 },
                            visible: { opacity: 1, y: 0, scale: 1 }
                        }}
                        whileHover={{
                            scale: 1.15,
                            y: -5
                        }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="px-5 py-2 rounded-full text-sm font-medium 
                       bg-gray-800 text-gray-200 
                       border border-gray-700 
                       cursor-pointer
                       hover:border-purple-400
                       hover:text-white
                       hover:shadow-lg"
                    >
                        {skill}
                    </motion.span>
                ))}
            </motion.div>
        </section>
    );
}