import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView, trackEvent, trackAction } from '../utils/analytics';

/**
 * Custom hook for using Firebase Analytics in React components
 * @returns {Object} Analytics utility functions
 */
export const useAnalytics = () => {
  const location = useLocation();
  
  // Track page views automatically when location changes
  useEffect(() => {
    // Extract the page name from the pathname
    const pageName = location.pathname.split('/').pop() || 'home';
    trackPageView(pageName);
  }, [location]);
  
  return {
    trackEvent,
    trackAction,
    trackPageView
  };
}; 