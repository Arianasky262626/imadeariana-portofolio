"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Intro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        >
          <div className="text-center">
            <motion.h1
              initial={{
                opacity: 0,
                filter: "blur(20px)",
                y: 20,
              }}
              animate={{
                opacity: 1,
                filter: "blur(0px)",
                y: 0,
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              className="text-5xl font-bold text-white md:text-7xl"
            >
              Ariana,
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                filter: "blur(20px)",
                y: 10,
              }}
              animate={{
                opacity: 1,
                filter: "blur(0px)",
                y: 0,
              }}
              transition={{
                delay: 0.5,
                duration: 0.8,
              }}
              className="mt-5 uppercase tracking-[0.45em] text-lime-400"
            >
              proudly presents
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}