import { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: (i: number = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.6,
            ease: 'easeOut',
        },
    }),
};

export const fadeIn: Variants = {
    hidden: {
        opacity: 0,
    },
    visible: (i: number = 1) => ({
        opacity: 1,
        transition: {
            delay: i * 0.1,
            duration: 0.6,
        },
    }),
};

export const slideInLeft: Variants = {
    hidden: {
        opacity: 0,
        x: -50,
    },
    visible: (i: number = 1) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.6,
            ease: 'easeOut',
        },
    }),
};

export const slideInRight: Variants = {
    hidden: {
        opacity: 0,
        x: 50,
    },
    visible: (i: number = 1) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.6,
            ease: 'easeOut',
        },
    }),
};

export const scaleIn: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.8,
    },
    visible: (i: number = 1) => ({
        opacity: 1,
        scale: 1,
        transition: {
            delay: i * 0.1,
            duration: 0.6,
            ease: 'easeOut',
        },
    }),
};

export const staggerContainer: Variants = {
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

export const pulseAnimation: Variants = {
    animate: {
        scale: [1, 1.05, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    },
};

export const bounceIn: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.3,
    },
    visible: (i: number = 1) => ({
        opacity: 1,
        scale: 1,
        transition: {
            delay: i * 0.1,
            duration: 0.6,
            type: 'spring',
            stiffness: 100,
            damping: 15,
        },
    }),
};
