import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import '../assets/css/main.css'
import Layout from './layout'
import AppRoutes from './routes'

export default function App() {
    return (
        <Router>
            <Layout>
                <AppRoutes />
            </Layout>
        </Router>
    )
} 