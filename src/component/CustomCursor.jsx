import { gsap } from 'gsap';
import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const cursorDotRef = useRef(null);
    const mousePos = useRef({ x: 0, y: 0 });
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Check if device is mobile/touch-based
    useEffect(() => {
        const checkMobile = () => {
            const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
            setIsMobile(isTouchDevice);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

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

    // Don't render cursor on mobile devices
    if (isMobile) {
        return null;
    }

    useEffect(() => {
        const cursor = cursorRef.current;
        const cursorDot = cursorDotRef.current;

        if (!cursor || !cursorDot) return;

        // Mouse move handler with smooth snake-like trailing
        const handleMouseMove = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY };

            // Update dot position immediately for precision
            gsap.to(cursorDot, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "power2.out",
                overwrite: 'auto'
            });

            // Update outer circle with smooth delay for snake-like trailing
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.5,
                ease: "power2.out",
                overwrite: 'auto'
            });
        };

        // Hover detection for interactive elements
        const handleMouseEnter = (e) => {
            // Expand and rotate on hover with bubble effect
            gsap.to(cursor, {
                scale: 2.5,
                rotation: 180,
                duration: 0.4,
                ease: "back.out(1.7)",
                overwrite: 'auto'
            });

            gsap.to(cursorDot, {
                scale: 0,
                duration: 0.3,
                ease: "power2.out",
                overwrite: 'auto'
            });
        };

        const handleMouseLeave = (e) => {
            gsap.to(cursor, {
                scale: 1,
                rotation: 0,
                duration: 0.4,
                ease: "power2.out",
                overwrite: 'auto'
            });

            gsap.to(cursorDot, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
                overwrite: 'auto'
            });
        };

        // Add event listeners to interactive elements
        const interactiveElements = document.querySelectorAll(
            'a, button, input, textarea, select, [role="button"], .MuiButton-root, .ant-btn, .gk-item, .blog-slider-single, .card, .Card, .knowledge-image'
        );

        interactiveElements.forEach((el) => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        // Mouse move event
        window.addEventListener('mousemove', handleMouseMove);

        // Hide cursor when mouse leaves window
        const handleMouseOut = () => {
            gsap.to([cursor, cursorDot], {
                opacity: 0,
                duration: 0.2,
                overwrite: 'auto'
            });
        };

        const handleMouseIn = () => {
            gsap.to([cursor, cursorDot], {
                opacity: 1,
                duration: 0.2,
                overwrite: 'auto'
            });
        };

        document.addEventListener('mouseleave', handleMouseOut);
        document.addEventListener('mouseenter', handleMouseIn);

        // Cleanup
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseOut);
            document.removeEventListener('mouseenter', handleMouseIn);

            interactiveElements.forEach((el) => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, [isDarkTheme]);

    // Dynamic styling based on theme - white bubble for magnifying effect
    const outerBackground = '#ffffff';
    const dotColor = isDarkTheme ? '#ffffff' : '#000000';

    return (
        <>
            {/* Outer circle with white bubble effect */}
            <div
                ref={cursorRef}
                style={{
                    position: 'fixed',
                    width: '50px',
                    height: '50px',
                    background: outerBackground,
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    transform: 'translate(-50%, -50%)',
                    boxShadow: '0 0 20px rgba(255, 255, 255, 0.6), 0 0 40px rgba(255, 255, 255, 0.3)',
                    mixBlendMode: 'difference',
                    willChange: 'transform',
                }}
                className="custom-cursor-outer"
            />

            {/* Inner dot */}
            <div
                ref={cursorDotRef}
                style={{
                    position: 'fixed',
                    width: '12px',
                    height: '12px',
                    backgroundColor: dotColor,
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 10000,
                    transform: 'translate(-50%, -50%)',
                    boxShadow: isDarkTheme
                        ? '0 0 10px rgba(255, 255, 255, 0.8)'
                        : '0 0 8px rgba(0, 0, 0, 0.5)',
                    transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
                    mixBlendMode: 'difference',
                    willChange: 'transform',
                }}
                className="custom-cursor-dot"
            />

            <style jsx>{`
        body {
          cursor: none !important;
        }
        
        a, button, input, textarea, select, [role="button"],
        .MuiButton-root, .ant-btn, .gk-item, .blog-slider-single,
        .card, .Card, .knowledge-image {
          cursor: none !important;
        }

        /* Mobile devices - show default cursor */
        @media (hover: none) and (pointer: coarse) {
          body {
            cursor: auto !important;
          }
          
          a, button, input, textarea, select, [role="button"],
          .MuiButton-root, .ant-btn, .gk-item, .blog-slider-single,
          .card, .Card, .knowledge-image {
            cursor: auto !important;
          }
          
          .custom-cursor-outer,
          .custom-cursor-dot {
            display: none !important;
          }
        }
      `}</style>
        </>
    );
};

export default CustomCursor;
