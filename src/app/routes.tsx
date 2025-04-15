import { Routes, Route, Navigate } from 'react-router-dom';
import Main from '@/pages/main';
import Swing from '@/pages/swing';
import Instant from '@/pages/instant';
import Intraday from '@/pages/intraday';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/swing" element={<Swing />} />
      <Route path="/instant" element={<Instant />} />
      <Route path="/intraday" element={<Intraday />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
