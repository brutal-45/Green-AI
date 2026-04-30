import { useState, useEffect } from 'react';

/**
 * [PLACE DOCSTRING HERE]
 * useMyHook - A robust hook for browser-specific logic.
 * Handles SSR by guarding against undefined window.
 */
export function useMyHook() {
  // [PLACE SSR GUARD HERE for initial state]
  const [data, setData] = useState(typeof window !== "undefined" ? window.someValue : null);

  useEffect(() => {
    // [PLACE LOGIC HERE]
    // This code only runs on the client.
    if (typeof window !== "undefined") {
      const handleEvent = () => console.log(window.innerWidth);
      window.addEventListener('resize', handleEvent);
      
      return () => window.removeEventListener('resize', handleEvent);
    }
  }, []);

  return data;
}
