import React from 'react';

const RoadmapStatusTab = () => {
  return (
    <div className="flex gap-6" style={{ filter: 'grayscale(0.8)' }}>
      {/* Main Timeline */}
      <div className="flex-1 flex flex-col gap-6">
        <div className="text-xs font-mono text-secondary mb-2 border-b border-dashed border-gray-600 pb-2">
          // WIREFRAME VIEW: Operational Roadmap Concept
        </div>
        
        <div className="card flex flex-col gap-6 border-dashed" style={{ borderColor: 'var(--text-muted)' }}>
          <div className="flex justify-between items-center text-sm font-mono font-bold text-gray-400 border-b border-gray-700 pb-2">
            <div className="flex-1">Q2 (Current)</div>
            <div className="flex-1 border-l border-gray-700 pl-4">Q3 (Upcoming)</div>
          </div>
          
          <div className="relative pt-4 pb-8 border-l border-gray-700 ml-4 pl-4 flex flex-col gap-6">
            
            {/* Item 1 */}
            <div className="relative">
              <div className="absolute -left-[21px] top-2 w-2 h-2 bg-gray-400 rounded-full"></div>
              <div className="bg-gray-600 p-3 rounded-md w-3/4 shadow-sm border border-gray-500">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-gray-100 text-sm">Automate Invoice Intake OCR</h4>
                  <span className="text-xs bg-gray-500 text-gray-100 px-2 py-1 rounded">Completed</span>
                </div>
                <p className="text-xs text-gray-300 mt-2">Delivered 2 weeks early. Monitoring error rates.</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="relative">
              <div className="absolute -left-[21px] top-2 w-2 h-2 bg-yellow-500 rounded-full" style={{ boxShadow: '0 0 8px rgba(234,179,8,0.5)' }}></div>
              <div className="bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.05)_10px,rgba(255,255,255,0.05)_20px)] bg-gray-700 p-3 rounded-md w-full shadow-sm border border-gray-600">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-gray-100 text-sm flex items-center gap-2">
                    SSO Integration for Vendor Portal
                    <span className="text-xs bg-red-900/50 text-red-400 border border-red-700/50 px-1 rounded">BLOCKED</span>
                  </h4>
                  <span className="text-xs bg-gray-600 text-gray-200 px-2 py-1 rounded">In Progress</span>
                </div>
                <div className="absolute -bottom-6 left-1/4 transform -translate-x-1/2 flex items-center flex-col text-yellow-500">
                  <div className="w-3 h-3 rotate-45 border-2 border-yellow-500 bg-gray-800"></div>
                  <span className="text-[10px] mt-1 whitespace-nowrap">Security Review Milestone</span>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="relative mt-8">
              <div className="absolute -left-[21px] top-2 w-2 h-2 border-2 border-gray-500 rounded-full bg-gray-800"></div>
              <div className="border border-dashed border-gray-500 bg-gray-800/50 p-3 rounded-md w-2/3 ml-[30%] shadow-sm">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-gray-300 text-sm">Bulk Action Approvals</h4>
                  <span className="text-xs border border-gray-600 text-gray-400 px-2 py-1 rounded">Upcoming</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* Sticky Blockers Sidebar */}
      <div className="w-72 flex flex-col gap-4 sticky top-6 self-start">
        <div className="card flex flex-col gap-3 border border-red-900/50 bg-red-950/20">
          <h3 className="font-bold text-sm text-red-400 uppercase tracking-wider flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
            Escalation Path: Blockers
          </h3>
          
          <div className="flex flex-col gap-3">
            <div className="p-2 bg-gray-800/80 rounded border border-gray-700 text-xs">
              <div className="font-semibold text-gray-200 mb-1">SSO Security Review</div>
              <p className="text-gray-400 mb-2">Pending sign-off from InfoSec team on token rotation policy.</p>
              <div className="flex items-center gap-2">
                <span className="bg-gray-700 px-1.5 py-0.5 rounded text-[10px] text-gray-300">Owner: Mike T.</span>
                <span className="bg-red-900/50 text-red-400 px-1.5 py-0.5 rounded text-[10px] border border-red-800/50">Age: 4 days</span>
              </div>
            </div>

            <div className="p-2 bg-gray-800/80 rounded border border-gray-700 text-xs">
              <div className="font-semibold text-gray-200 mb-1">Legacy DB Dependency</div>
              <p className="text-gray-400 mb-2">Fuzzy search algorithm needs index rebuild on cluster B.</p>
              <div className="flex items-center gap-2">
                <span className="bg-gray-700 px-1.5 py-0.5 rounded text-[10px] text-gray-300">Owner: DevOps</span>
              </div>
            </div>
            
             <div className="p-2 bg-gray-800/80 rounded border border-gray-700 text-xs">
              <div className="font-semibold text-gray-200 mb-1">API Rate Limit Increase</div>
              <p className="text-gray-400 mb-2">Awaiting partner approval for higher limits on Vendor Sync.</p>
              <div className="flex items-center gap-2">
                <span className="bg-gray-700 px-1.5 py-0.5 rounded text-[10px] text-gray-300">Owner: Partner Eng</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapStatusTab;
