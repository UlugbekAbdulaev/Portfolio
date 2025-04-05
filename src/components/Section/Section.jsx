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
        <div className="container mx-auto pt-10">
            <div className="grid grid-cols-3">
                <div className="col-span-2 text-white">
                    <p className="text-5xl font-medium">Hello, I'm Ulugbek</p>
                    <p className="text-5xl font-medium pt-5">Abdullayev</p>



                    <div className="relative h-auto mt-5">
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
                                    <p className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-600 bg-clip-text text-transparent">
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
                                    <p className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-600 bg-clip-text text-transparent">
                                        UI/UX Designer
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <p className="pt-12 text-gray-400 ">I am a frontend developer. I graduated from Najot Talim Educational Center and have learned technologies such as HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS. Currently, I am focused on strengthening the skills I've learned and gaining experience by creating real-world projects. <br />

                            I enjoy creating modern, interactive, and responsive websites for users. I pay special attention to UI/UX design and strive to provide users with a convenient interface. Learning new technologies and applying them in practice gives me great satisfaction. <br />

                            My goal is to create web applications with perfect design and functionality, and to enhance my experience in this field to become a professional frontend developer.</p>

                    </div>
                </div>
                <div className="col-span-1 pr-0 flex justify-center">
                    <div className="relative w-[400px] h-[400px] rounded-full">
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
