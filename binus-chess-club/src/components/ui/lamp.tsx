'use client';

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(
      "relative flex flex-col items-center justify-center overflow-hidden",
      className
    )}>
      <div className="w-full relative z-1">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gradient-to-b from-dark-green/30 to-binus-white/10 h-80 w-full backdrop-blur-md absolute inset-0 mx-auto"
        />
        {children}
      </div>
    </div>
  );
};