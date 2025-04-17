import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/header';
import Footer from '@/components/footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  // Routes that should have light theme - update this array with your specific light routes
  const lightThemeRoutes = [
    '/about-us',
    '/contacts',
    '/terms-and-conditions',
    '/refund-policy',
    '/cookie-policy',
    '/disclaimer',
  ];

  // Check if current path should have light theme
  const isLightTheme = lightThemeRoutes.includes(location.pathname);

  return (
    <div className={isLightTheme ? 'light' : 'dark'}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
