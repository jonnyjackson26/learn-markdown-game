# Firebase Analytics Implementation Guide

This document explains how Firebase Analytics is implemented in this project.

## Overview

Firebase Analytics is used to track user interactions and page views in the application. The configuration is stored securely in environment variables, and a set of utility functions are provided for easy integration in components.

## Setup

1. Firebase configuration is stored in `.env` file which is not committed to the repository
2. An example configuration file (`.env.example`) is provided as a template
3. The Firebase initialization happens in `src/firebase.js`

## Implementation Details

### Core Files

- `src/firebase.js` - Firebase initialization and configuration
- `src/utils/analytics.js` - Utility functions for tracking events
- `src/hooks/useAnalytics.js` - React hook for using analytics in components
- `src/components/WithAnalytics/WithAnalytics.jsx` - Higher-order component for tracking page views

### Analytics Tracking Methods

1. **Page Views** - Automatically tracked using the `useAnalytics` hook in page components
2. **User Actions** - Tracked using the `trackAction` function
3. **Custom Events** - Tracked using the `trackEvent` function

## Usage Examples

### Basic Usage with Hook

```jsx
import { useAnalytics } from "../hooks/useAnalytics";

function MyComponent() {
  const { trackAction, trackEvent } = useAnalytics();

  const handleClick = () => {
    trackAction("button_click", { button_name: "submit" });
    // other logic
  };

  return <button onClick={handleClick}>Submit</button>;
}
```

### Using Higher-Order Component

```jsx
import WithAnalytics from "../components/WithAnalytics/WithAnalytics";

function AboutPage() {
  return (
    <div>
      <h1>About Us</h1>
      {/* page content */}
    </div>
  );
}

export default WithAnalytics(AboutPage, "about_page");
```

## Events Being Tracked

The following events are currently tracked in the application:

1. **Page Views** - Every time a user navigates to a different page
2. **Game Start** - When a user clicks the Play button on the home page
3. **Level Completion** - When a user completes a level in the tutorial
4. **Button Clicks** - Various button interactions throughout the application

## Privacy Considerations

- User data is anonymized by default
- No personally identifiable information (PII) is collected
- Analytics is only initialized in production environments
- Users are informed about data collection in the privacy policy
