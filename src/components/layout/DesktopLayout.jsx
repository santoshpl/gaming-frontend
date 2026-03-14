import React, { useState } from 'react';
import DesktopHeader from '../header/DesktopHeader';
import Sidebar from '../Sidebar';

export default function DesktopLayout({ children }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-[#0F1E2E] text-white selection:bg-[#00FF87] selection:text-[#0F1E2E] flex flex-col">
      <DesktopHeader onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} />

      <div className="flex flex-1">
        <Sidebar isCollapsed={sidebarCollapsed} />

        <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
          <div className="h-20" aria-hidden="true"></div>
          <div className="flex-1 w-full px-8 lg:px-12 py-12 max-w-[1600px] mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
