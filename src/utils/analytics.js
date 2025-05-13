import { logEvent } from 'firebase/analytics';
import { analytics } from '../firebase';

/**
 * Log an analytics event
 * @param {string} eventName - Name of the event to log
 * @param {Object} [eventParams={}] - Optional parameters for the event
 * @returns {boolean} - Whether the event was logged successfully
 */
export const trackEvent = (eventName, eventParams = {}) => {
  try {
    if (analytics) {
      logEvent(analytics, eventName, eventParams);
      return true;
    } else {
      console.warn('Analytics not initialized, event not tracked:', eventName);
      return false;
    }
  } catch (error) {
    console.error('Failed to track event:', error);
    return false;
  }
};

/**
 * Log a page view event
 * @param {string} pageName - Name of the page being viewed
 * @param {Object} [additionalParams={}] - Optional additional parameters
 */
export const trackPageView = (pageName, additionalParams = {}) => {
  trackEvent('page_view', {
    page_title: pageName,
    page_location: window.location.href,
    page_path: window.location.pathname,
    ...additionalParams
  });
};

/**
 * Track a user action
 * @param {string} actionName - Name of the action (e.g., 'button_click', 'form_submit')
 * @param {Object} [additionalParams={}] - Optional additional parameters
 */
export const trackAction = (actionName, additionalParams = {}) => {
  trackEvent(actionName, additionalParams);
}; 