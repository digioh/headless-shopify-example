# Digioh React Integration - Inline Method

This example demonstrates how to integrate Digioh into a React/Next.js application using the inline HTML method.

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

In this Next.js example, we've added the script to `app/layout.tsx` using Next.js's `Script` component:

```jsx
import Script from "next/script";

// In the head section:
<Script
  src="https://www.lightboxcdn.com/vendor/YOUR-ID/lightbox_speed.js"
  strategy="afterInteractive"
/>
```

This ensures the script loads on every page of your application.

### Step 3: Get the Smart Tag HTML

1. Go to your campaign settings in Digioh
2. Copy the Digioh Smart Tag HTML code
3. It will look something like this:
   ```html
   <div class="digioh_universal_smart_tag" style="text-align: center;">
     <!-- placeholder content -->
   </div>
   ```

### Step 4: Add Smart Tag to Your Page

You have three options for adding the Smart Tag to your React component:

#### Method 1: Using dangerouslySetInnerHTML (Complete with Loader)

This method allows you to paste the HTML exactly as provided by Digioh:

```jsx
export default function Home() {
  const digiohSmartTag = `[YOUR SMART TAG HTML HERE]`;

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Digioh React Next Test Page</h1>
      <div dangerouslySetInnerHTML={{ __html: digiohSmartTag }} />
    </div>
  );
}
```

**Pros:**
- Quick and easy - just paste the HTML as-is
- Includes the loading placeholder
- No need to convert HTML attributes to JSX

**Cons:**
- Uses `dangerouslySetInnerHTML` which bypasses React's XSS protection

#### Method 2: Simple JSX (Minimal)

The simplest JSX approach - just add the div with the class name:

```jsx
export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Digioh React Next Test Page</h1>

      <div className="digioh_universal_smart_tag"></div>
    </div>
  );
}
```

**Pros:**
- Very simple and clean
- No `dangerouslySetInnerHTML` needed
- Digioh script will find and populate this div

**Cons:**
- No loading placeholder while Digioh initializes
- May show empty space briefly

#### Method 3: Full JSX Version (Complete with Loader)

This method converts the entire HTML to proper JSX with React attributes:

```jsx
export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Digioh React Next Test Page</h1>

      <div
        className="digioh_universal_smart_tag"
        style={{ textAlign: "center" }}
      >
        <div
          className="box_loading_placeholder"
          style={{
            position: "relative",
            textAlign: "center",
            borderStyle: "none",
            borderWidth: 0,
            backgroundColor: "#fff",
            height: 750,
            width: "100%"
          }}
        >
          <div
            className="box_loading_placeholder_overlay"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(255, 255, 255, 0.25)"
            }}
          />
          <div
            style={{
              width: "100%",
              fontFamily: "Montserrat, sans-serif",
              fontSize: 18,
              lineHeight: "28px",
              color: "#222525",
              position: "relative",
              top: "50%",
              transform: "translateY(-50%)"
            }}
          >
            <img
              className="box_loading_placeholder_image"
              src="https://www.lightboxcdn.com/static/Digioh_Loading_Spinner_Black.gif"
              style={{
                margin: "0 auto",
                maxHeight: "100%",
                maxWidth: "100%",
                width: 125
              }}
              alt="Loading..."
            />
            <p>
              <a
                href="https://www.digioh.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "inherit",
                  textDecoration: "none"
                }}
              >
                Product Recommendation Quiz
              </a>
              <br />
              <strong>Powered by Digioh</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
```

**Pros:**
- Safest - no `dangerouslySetInnerHTML` needed
- Includes the loading placeholder
- Better integration with React's rendering system
- Type-safe if using TypeScript

**Cons:**
- Requires converting HTML attributes (e.g., `class` → `className`)
- Inline styles need to be converted to JavaScript objects
- Most work to set up initially

## Which Method Should You Choose?

- **Use Method 1** if you want a quick integration with the full loading experience
- **Use Method 2** if you want the simplest React code and don't need a loading placeholder
- **Use Method 3** if you prefer to avoid `dangerouslySetInnerHTML` but want the complete loading experience

All three methods are demonstrated in `app/page.tsx` - Method 1 is active by default, and Methods 2 and 3 are included as commented examples.

## Running the Example

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to see the Digioh widget in action.