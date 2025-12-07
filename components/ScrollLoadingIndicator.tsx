import React from "react";
import { motion } from "framer-motion";

interface ScrollLoadingIndicatorProps {
    isLoading?: boolean;
}

const ScrollLoadingIndicator: React.FC<ScrollLoadingIndicatorProps> = ({
    isLoading = false,
}) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const dotVariants = {
        hidden: { y: 0 },
        visible: {
            y: -10,
            transition: {
                duration: 0.6,
                repeat: Infinity,
                repeatType: "reverse" as const,
            },
        },
    };

    if (!isLoading) return null;

    return (
        <motion.div
            className="fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
        >
            <motion.div
                className="flex gap-2"
                variants={containerVariants}
            >
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        className="w-2 h-2 bg-primary rounded-full"
                        variants={dotVariants}
                    />
                ))}
            </motion.div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Loading...
            </span>
        </motion.div>
    );
};

export default ScrollLoadingIndicator;
