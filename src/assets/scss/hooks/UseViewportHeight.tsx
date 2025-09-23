import { useState, useEffect, useCallback } from 'react';
function UseViewportHeight(): number {
    const [viewportHeight, setViewportHeight] = useState(0);
    const calculateHeight = useCallback(() => {
        const currentHeight = window.innerHeight;
        setViewportHeight(currentHeight);
        document.documentElement.style.setProperty('--window-height', `${currentHeight}px`);
    }, []);
    useEffect(() => {
        calculateHeight();
        window.addEventListener('resize', calculateHeight);
        window.addEventListener('scroll', calculateHeight);
        return () => {
            window.removeEventListener('resize', calculateHeight);
            window.removeEventListener('scroll', calculateHeight);
        };
    }, [calculateHeight]);
    return viewportHeight;
}
export default UseViewportHeight;