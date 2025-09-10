import { useState, useEffect } from 'react';

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      
      // 检测当前活动板块
      const sections = ['hero', 'services', 'membership', 'case-studies', 'network', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (position >= offsetTop - 100 && position < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初始调用
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return { scrollPosition, activeSection };
}