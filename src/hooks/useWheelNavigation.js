import { useEffect, useRef, useState } from 'react';

const SECTIONS = ['home', 'about', 'portfolio', 'contact'];
const LOCK_DURATION = 800; // ms — prevents double-firing

export const useWheelNavigation = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentIndexRef = useRef(0);
    const isScrollingRef = useRef(false);

    const scrollToIndex = (index) => {
        if (index < 0 || index >= SECTIONS.length) return;
        if (isScrollingRef.current) return;

        const el = document.getElementById(SECTIONS[index]);
        if (!el) return;

        isScrollingRef.current = true;
        currentIndexRef.current = index;
        setCurrentIndex(index);

        el.scrollIntoView({ behavior: 'smooth', block: 'start' });

        setTimeout(() => {
            isScrollingRef.current = false;
        }, LOCK_DURATION);
    };

    useEffect(() => {
        const isMobile = () => window.innerWidth < 768 || 'ontouchstart' in window;

        const handleWheel = (e) => {
            if (isMobile()) return; // let mobile scroll naturally
            e.preventDefault();
            if (isScrollingRef.current) return;

            if (e.deltaY > 0) {
                scrollToIndex(currentIndexRef.current + 1);
            } else if (e.deltaY < 0) {
                scrollToIndex(currentIndexRef.current - 1);
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: false });
        return () => window.removeEventListener('wheel', handleWheel);
    }, []);

    // Sync index when IntersectionObserver or Navbar changes section
    const syncIndex = (sectionId) => {
        const idx = SECTIONS.indexOf(sectionId);
        if (idx !== -1) {
            currentIndexRef.current = idx;
            setCurrentIndex(idx);
        }
    };

    return { currentIndex, scrollToIndex, syncIndex, SECTIONS };
};
