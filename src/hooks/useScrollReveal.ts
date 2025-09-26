import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const useScrollReveal = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: 'ease-out-cubic',
      once: true,
      mirror: false,
    });

    return () => {
      AOS.refresh();
    };
  }, []);
};