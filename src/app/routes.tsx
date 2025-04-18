import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import MainPage from '@/pages/main';
import SwingPage from '@/pages/swing';
import InstantPage from '@/pages/instant';
import IntradayPage from '@/pages/intraday';
import TermsAndConditionsPage from '@/pages/terms-and-conditions';
import RefundPolicyPage from '@/pages/refund-policy';
import CookiePolicyPage from '@/pages/cookie-policy';
import DisclaimerPage from '@/pages/disclaimer';
import ContactsPage from '@/pages/contacts';
import AboutUsPage from '@/pages/about-us';

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/swing" element={<SwingPage />} />
        <Route path="/instant" element={<InstantPage />} />
        <Route path="/intraday" element={<IntradayPage />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
        <Route path="/refund-policy" element={<RefundPolicyPage />} />
        <Route path="/cookie-policy" element={<CookiePolicyPage />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
