import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/header';
import Footer from '@/components/footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  // Routes that should have dark theme
  const darkThemeRoutes = [
    '/', // main page
    '/intraday',
    '/swing',
    '/instant',
  ];

  // Check if current path should have dark theme
  const isDarkTheme = darkThemeRoutes.includes(location.pathname);

  // Apply theme class to body element
  useEffect(() => {
    document.body.className = isDarkTheme ? 'dark' : 'light';
  }, [isDarkTheme]);

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
