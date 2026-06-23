"use client";

import { Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

type DashboardChartsProps = {
  variant: 'employee' | 'manager' | 'operations';
};

const employeeData = [
  { name: 'Jan', value: 5 },
  { name: 'Feb', value: 7 },
  { name: 'Mar', value: 4 },
  { name: 'Apr', value: 8 },
  { name: 'May', value: 6 },
  { name: 'Jun', value: 9 },
];

const managerData = [
  { name: 'Approvals', value: 4 },
  { name: 'Open cases', value: 2 },
  { name: 'Overdue', value: 1 },
  { name: 'Coaching', value: 3 },
];

const operationsData = [
  { name: 'Policy', value: 12 },
  { name: 'Announcements', value: 8 },
  { name: 'Queue', value: 17 },
  { name: 'Escalations', value: 3 },
];

export function DashboardCharts({ variant }: DashboardChartsProps) {
  const data = variant === 'employee' ? employeeData : variant === 'manager' ? managerData : operationsData;

  return (
    <div className="card chart-card">
      <div className="card-header">
        <div className="section-title">{variant === 'employee' ? 'Engagement trend' : variant === 'manager' ? 'Team activity' : 'Operations load'}</div>
        <div className="helper">Interactive chart included in the exported Next.js source.</div>
      </div>
      <div className="card-body" style={{ height: 250 }}>
        <ResponsiveContainer width="100%" height="100%">
          {variant === 'employee' ? (
            <AreaChart data={data}>
              <defs>
                <linearGradient id="employeeChart" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2359d1" stopOpacity={0.45} />
                  <stop offset="95%" stopColor="#1ca39b" stopOpacity={0.06} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="#d8e2ef" strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="#6d7f99" />
              <YAxis stroke="#6d7f99" />
              <Tooltip />
              <Area type="monotone" dataKey="value" stroke="#2359d1" fill="url(#employeeChart)" strokeWidth={3} />
            </AreaChart>
          ) : (
            <BarChart data={data}>
              <CartesianGrid stroke="#d8e2ef" strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" stroke="#6d7f99" />
              <YAxis stroke="#6d7f99" />
              <Tooltip />
              <Bar dataKey="value" fill={variant === 'manager' ? '#2359d1' : '#1ca39b'} radius={[8, 8, 0, 0]} />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
}
