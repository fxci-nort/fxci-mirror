import { useEffect } from 'react';

export const scrollToPlans = (e: React.MouseEvent<HTMLAnchorElement> | Event) => {
  e.preventDefault();
  const plansSection = document.getElementById('plans');
  if (plansSection) {
    plansSection.scrollIntoView({ behavior: 'smooth' });
  }
};

export const useScrollToPlansLinks = () => {
  useEffect(() => {
    const plansLinks = document.querySelectorAll('a[data-target="#plans"]');

    const handleClick = (e: Event) => {
      scrollToPlans(e);
    };

    plansLinks.forEach(link => {
      link.addEventListener('click', handleClick);
    });

    return () => {
      plansLinks.forEach(link => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, []);
};
