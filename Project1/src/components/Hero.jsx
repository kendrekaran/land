import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="min-h-screen bg-black">
      <header className="container mx-auto px-4">
        <motion.nav
          className="flex items-center justify-between py-6"
          initial={{  opacity: 0 }}
          whileInView={{  opacity: 1 }}
          transition={{ duration: 1, delay:0.5 }}
        >
          <a href="#" className="text-purple-400 text-xl font-semibold">
            SYNERGYM
          </a>
          <div className="hidden md:flex items-center gap-6 text-gray-300">
            {["Home", "About Us", "Activities", "Schedules", "Prices", "Testimonials", "Gallery", "Contact"].map(
              (item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="hover:text-purple-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  {item}
                </motion.a>
              )
            )}
          </div>
        </motion.nav>
      </header>
      <main className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between py-12 md:py-24 gap-8">
          <motion.div
            className="flex-1 space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{  opacity: 1 }}
            transition={{ duration: 1, delay:0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Gym, weights, yoga.<span className="text-purple-400">.</span>
            </h1>
            <p className="text-xl text-gray-300">
              Achieve your first results with the synergy
              <br />
              of our courses in just{" "}
              <span className="text-purple-400 font-semibold">1 month.</span>
            </p>
            <div className="space-y-2">
              <a
                href="#"
                className="bg-white text-black hover:bg-purple-600 hover:text-white text-md rounded-xl inline-block px-4 py-2"
              >
                FIRST TRIAL
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <span className="line-through">from €20</span>
                <span className="text-purple-400 font-semibold">FREE</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="flex-1 relative mt-[-10%] ml-10 sm:mt-[0%] sm:ml-0 w-screen"
            initial={{  opacity: 0 }}
            whileInView={{  opacity: 1 }}
            transition={{ duration: 1, delay:0.5 }}
          >
            <div className="absolute inset-0 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
            <img
              src="https://i.imgur.com/bM4ThlK.png"
              alt="Fitness training"
              className="h-auto w-auto relative z-10"
            />
          </motion.div>
        </div>
      </main>
    </div>
  );
}
