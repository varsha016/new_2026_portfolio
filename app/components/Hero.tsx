"use client";

import { motion } from "framer-motion";
import AnimationWrapper from "./AnimationWrapper";

export default function Hero() {
    return (
        <AnimationWrapper>
            <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">

                {/* TITLE */}
                <motion.h1
                    className="text-4xl md:text-6xl font-bold flex items-center gap-2"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Hi, I'm Varsha

                    {/* 👋 WAVE ANIMATION */}
                    <motion.span
                        animate={{
                            rotate: [0, 20, -10, 20, 0],
                        }}
                        transition={{
                            duration: 1.2,
                            repeat: Infinity,
                            repeatDelay: 3
                        }}
                        className="inline-block origin-bottom-right"
                    >
                        👋
                    </motion.span>
                </motion.h1>

                {/* SUBTEXT */}
                <motion.p
                    className="mt-4 text-lg text-gray-300 max-w-xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    Full Stack Developer specializing in React, Next.js, and Node.js, focused on building scalable, high-performance web applications.
                </motion.p>
                <motion.div
                    className="mt-4 flex gap-10 justify-center text-gray-300"
                >

                    <motion.a
                        href="https://github.com/varsha016"
                        target="_blank"
                        className="hover:text-white"
                    >
                        GitHub
                    </motion.a>

                    <motion.a
                        href="https://www.linkedin.com/in/varsha-harkal-b851b623a/"
                        target="_blank"
                        className="hover:text-white"
                    >
                        LinkedIn
                    </motion.a>

                </motion.div>
                {/* BUTTONS */}
                <motion.div
                    className="mt-6 flex gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-blue-600 px-6 py-2 rounded-lg"
                    >
                        Contact Me
                    </motion.a>

                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        className="border px-6 py-2 rounded-lg"
                    >
                        View Work
                    </motion.a>


                </motion.div>

            </section>
        </AnimationWrapper>
    );
}