import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "../../utils/analytics";

/**
 * A higher-order component that adds analytics tracking to a page component
 * @param {React.ComponentType} WrappedComponent - The component to wrap
 * @param {string} pageName - Optional custom page name. Defaults to the path from the URL
 * @returns {React.ComponentType} - The wrapped component with analytics tracking
 */
const WithAnalytics = (WrappedComponent, pageName = null) => {
  const WithAnalyticsComponent = (props) => {
    const location = useLocation();

    useEffect(() => {
      // Use the provided pageName or extract it from the URL
      const name = pageName || location.pathname.split('/').pop() || 'home';
      
      // Track page view when component mounts
      trackPageView(name);
    }, [location]);

    return <WrappedComponent {...props} />;
  };

  // Display name for the HOC (useful for debugging)
  WithAnalyticsComponent.displayName = `WithAnalytics(${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`;

  return WithAnalyticsComponent;
};

export default WithAnalytics; 