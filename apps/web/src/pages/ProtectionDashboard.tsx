import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, Cell, PieChart, Pie, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';
import { 
  ShieldCheck, 
  Lock, 
  Activity, 
  Zap,
  TrendingUp,
  ShieldAlert,
  Smartphone,
  CheckCircle2,
  Clock,
  ExternalLink
} from 'lucide-react';

const policyData = [
  { name: 'MFA Force', count: 840, color: '#6366f1' },
  { name: 'Geo Block', count: 125, color: '#818cf8' },
  { name: 'Token Revoke', count: 42, color: '#4f46e5' },
  { name: 'PAM JIT', count: 210, color: '#4338ca' },
  { name: 'Device Trust', count: 560, color: '#3730a3' },
];

const riskData = [
  { time: '00:00', score: 12 },
  { time: '04:00', score: 15 },
  { time: '08:00', score: 8 },
  { time: '12:00', score: 25 },
  { time: '16:00', score: 18 },
  { time: '20:00', score: 10 },
];

const KPI_CARDS = [
  { title: 'Policies Enforced', value: '142', trend: '+4 this week', color: 'indigo', icon: Lock },
  { title: 'Prevented Attacks', value: '1,842', trend: '+124 total', color: 'indigo', icon: ShieldCheck },
  { title: 'Active Sessions', value: '4.2k', trend: '100% verified', color: 'indigo', icon: Activity },
  { title: 'Remediation Rate', value: '99.2%', trend: 'Auto-pilot active', color: 'indigo', icon: Zap },
];

const ProtectionDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Identity Protection Overview</h1>
          <p className="text-slate-400">Proactive enforcement of Zero Trust and Adaptive Access policies.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Audit Policies
          </button>
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Update Baseline
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPI_CARDS.map((card) => (
          <div key={card.title} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative group hover:border-slate-700 transition-all">
            <div className="flex justify-between items-start">
              <div className={`p-2 bg-${card.color}-500/10 rounded-lg`}>
                <card.icon className={`w-6 h-6 text-${card.color}-500`} />
              </div>
              <div className="text-xs font-medium text-slate-400">
                {card.trend}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-slate-500 font-medium">{card.title}</p>
              <p className="text-3xl font-bold text-white mt-1">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Enforcement Breakdown */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Policy Enforcement Volume</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={policyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                  {policyData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} fillOpacity={0.8} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Protection Score Trend */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Risk Prevention Trend</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={riskData}>
                <defs>
                  <linearGradient id="colorRisk" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="time" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Area type="monotone" dataKey="score" stroke="#6366f1" strokeWidth={2} fillOpacity={1} fill="url(#colorRisk)" name="Prev Rate" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Protection Events Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">Automated Protection Events</h3>
          <button className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">View Policy Logs</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-800/50 text-slate-400 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Event / Policy</th>
                <th className="px-6 py-4 font-semibold">Affected Identity</th>
                <th className="px-6 py-4 font-semibold">Action Taken</th>
                <th className="px-6 py-4 font-semibold">Time</th>
                <th className="px-6 py-4 font-semibold">Result</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {[
                { title: 'Adaptive MFA Challenge', user: 'j.doe@corp.com', action: 'Force Push', time: '1m ago', result: 'Verified', icon: Smartphone },
                { title: 'Risky Session Terminated', user: 'b.smith@corp.com', action: 'Kill Tokens', time: '12m ago', result: 'Success', icon: ShieldAlert },
                { title: 'Token Hijack Prevention', user: 'svc-finance-01', action: 'Quarantine', time: '45m ago', result: 'Protected', icon: Zap },
              ].map((event) => (
                <tr key={event.title} className="hover:bg-slate-800/50 transition-all group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-500">
                        <event.icon size={18} />
                      </div>
                      <span className="text-sm font-bold text-white">{event.title}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-300">{event.user}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-slate-800 border border-slate-700 rounded-full text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                      {event.action}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {event.time}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500" />
                      <span className="text-sm font-medium text-emerald-500">{event.result}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProtectionDashboard;
