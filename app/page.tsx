export default function Home() {
  const digiohSmartTag = `<div class="digioh_universal_smart_tag" style="text-align: center;"><div class="box_loading_placeholder" style="position: relative; text-align: center;border-style: none;border-width: 0px;background-color: #fff;height: 750px;width: 100%;"><div class="box_loading_placeholder_overlay" style="position: absolute;top: 0;left: 0;width: 100%;height: 100%; background: rgba(255, 255, 255, 0.25);"></div><div style="width: 100%; font-family: Montserrat, sans-serif; font-size: 18px; line-height: 28px; color: #222525; position: relative; top: 50%; transform: translateY(-50%);"><img class="box_loading_placeholder_image" src="https://www.lightboxcdn.com/static/Digioh_Loading_Spinner_Black.gif" style="margin: 0 auto; max-height: 100%; max-width: 100%;width: 125px;" alt="Loading..."><p><a href='https://www.digioh.com/' target='_blank' style='color: inherit; text-decoration: none;'>Product Recommendation Quiz</a><br/><strong>Powered by Digioh</strong></p></div></div></div>`;

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Digioh React Next Test Page</h1>

      {/* Method 1: Using dangerouslySetInnerHTML (easier - paste HTML as-is) */}
      <div dangerouslySetInnerHTML={{ __html: digiohSmartTag }} />

      {/* Method 2: Simple div with class (minimal - no loader) */}
      {/* Uncomment below to use the minimal version */}
      {/*
      <div className="digioh_universal_smart_tag"></div>
      */}

      {/* Method 3: Full JSX version (complete - with loader) */}
      {/* Uncomment below to use the full JSX version */}
      {/*
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
      */}
    </div>
  );
}