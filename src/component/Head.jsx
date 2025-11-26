import { gsap } from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import '/public/css/main.css';

const Head = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const transitionOverlayRef = useRef(null);
  const toggleButtonRef = useRef(null);

  useEffect(() => {
    // Check the saved dark mode preference from local storage
    const savedDarkMode = localStorage.getItem('darkTheme') === 'true';
    setIsDarkMode(savedDarkMode);
    document.body.classList.toggle('dark-theme', savedDarkMode);

    // Update background images based on dark mode preference
    const home1bgimg = document.querySelector('.page-wrapper');
    const home2bgimg = document.querySelector('.page-wrapper-2');
    if (home1bgimg) {
      home1bgimg.style.backgroundImage = savedDarkMode
        ? "url('/img/bg/page-bg-dark-1.jpg')"
        : "url('/img/bg/page-bg-1.jpg')";
    }
    if (home2bgimg) {
      home2bgimg.style.backgroundImage = savedDarkMode
        ? "url('/img/bg/page-bg-dark-2.jpg')"
        : "url('/img/bg/page-bg-1.jpg')";
    }
  }, []);

  const toggleDarkMode = (e) => {
    const overlay = transitionOverlayRef.current;
    const button = toggleButtonRef.current;
    if (!overlay || !button) return;

    // Get button position for ripple origin
    const rect = button.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // Calculate the maximum distance to cover the entire screen
    const maxDistance = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    ) * 2;

    setIsDarkMode(prevMode => {
      const newMode = !prevMode;

      // Position overlay at button location
      overlay.style.left = `${x}px`;
      overlay.style.top = `${y}px`;
      overlay.style.display = 'block';

      // Animate the circular ripple expansion
      const timeline = gsap.timeline();

      // Expand circle from button position
      timeline.fromTo(overlay,
        {
          width: 0,
          height: 0,
          borderRadius: '50%',
        },
        {
          width: maxDistance,
          height: maxDistance,
          duration: 0.6,
          ease: "power2.inOut",
        }
      );

      // Switch theme at 50% of animation
      timeline.call(() => {
        localStorage.setItem('darkTheme', newMode);
        document.body.classList.toggle('dark-theme', newMode);

        // Update background images based on new dark mode state
        const home1bgimg = document.querySelector('.page-wrapper');
        const home2bgimg = document.querySelector('.page-wrapper-2');
        if (home1bgimg) {
          home1bgimg.style.backgroundImage = newMode
            ? "url('/img/bg/page-bg-dark-2.jpg')"
            : "url('/img/bg/page-bg-1.jpg')";
        }
        if (home2bgimg) {
          home2bgimg.style.backgroundImage = newMode
            ? "url('/img/bg/page-bg-dark-1.jpg')"
            : "url('/img/bg/page-bg-1.jpg')";
        }
      }, null, 0.3);

      // Fade out the overlay
      timeline.to(overlay, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
        onComplete: () => {
          overlay.style.display = 'none';
          overlay.style.opacity = 1;
        }
      });

      return newMode;
    });
  };

  return (
    <>
      {/* Theme Transition Overlay - Circular Ripple */}
      <div
        ref={transitionOverlayRef}
        style={{
          position: 'fixed',
          background: 'radial-gradient(circle, rgba(0,0,0,0.98) 0%, rgba(20,20,20,0.95) 100%)',
          zIndex: 99999,
          opacity: 1,
          display: 'none',
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          willChange: 'width, height',
        }}
      />

      <div className="bostami-header-area mb-30 z-index-5">
        <div className="container">
          <div className="bostami-header-wrap">
            <div className="row align-items-center">
              {/* logo */}
              <div className="col-6">
                <div className="bostami-header-logo">
                  <a className="site-logo" href="/">
                    <span className="example-text">ManasSingh</span>
                  </a>
                </div>
              </div>
              {/* menu btn */}
              <div className="col-6">
                <div className="bostami-header-menu-btn text-right">
                  <div
                    ref={toggleButtonRef}
                    className="dark-btn dark-btn-stored dark-btn-icon"
                    onClick={toggleDarkMode}
                  >
                    <i className={`fa-light ${isDarkMode ? 'fa-sun' : 'fa-moon'}`} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Head;
