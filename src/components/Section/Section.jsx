"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Section() {
    const [showFirst, setShowFirst] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowFirst((prev) => !prev);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div id="About" className="container mx-auto pt-0 md:pt-10 px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-110 items-center">
              
                <div className="md:col-span-2 text-white order-2 md:order-1">
                    <p className="text-3xl md:text-5xl font-medium">Hello, I'm Ulugbek</p>
                    <p className="text-3xl md:text-5xl font-medium pt-3 md:pt-5">Abdullayev</p>

                    <div className="relative h-16 md:h-auto mt-4 md:mt-5">
                        <AnimatePresence mode="wait">
                            {showFirst ? (
                                <motion.div
                                    key="frontend"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute w-full"
                                >
                                    <p className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-600 bg-clip-text text-transparent">
                                        Frontend Developer
                                    </p>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="uiux"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute w-full"
                                >
                                    <p className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-600 bg-clip-text text-transparent">
                                        UI/UX Designer
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <p className="pt-16 md:pt-12 text-sm md:text-base text-gray-400 leading-relaxed">
                            I am a frontend developer. I graduated from Najot Talim Educational Center and have learned technologies such as HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS.
                            Currently, I am focused on strengthening the skills I've learned and gaining experience by creating real-world projects. <br /><br />
                            I enjoy creating modern, interactive, and responsive websites for users. I pay special attention to UI/UX design and strive to provide users with a convenient interface.
                            Learning new technologies and applying them in practice gives me great satisfaction. <br /><br />
                            My goal is to create web applications with perfect design and functionality, and to enhance my experience in this field to become a professional frontend developer.
                        </p>
                    </div>
                </div>

             
                <div className="md:col-span-1 flex justify-center order-1 md:order-2">
                    <div className="relative w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full">
                        <div className="absolute inset-1 bg-gradient-to-b from-cyan-400 to-fuchsia-600 rounded-full p-[5px]">
                            <img
                                className="w-full h-full object-cover rounded-full"
                                src="/foto.jpg"
                                alt="Ulugbek"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
