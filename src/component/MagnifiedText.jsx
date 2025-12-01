import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const MagnifiedText = ({
    children,
    className = "",
    magnifyRadius = 100,      // lens radius in px
    magnifyScale = 1.5        // zoom factor
}) => {
    const containerRef = useRef(null);
    const lensRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const lens = lensRef.current;
        const content = contentRef.current;

        if (!container || !lens || !content) return;

        const diameter = magnifyRadius * 2;

        const handleMouseMove = (e) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left; // cursor X inside container
            const y = e.clientY - rect.top;  // cursor Y inside container

            // Move lens so its center is at cursor (using transform x/y)
            gsap.to(lens, {
                x: x - magnifyRadius,
                y: y - magnifyRadius,
                duration: 0.12,
                ease: "power2.out"
            });

            // Align magnified content so the cursor point is centered in the lens
            // Formula: s*x + tx = R  => tx = R - s*x
            gsap.to(content, {
                x: magnifyRadius - magnifyScale * x,
                y: magnifyRadius - magnifyScale * y,
                duration: 0.12,
                ease: "power2.out"
            });
        };

        const handleMouseEnter = () => {
            gsap.to(lens, {
                opacity: 1,
                scale: 1,
                duration: 0.2,
                ease: "power3.out"
            });
        };

        const handleMouseLeave = () => {
            gsap.to(lens, {
                opacity: 0,
                scale: 0.7,
                duration: 0.2,
                ease: "power3.inOut"
            });
        };

        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseenter", handleMouseEnter);
        container.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            container.removeEventListener("mousemove", handleMouseMove);
            container.removeEventListener("mouseenter", handleMouseEnter);
            container.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [magnifyRadius, magnifyScale]);

    const diameter = magnifyRadius * 2;

    return (
        <>
            <div
                ref={containerRef}
                className={`magnified-text-container ${className}`}
                style={{
                    position: "relative",
                    display: "inline-block",
                    cursor: "none",
                    userSelect: "none",
                    isolation: "isolate"
                }}
            >
                {/* Normal text */}
                <div className="original-text">
                    {children}
                </div>

                {/* Glass magnifier lens */}
                <div
                    ref={lensRef}
                    className="glass-lens"
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: `${diameter}px`,
                        height: `${diameter}px`,
                        borderRadius: "50%",
                        overflow: "hidden",
                        pointerEvents: "none",
                        opacity: 0,
                        transform: "scale(0.7)",
                        transformOrigin: "center center",
                        zIndex: 10,

                        // glass look
                        backdropFilter: "blur(10px) brightness(1.3)",
                        background:
                            "radial-gradient(circle, rgba(255,255,255,0.28), rgba(255,255,255,0.10))",
                        boxShadow:
                            "0 0 25px rgba(255,255,255,0.35), inset 0 0 15px rgba(255,255,255,0.18), 0 0 40px rgba(255,255,255,0.15)",
                        border: "2px solid rgba(255,255,255,0.35)"
                    }}
                >
                    <div
                        ref={contentRef}
                        className="glass-lens-content"
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            transform: `scale(${magnifyScale})`,
                            transformOrigin: "top left",
                            filter: "brightness(1.1) contrast(1.05)",
                            textShadow:
                                "0 0 10px rgba(255,255,255,0.35), 0 0 18px rgba(255,255,255,0.2)"
                        }}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MagnifiedText;
