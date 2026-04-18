import React, { useState, useEffect } from 'react';
import { Download, LayoutDashboard, LineChart, Map, Megaphone, Clock } from 'lucide-react';
import OperationsHealthTab from './components/OperationsHealthTab';
import AdoptionMetricsTab from './components/AdoptionMetricsTab';
import RoadmapStatusTab from './components/RoadmapStatusTab';

const App = () => {
  const [activeTab, setActiveTab] = useState('operations');
  const [role, setRole] = useState('PM');
  const [lastRefreshed, setLastRefreshed] = useState('');

  useEffect(() => {
    const now = new Date();
    setLastRefreshed(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  }, []);

  const tabs = [
    { id: 'operations', label: 'Operations Health', icon: LayoutDashboard },
    { id: 'adoption', label: 'Adoption Metrics', icon: LineChart },
    { id: 'roadmap', label: 'Roadmap Status', icon: Map },
  ];

  const recentQuotes = [
    "The new search is a lifesaver, but approval wait times are still killing my flow.",
    "Data entry is so much faster now. Love the automation.",
    "Can we get a clearer view of what's blocking my requests?"
  ];
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % recentQuotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-primary)' }}>
      {/* Top Navigation */}
      <header className="flex items-center justify-between p-4" style={{ backgroundColor: 'var(--bg-panel)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="flex items-center gap-6">
          <div className="font-bold text-xl flex items-center gap-2">
            <div style={{ width: 24, height: 24, background: 'var(--accent-color)', borderRadius: 4 }}></div>
            Granicus
          </div>
          
          <nav className="flex gap-1" style={{ backgroundColor: 'var(--bg-color)', padding: 4, borderRadius: 8 }}>
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors`}
                style={{
                  backgroundColor: activeTab === tab.id ? 'var(--bg-panel)' : 'transparent',
                  color: activeTab === tab.id ? 'var(--text-primary)' : 'var(--text-secondary)'
                }}
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-secondary">View As:</span>
            <select 
              value={role} 
              onChange={e => setRole(e.target.value)}
              className="bg-transparent border border-gray-600 rounded p-1 text-sm text-white"
              style={{ borderColor: 'var(--border-color)' }}
            >
              <option value="Executive">Executive</option>
              <option value="PM">PM</option>
              <option value="Dev Team">Dev Team</option>
            </select>
          </div>

          <select className="bg-transparent border border-gray-600 rounded p-1 text-sm text-white" style={{ borderColor: 'var(--border-color)' }}>
            <option>Last 30 Days</option>
            <option>Last Quarter</option>
            <option>Year to Date</option>
          </select>

          <button className="btn-outline flex items-center gap-2 text-sm">
            <Download size={16} />
            Export for Stakeholders
          </button>
        </div>
      </header>

      {/* Voice of Customer Ticker */}
      <div className="flex items-center gap-3 px-6 py-2 text-sm" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', borderBottom: '1px solid var(--border-color)' }}>
        <Megaphone size={16} style={{ color: 'var(--accent-color)' }} />
        <span className="font-semibold" style={{ color: 'var(--accent-color)' }}>Voice of the Customer:</span>
        <span className="italic">"{recentQuotes[quoteIndex]}"</span>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 p-6 overflow-auto">
        {activeTab === 'operations' && <OperationsHealthTab />}
        {activeTab === 'adoption' && <AdoptionMetricsTab />}
        {activeTab === 'roadmap' && <RoadmapStatusTab />}
      </main>

      {/* Footer / Meta */}
      <footer className="p-4 flex justify-end text-xs text-secondary border-t" style={{ borderColor: 'var(--border-color)' }}>
        <div className="flex items-center gap-1">
          <Clock size={14} />
          Last Refreshed: {lastRefreshed}
        </div>
      </footer>
    </div>
  );
};

export default App;
