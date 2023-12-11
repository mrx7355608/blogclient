import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function MotionDiv({ children }: { children: ReactNode }) {
    return (
        <motion.div
            animate={{ y: -20 }}
            transition={{ ease: "easeOut", duration: 0.6 }}
        >
            {children}
        </motion.div>
    );
}
