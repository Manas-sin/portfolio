import { gsap } from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
    const containerRef = useRef(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const targetMouseRef = useRef({ x: 0, y: 0 });
    const [isDarkTheme, setIsDarkTheme] = useState(false);

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

    useEffect(() => {
        if (!containerRef.current) return;

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 50;

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        containerRef.current.appendChild(renderer.domElement);

        // Create particle system with wave effect
        const particlesGeometry = new THREE.BufferGeometry();
        const particleCount = 6000; // Reduced for better performance

        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        const sizes = new Float32Array(particleCount);

        // Color palettes for light and dark themes
        const darkColors = [
            new THREE.Color(0x6366f1), // Indigo
            new THREE.Color(0x8b5cf6), // Purple
            new THREE.Color(0xec4899), // Pink
            new THREE.Color(0x06b6d4)  // Cyan
        ];

        const lightColors = [
            new THREE.Color(0xa5b4fc), // Light indigo
            new THREE.Color(0xc4b5fd), // Light purple
            new THREE.Color(0xfbcfe8), // Light pink
            new THREE.Color(0x67e8f9)  // Light cyan
        ];

        const colorPalette = isDarkTheme ? darkColors : lightColors;

        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            const gridSize = Math.ceil(Math.sqrt(particleCount));
            const x = (i % gridSize) - gridSize / 2;
            const z = Math.floor(i / gridSize) - gridSize / 2;

            positions[i3] = x * 2.5;
            positions[i3 + 1] = Math.sin(x * 0.3) * Math.cos(z * 0.3) * 5;
            positions[i3 + 2] = z * 2.5;

            // Assign colors based on position
            const mixRatio = (i / particleCount);
            let color;

            if (mixRatio < 0.33) {
                color = colorPalette[0].clone().lerp(colorPalette[1], mixRatio * 3);
            } else if (mixRatio < 0.66) {
                color = colorPalette[1].clone().lerp(colorPalette[2], (mixRatio - 0.33) * 3);
            } else {
                color = colorPalette[2].clone().lerp(colorPalette[3], (mixRatio - 0.66) * 3);
            }

            colors[i3] = color.r;
            colors[i3 + 1] = color.g;
            colors[i3 + 2] = color.b;

            sizes[i] = Math.random() * 2.5 + 0.5;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        particlesGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        // Custom shader material for glowing particles
        const particlesMaterial = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 },
                mousePos: { value: new THREE.Vector2(0, 0) }
            },
            vertexShader: `
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        uniform float time;
        uniform vec2 mousePos;
        
        void main() {
          vColor = color;
          vec3 pos = position;
          
          // Wave animation
          float wave = sin(pos.x * 0.15 + time * 0.5) * cos(pos.z * 0.15 + time * 0.5) * 4.0;
          pos.y += wave;
          
          // Mouse interaction - particles move away from cursor
          vec2 mouseInfluence = mousePos * 50.0;
          float dist = distance(pos.xz, mouseInfluence);
          float influence = smoothstep(25.0, 0.0, dist);
          pos.y += influence * 15.0;
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
            fragmentShader: `
        varying vec3 vColor;
        
        void main() {
          // Create circular particles with glow
          vec2 center = gl_PointCoord - vec2(0.5);
          float dist = length(center);
          
          if (dist > 0.5) discard;
          
          float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
          alpha = pow(alpha, 2.0);
          
          gl_FragColor = vec4(vColor, alpha * 0.7);
        }
      `,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            vertexColors: true
        });

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        // Add ambient geometry with theme-aware colors
        const ambientGeometry = new THREE.IcosahedronGeometry(15, 1);
        const ambientMaterial = new THREE.MeshBasicMaterial({
            color: isDarkTheme ? 0x6366f1 : 0xa5b4fc,
            wireframe: true,
            transparent: true,
            opacity: isDarkTheme ? 0.1 : 0.05
        });
        const ambientMesh = new THREE.Mesh(ambientGeometry, ambientMaterial);
        scene.add(ambientMesh);

        // Mouse move handler with GSAP smooth animation
        const handleMouseMove = (event) => {
            const newX = (event.clientX / window.innerWidth) * 2 - 1;
            const newY = -(event.clientY / window.innerHeight) * 2 + 1;

            gsap.to(targetMouseRef.current, {
                x: newX,
                y: newY,
                duration: 0.5,
                ease: "power2.out"
            });
        };

        // Handle window resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        // GSAP animation for camera
        gsap.to(camera.position, {
            duration: 2,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true,
            y: "+=3"
        });

        // Animation loop
        let animationId;
        const clock = new THREE.Clock();

        const animate = () => {
            animationId = requestAnimationFrame(animate);

            const elapsedTime = clock.getElapsedTime();

            // Smooth mouse following
            mouseRef.current.x += (targetMouseRef.current.x - mouseRef.current.x) * 0.05;
            mouseRef.current.y += (targetMouseRef.current.y - mouseRef.current.y) * 0.05;

            // Update shader uniforms
            particlesMaterial.uniforms.time.value = elapsedTime;
            particlesMaterial.uniforms.mousePos.value.set(
                mouseRef.current.x,
                mouseRef.current.y
            );

            // Rotate particle system slowly
            particlesMesh.rotation.y = elapsedTime * 0.03;
            particlesMesh.rotation.x = Math.sin(elapsedTime * 0.05) * 0.1;

            // Rotate ambient mesh
            ambientMesh.rotation.x = elapsedTime * 0.08;
            ambientMesh.rotation.y = elapsedTime * 0.12;

            // Camera follows mouse slightly
            camera.position.x = mouseRef.current.x * 3;
            camera.lookAt(scene.position);

            renderer.render(scene, camera);
        };

        animate();

        // Cleanup
        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);

            if (containerRef.current && renderer.domElement) {
                containerRef.current.removeChild(renderer.domElement);
            }

            particlesGeometry.dispose();
            particlesMaterial.dispose();
            ambientGeometry.dispose();
            ambientMaterial.dispose();
            renderer.dispose();
        };
    }, [isDarkTheme]);

    // Background gradients for light and dark themes
    const backgroundStyle = isDarkTheme
        ? 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)'
        : 'linear-gradient(135deg, #e0e7ff 0%, #f3e8ff 50%, #fce7f3 100%)';

    return (
        <div
            ref={containerRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                background: backgroundStyle,
                overflow: 'hidden',
                pointerEvents: 'none'
            }}
        />
    );
};

export default ThreeBackground;
