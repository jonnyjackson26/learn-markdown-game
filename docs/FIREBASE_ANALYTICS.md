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

## Tutorial Progress Tracking

The application tracks user progress through the tutorial with the following events:

### 1. Level Completion Events

Each time a user completes a level, the following event is triggered:

```javascript
trackEvent("level_completed", {
  level_number: level, // The level that was completed
  level_name: level_info[level]?.title || `Level ${level}`, // Human-readable level name
  time_spent: timeInSeconds, // Time spent on this level in seconds
});
```

### 2. Milestone Level Events

To track significant progress points, milestone events are triggered at specific levels (1, 5, 10, 15, etc.):

```javascript
trackEvent("milestone_level_reached", {
  level_number: level,
  total_levels: totalLevels,
  progress_percentage: percentage, // Progress as a percentage
});
```

### 3. Tutorial Completion Event

When a user reaches the final level:

```javascript
trackEvent("tutorial_completed", {
  time_to_complete: totalTimeInSeconds, // Total time from start to finish
});
```

### 4. Analyzing Tutorial Funnel

A sample query to analyze the tutorial funnel (which levels users drop off at):

```sql
SELECT
  event_params.value.int_value AS level_number,
  COUNT(DISTINCT user_pseudo_id) AS user_count
FROM
  `your-project-id.analytics_XXXXXX.events_*`,
  UNNEST(event_params) AS event_params
WHERE
  event_name = 'level_completed'
  AND event_params.key = 'level_number'
GROUP BY
  level_number
ORDER BY
  level_number ASC
```

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
4. **Milestone Levels** - Key levels that indicate significant progress
5. **Tutorial Completion** - When a user completes the entire tutorial
6. **Button Clicks** - Various button interactions throughout the application

## Privacy Considerations

- User data is anonymized by default
- No personally identifiable information (PII) is collected
- Analytics is only initialized in production environments
- Users are informed about data collection in the privacy policy
