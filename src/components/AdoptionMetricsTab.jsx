import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

const adoptionData = [
  { week: 'W1', new: 400, returning: 0 },
  { week: 'W2', new: 300, returning: 100 },
  { week: 'W3', new: 200, returning: 250 },
  { week: 'W4', new: 278, returning: 390 },
  { week: 'W5', new: 189, returning: 480 },
  { week: 'W6', new: 450, returning: 550 }, // Training launched
  { week: 'W7', new: 349, returning: 700 },
  { week: 'W8', new: 200, returning: 950 },
];

const AdoptionMetricsTab = () => {
  return (
    <div className="flex flex-col gap-6" style={{ filter: 'grayscale(0.8)' }}>
      {/* Wireframe Style Notice */}
      <div className="text-xs font-mono text-secondary mb-2 border-b border-dashed border-gray-600 pb-2">
        // WIREFRAME VIEW: Adoption Tracking Layout Concept
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Funnel */}
        <div className="card flex flex-col gap-4 border-dashed" style={{ borderColor: 'var(--text-muted)' }}>
          <h3 className="font-semibold text-lg font-mono text-gray-300">Tool Adoption Funnel</h3>
          <div className="flex flex-col gap-2 flex-1 justify-center">
            <div className="bg-gray-700 text-center py-3 rounded mx-4 text-sm font-medium">Invited (2,400)</div>
            <div className="w-1 bg-gray-600 h-4 mx-auto"></div>
            <div className="bg-gray-600 text-center py-3 rounded mx-8 text-sm font-medium">Activated (1,850)</div>
            <div className="w-1 bg-gray-500 h-4 mx-auto"></div>
            <div className="bg-gray-500 text-center py-3 rounded mx-12 text-sm font-medium">Weekly Active (980)</div>
            <div className="w-1 bg-gray-400 h-4 mx-auto"></div>
            <div className="bg-gray-400 text-gray-900 text-center py-3 rounded mx-20 text-sm font-medium">Power User (210)</div>
          </div>
        </div>

        {/* Heatmap */}
        <div className="card flex flex-col gap-4 border-dashed" style={{ borderColor: 'var(--text-muted)' }}>
          <h3 className="font-semibold text-lg font-mono text-gray-300">Feature Usage Heatmap</h3>
          <div className="overflow-x-auto mt-2">
            <table className="w-full text-center text-xs font-mono">
              <thead>
                <tr>
                  <th className="p-2 text-left text-gray-400">Role</th>
                  <th className="p-2 text-gray-400">Search</th>
                  <th className="p-2 text-gray-400">Export</th>
                  <th className="p-2 text-gray-400">Approval</th>
                  <th className="p-2 text-gray-400">Settings</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 text-left font-medium">Underwriter</td>
                  <td className="p-2"><div className="w-full h-8 bg-gray-300 rounded"></div></td>
                  <td className="p-2"><div className="w-full h-8 bg-gray-400 rounded"></div></td>
                  <td className="p-2"><div className="w-full h-8 bg-gray-800 border border-red-500/50 rounded" title="Friction Signal"></div></td>
                  <td className="p-2"><div className="w-full h-8 bg-gray-700 rounded"></div></td>
                </tr>
                <tr>
                  <td className="p-2 text-left font-medium">Analyst</td>
                  <td className="p-2"><div className="w-full h-8 bg-gray-400 rounded"></div></td>
                  <td className="p-2"><div className="w-full h-8 bg-gray-300 rounded"></div></td>
                  <td className="p-2"><div className="w-full h-8 bg-gray-900 rounded"></div></td>
                  <td className="p-2"><div className="w-full h-8 bg-gray-800 rounded"></div></td>
                </tr>
                <tr>
                  <td className="p-2 text-left font-medium">Manager</td>
                  <td className="p-2"><div className="w-full h-8 bg-gray-700 rounded"></div></td>
                  <td className="p-2"><div className="w-full h-8 bg-gray-600 rounded"></div></td>
                  <td className="p-2"><div className="w-full h-8 bg-gray-300 rounded"></div></td>
                  <td className="p-2"><div className="w-full h-8 bg-gray-600 rounded"></div></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Area Chart */}
      <div className="card flex flex-col gap-4 border-dashed" style={{ borderColor: 'var(--text-muted)' }}>
        <h3 className="font-semibold text-lg font-mono text-gray-300">Adoption Over Time</h3>
        <div style={{ height: 300, width: '100%' }}>
          <ResponsiveContainer>
            <AreaChart data={adoptionData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#4b5563" vertical={false} />
              <XAxis dataKey="week" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151' }} />
              <ReferenceLine x="W6" stroke="#fbbf24" strokeDasharray="3 3" label={{ position: 'top', value: 'Training Initiative Launched', fill: '#fbbf24', fontSize: 12 }} />
              <Area type="monotone" dataKey="returning" stackId="1" stroke="#4b5563" fill="#374151" name="Returning Users" />
              <Area type="monotone" dataKey="new" stackId="1" stroke="#9ca3af" fill="#6b7280" name="New Users" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdoptionMetricsTab;
