import React from 'react';
import { useIsMobile } from '../hooks/useMediaQuery';
import MobileHome from './home/MobileHome';
import DesktopHome from './home/DesktopHome';

export default function Home() {
  const isMobile = useIsMobile();
  
  return isMobile ? <MobileHome /> : <DesktopHome />;
}
