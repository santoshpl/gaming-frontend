import { useLocation } from 'react-router-dom';
import { useIsMobile } from '../hooks/useMediaQuery';
import MobileLayout from './layout/MobileLayout';
import DesktopLayout from './layout/DesktopLayout';

export default function AppLayout({ children }) {
  const isMobile = useIsMobile();
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  if (isLoginPage) {
    return (
      <div className="min-h-screen bg-[#0F1E2E]">
        {children}
      </div>
    );
  }

  if (isMobile) {
    return <MobileLayout>{children}</MobileLayout>;
  }

  return <DesktopLayout>{children}</DesktopLayout>;
}
