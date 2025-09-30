# Digioh React Integration - Popup Method

This example demonstrates how to trigger a Digioh popup from a button click in a React/Next.js application.

## Setup Instructions

### Step 1: Get the Digioh Script

1. Log into your Digioh account
2. Navigate to **Your Name Menu > Setup Instructions**
3. Copy the script tag that looks like this:
   ```html
   <!--START Digioh Low Impact Javascript-->
   <script async type='text/javascript' src='https://www.lightboxcdn.com/vendor/YOUR-ID/lightbox_speed.js'></script>
   <!--END Digioh Low Impact Javascript-->
   ```

### Step 2: Add Script to Your Application

In `app/layout.tsx`, add the script using Next.js's `Script` component:

```jsx
import Script from "next/script";

// In the head section:
<Script
  src="https://www.lightboxcdn.com/vendor/YOUR-ID/lightbox_speed.js"
  strategy="afterInteractive"
/>
```

### Step 3: Configure Your Digioh Campaign

1. Go to your campaign settings in Digioh
2. Navigate to **Campaign Conditions**
3. Set up the trigger condition:
   - Select: **Click jQuery**
   - Operator: **equals**
   - Value: `.openDigiohPopup` (with the dot for jQuery selector)
4. Save your campaign settings

### Step 4: Add the Trigger Button

In your React component, add a button with the `openDigiohPopup` class:

```jsx
export default function Home() {
  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center gap-8">
      <h1 className="text-3xl font-bold text-center">Digioh React Next Test Page</h1>

      <button className="openDigiohPopup px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
        Open Digioh Popup
      </button>
    </div>
  );
}
```

## How It Works

1. The Digioh script loads on page load
2. Digioh monitors the DOM for elements with the class `openDigiohPopup`
3. When a user clicks the button, Digioh detects the click event
4. The popup campaign configured in Digioh is triggered and displayed

## Important Notes

- The class name must match exactly what you configure in the Digioh platform
- You can use any class name you want, just ensure it matches in both places
- Multiple buttons can share the same class to trigger the same popup
- You can have different classes for different popups

## Alternative Trigger Methods

You can also configure Digioh campaigns to trigger based on:
- Time on page
- Scroll percentage
- Exit intent
- Page views
- Custom JavaScript events

## Running the Example

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` and click the "Open Digioh Popup" button to see the popup in action.