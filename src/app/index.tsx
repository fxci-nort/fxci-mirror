import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import '@/assets/css/main.css';
import Layout from './layout';
import AppRoutes from './routes';
import { ParamsProvider } from '@/shared/params';

export default function App() {
  return (
    <Router>
      <ParamsProvider>
        <Layout>
          <AppRoutes />
        </Layout>
      </ParamsProvider>
    </Router>
  );
}
