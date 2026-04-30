import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import ProtectionDashboard from './pages/ProtectionDashboard';

const Placeholder = ({ name }: { name: string }) => (
  <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
    <h2 className="text-xl font-bold text-white mb-2">{name}</h2>
    <p className="text-slate-400">The protection engine is validating global baseline policies. This console will be active shortly.</p>
  </div>
);

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<ProtectionDashboard />} />
          <Route path="/risk-access" element={<Placeholder name="Risk-Based Access Enforcement" />} />
          <Route path="/policies" element={<Placeholder name="Conditional Access Policy Manager" />} />
          <Route path="/sessions" element={<Placeholder name="Continuous Session Guardian" />} />
          <Route path="/containment" element={<Placeholder name="Automated Threat Containment Console" />} />
          <Route path="/devices" element={<Placeholder name="Device Posture & Trust Scoring" />} />
          <Route path="/zero-trust" element={<Placeholder name="Zero Trust Maturity Board" />} />
          <Route path="/pam" element={<Placeholder name="Privileged Identity Defense" />} />
          <Route path="/auth" element={<Placeholder name="Authentication Hardening Portal" />} />
          <Route path="/settings" element={<Placeholder name="Platform & Integration Settings" />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
