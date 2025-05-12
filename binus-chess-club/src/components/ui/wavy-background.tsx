'use client';

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const WavyBackground = ({
  children,
  className,
  colors = ["#0A1931", "#18534F", "#FFFFFF"],
}: {
  children?: React.ReactNode;
  className?: string;
  colors?: string[];
}) => {
  const waves = Array(5).fill(0);

  return (
    <div className={cn("relative h-full w-full", className)}>
      {waves.map((_, i) => (
        <motion.div
          key={i}
          animate={{
            scale: [1, 2, 2, 1],
            rotate: [0, 0, 180, 180],
            borderRadius: ["20%", "20%", "50%", "50%"],
            transition: {
              duration: 20,
              repeat: Infinity,
              delay: i * 2,
            },
          }}
          style={{
            background: `linear-gradient(45deg, ${colors[i % colors.length]} 10%, ${
              colors[(i + 1) % colors.length]
            } 90%)`,
          }}
          className="absolute opacity-50 w-64 h-64"
        />
      ))}
      <div className="relative z-10">{children}</div>
    </div>
  );
};