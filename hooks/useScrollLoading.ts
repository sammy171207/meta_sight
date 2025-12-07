import { useEffect, useState } from 'react';

export const useScrollLoading = () => {
    const [isScrolling, setIsScrolling] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let scrollTimeout: NodeJS.Timeout;

        const handleScroll = () => {
            setIsScrolling(true);
            setScrollY(window.scrollY);

            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                setIsScrolling(false);
            }, 1000);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(scrollTimeout);
        };
    }, []);

    return {
        isScrolling,
        scrollY,
        isLoading,
        setIsLoading,
    };
};

export const useScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            setScrollProgress(scrolled);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return scrollProgress;
};
