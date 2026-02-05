import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import DashboardHome from './pages/DashboardHome';
import FinancialPerformance from './pages/FinancialPerformance';
import MarketingEffectiveness from './pages/MarketingEffectiveness';
import CustomerBehavior from './pages/CustomerBehavior';
import OperationalEfficiency from './pages/OperationalEfficiency';
import PerformanceDrivers from './pages/PerformanceDrivers';
import PredictiveAnalytics from './pages/PredictiveAnalytics';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/financials" element={<FinancialPerformance />} />
          <Route path="/marketing" element={<MarketingEffectiveness />} />
          <Route path="/customers" element={<CustomerBehavior />} />
          <Route path="/operations" element={<OperationalEfficiency />} />
          <Route path="/drivers" element={<PerformanceDrivers />} />
          <Route path="/predictive" element={<PredictiveAnalytics />} />
          <Route path="/settings" element={<div style={{ padding: '2rem' }}><h2>Settings</h2></div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
