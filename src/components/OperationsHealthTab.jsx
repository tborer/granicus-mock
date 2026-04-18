import React from 'react';
import { ArrowUpRight, ArrowDownRight, Activity } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, BarChart, Bar, Cell, YAxis as BarYAxis, XAxis as BarXAxis } from 'recharts';

const kpis = [
  { title: "Processing Time Reduction", value: "20%", trend: "up", percent: "5%", status: "success" },
  { title: "Manual Steps Eliminated", value: "147", trend: "up", percent: "12%", status: "success" },
  { title: "User Friction Reports", value: "34%", trend: "down", percent: "34%", status: "success", info: "vs prior period" },
  { title: "System Adoption Rate", value: "78%", trend: "down", percent: "4%", status: "warning", info: "target: 85%" } // Intentionally amber
];

const efficiencyData = [
  { month: 'Oct', manual: 120, automated: 10 },
  { month: 'Nov', manual: 110, automated: 25 },
  { month: 'Dec', manual: 90, automated: 45 },
  { month: 'Jan', manual: 60, automated: 80 }, // Go-Live around here
  { month: 'Feb', manual: 40, automated: 95 },
  { month: 'Mar', manual: 25, automated: 105 },
];

const frictionData = [
  { issue: 'Duplicate data entry', count: 45, severity: 'high' },
  { issue: 'Approval wait time', count: 38, severity: 'high' },
  { issue: 'Search accuracy', count: 25, severity: 'medium' },
  { issue: 'Session timeouts', count: 18, severity: 'low' },
  { issue: 'Export format errors', count: 12, severity: 'low' }
];

const getSeverityColor = (severity) => {
  if (severity === 'high') return 'var(--danger)';
  if (severity === 'medium') return 'var(--warning)';
  return 'var(--success)';
};

const initiatives = [
  { name: 'Automate Invoice Intake OCR', owner: 'Sarah J.', status: 'On Track', kpi: 'Processing Time', value: '15% reduction', sprint: 'Sprint 42' },
  { name: 'SSO Integration for Vendor Portal', owner: 'Mike T.', status: 'Blocked', kpi: 'Adoption Rate', value: 'Pending Sec Rev', sprint: 'Sprint 41' },
  { name: 'Fuzzy Search Algorithm Update', owner: 'Elena R.', status: 'At Risk', kpi: 'Friction Reports', value: 'Testing Phase', sprint: 'Sprint 42' },
  { name: 'Bulk Action Approvals', owner: 'David W.', status: 'On Track', kpi: 'Manual Steps', value: '45 steps/day', sprint: 'Sprint 43' }
];

const StatusPill = ({ status }) => {
  let badgeClass = 'badge-success';
  if (status === 'Blocked') badgeClass = 'badge-danger';
  if (status === 'At Risk') badgeClass = 'badge-warning';
  
  return <span className={`badge ${badgeClass}`}>{status}</span>;
};

const OperationsHealthTab = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* KPI Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {kpis.map((kpi, idx) => (
          <div key={idx} className="card flex flex-col gap-2" style={kpi.status === 'warning' ? { borderLeft: '4px solid var(--warning)' } : { borderLeft: '4px solid var(--success)'}}>
            <h3 className="text-sm font-medium text-secondary">{kpi.title}</h3>
            <div className="text-3xl font-bold">{kpi.value}</div>
            <div className="flex items-center gap-1 text-sm mt-auto">
              {kpi.trend === 'up' ? (
                <ArrowUpRight size={16} style={{ color: kpi.status === 'warning' ? 'var(--warning)' : 'var(--success)' }} />
              ) : (
                <ArrowDownRight size={16} style={{ color: kpi.status === 'warning' ? 'var(--warning)' : 'var(--success)' }} />
              )}
              <span style={{ color: kpi.status === 'warning' ? 'var(--warning)' : 'var(--success)' }} className="font-medium">
                {kpi.percent}
              </span>
              <span className="text-xs text-muted ml-1">{kpi.info || "vs last month"}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card flex flex-col gap-4">
          <h3 className="font-semibold text-lg">Workflow Efficiency Trend</h3>
          <div style={{ height: 300, width: '100%' }}>
            <ResponsiveContainer>
              <LineChart data={efficiencyData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
                <XAxis dataKey="month" stroke="var(--text-secondary)" />
                <YAxis stroke="var(--text-secondary)" />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--bg-panel)', borderColor: 'var(--border-color)', borderRadius: 8 }}
                  itemStyle={{ color: 'var(--text-primary)' }}
                />
                <ReferenceLine x="Jan" stroke="var(--accent-color)" strokeDasharray="3 3" label={{ position: 'top', value: 'Modernization Go-Live', fill: 'var(--text-secondary)', fontSize: 12 }} />
                <Line type="monotone" dataKey="manual" name="Manual Processing Time" stroke="var(--danger)" strokeWidth={3} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="automated" name="Automated Processing Time" stroke="var(--success)" strokeWidth={3} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">Top Friction Points This Period</h3>
            <button className="text-xs btn-outline">Submit Feedback</button>
          </div>
          <div style={{ height: 300, width: '100%' }}>
            <ResponsiveContainer>
              <BarChart data={frictionData} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" horizontal={true} vertical={false} />
                <BarXAxis type="number" stroke="var(--text-secondary)" />
                <BarYAxis dataKey="issue" type="category" width={120} stroke="var(--text-secondary)" fontSize={12} tick={{ fill: 'var(--text-secondary)' }} />
                <Tooltip 
                  cursor={{fill: 'var(--bg-panel-hover)'}}
                  contentStyle={{ backgroundColor: 'var(--bg-panel)', borderColor: 'var(--border-color)', borderRadius: 8 }}
                />
                <Bar dataKey="count" radius={[0, 4, 4, 0]}>
                  {frictionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={getSeverityColor(entry.severity)} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Table Row */}
      <div className="card flex flex-col gap-4">
        <h3 className="font-semibold text-lg">Active Initiatives</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                <th className="pb-3 pt-2 px-4 font-semibold text-sm text-secondary">Initiative Name</th>
                <th className="pb-3 pt-2 px-4 font-semibold text-sm text-secondary">Owner</th>
                <th className="pb-3 pt-2 px-4 font-semibold text-sm text-secondary">Status</th>
                <th className="pb-3 pt-2 px-4 font-semibold text-sm text-secondary">Target KPI</th>
                <th className="pb-3 pt-2 px-4 font-semibold text-sm text-secondary">Current Value</th>
                <th className="pb-3 pt-2 px-4 font-semibold text-sm text-secondary">Sprint</th>
              </tr>
            </thead>
            <tbody>
              {initiatives.map((init, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid rgba(51, 65, 85, 0.5)' }} className="hover:bg-[var(--bg-panel-hover)] transition-colors">
                  <td className="py-3 px-4 font-medium">{init.name}</td>
                  <td className="py-3 px-4 text-secondary">{init.owner}</td>
                  <td className="py-3 px-4"><StatusPill status={init.status} /></td>
                  <td className="py-3 px-4 text-sm">{init.kpi}</td>
                  <td className="py-3 px-4 font-medium">{init.value}</td>
                  <td className="py-3 px-4 text-sm text-secondary">{init.sprint}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OperationsHealthTab;
