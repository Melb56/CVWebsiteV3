"use client";
import { ReactNode } from "react";
import { motion } from "motion/react"

export default function SectionWrapper({ children }: { children: ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="min-h-screen flex items-center justify-center p-8"
    >
      {children}
    </motion.section>
  );
}