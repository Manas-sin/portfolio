import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const MaskedCursor = ({ children, className = "" }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth mouse tracking
    const mouseX = useSpring(x, { stiffness: 500, damping: 50 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 50 });

    // Mask size
    const maskSize = 150; // Diameter of the circle

    useEffect(() => {
        // Detect theme
        const checkTheme = () => {
            const isDark = document.body.classList.contains('dark-theme');
            setIsDarkTheme(isDark);
        };

        checkTheme();

        // Watch for theme changes
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.body, {
            attributes: true,
            attributeFilter: ['class']
        });

        return () => observer.disconnect();
    }, []);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left);
        y.set(e.clientY - rect.top);
    };

    return (
        <div
            className={`masked-cursor-container ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
            style={{ position: 'relative', display: 'inline-block', cursor: 'none' }}
        >
            {/* Base Layer (Normal) */}
            <div className="base-layer">
                {children}
            </div>

            {/* Reveal Layer (Magnified & Inverted) */}
            <motion.div
                className="reveal-layer"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    color: isDarkTheme ? '#ffffff' : '#000000', // Dynamic text color
                    backgroundColor: isDarkTheme ? '#000000' : '#ffffff', // Dynamic background color
                    pointerEvents: 'none',
                    // The mask
                    WebkitMaskImage: useTransform(
                        [mouseX, mouseY],
                        ([latestX, latestY]) => `radial-gradient(circle ${maskSize / 2}px at ${latestX}px ${latestY}px, black 100%, transparent 100%)`
                    ),
                    maskImage: useTransform(
                        [mouseX, mouseY],
                        ([latestX, latestY]) => `radial-gradient(circle ${maskSize / 2}px at ${latestX}px ${latestY}px, black 100%, transparent 100%)`
                    ),
                    // Magnification alignment
                    transformOrigin: useTransform(
                        [mouseX, mouseY],
                        ([latestX, latestY]) => `${latestX}px ${latestY}px`
                    ),
                    scale: isHovered ? 1.2 : 1, // Only scale when hovered
                    opacity: isHovered ? 1 : 0, // Fade in/out
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
            >
                {/* We need the content to be exactly the same structure */}
                <div style={{ width: '100%', height: '100%' }}>
                    {children}
                </div>
            </motion.div>
        </div>
    );
};

export default MaskedCursor;
