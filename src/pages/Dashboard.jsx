import React from 'react';
import { useIsMobile } from '../hooks/useMediaQuery';
import MobileDashboard from './dashboard/MobileDashboard';
import DesktopDashboard from './dashboard/DesktopDashboard';

export default function Dashboard() {
  const isMobile = useIsMobile();
  
  return isMobile ? <MobileDashboard /> : <DesktopDashboard />;
}
