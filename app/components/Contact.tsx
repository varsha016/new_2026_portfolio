"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [inp, setInp] = useState({
        fName: "",
        lName: "",
        email: "",
        sub: "",
        text: ""
    });

    const handleChange = (e: any) => {
        setInp({ ...inp, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        setSuccess("");

        try {
            const res = await fetch("/api/contacts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(inp),
            });

            const data = await res.json();

            if (res.ok) {
                setSuccess("Message sent successfully ✅");
                setInp({
                    fName: "",
                    lName: "",
                    email: "",
                    sub: "",
                    text: ""
                });
            } else {
                setSuccess(data.message);
            }
        } catch (error) {
            setSuccess("Something went wrong ❌");
        }

        setLoading(false);
    };

    return (
        <section id="contact" className="py-16 px-6">
            <h2 className="text-3xl font-bold text-center mb-10">Contact</h2>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">

                {/* LEFT SIDE - INFO */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                >
                    <h3 className="text-2xl font-semibold">Get in touch</h3>

                    <p className="text-gray-400">
                        I’m always open to discussing new opportunities, projects, or collaborations.
                    </p>

                    <div className="space-y-2 mt-4">
                        <p className="text-gray-300">📞 9623067667</p>
                        <p className="text-gray-300">📧 varsha16@gmail.com</p>

                    </div>
                </motion.div>

                {/* RIGHT SIDE - FORM */}
                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-gray-800 p-6 rounded-xl space-y-4"
                >
                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="fName"
                            placeholder="First Name"
                            value={inp.fName}
                            onChange={handleChange}
                            className="p-3 rounded bg-gray-900 outline-none"
                        />

                        <input
                            type="text"
                            name="lName"
                            placeholder="Last Name"
                            value={inp.lName}
                            onChange={handleChange}
                            className="p-3 rounded bg-gray-900 outline-none"
                        />
                    </div>

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={inp.email}
                        onChange={handleChange}
                        className="w-full p-3 rounded bg-gray-900 outline-none"
                    />

                    <input
                        type="text"
                        name="sub"
                        placeholder="Subject"
                        value={inp.sub}
                        onChange={handleChange}
                        className="w-full p-3 rounded bg-gray-900 outline-none"
                    />

                    <textarea
                        name="text"
                        placeholder="Your Message"
                        value={inp.text}
                        onChange={handleChange}
                        rows={4}
                        className="w-full p-3 rounded bg-gray-900 outline-none"
                    />

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={loading}
                        className={`w-full py-3 rounded-lg font-semibold transition ${loading
                            ? "bg-gray-500 cursor-not-allowed"
                            : "bg-blue-600 hover:bg-blue-700"
                            }`}
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </motion.button>

                    {success && (
                        <p className="text-center text-sm mt-2 text-green-400">
                            {success}
                        </p>
                    )}
                </motion.form>

            </div>
        </section>
    );
}