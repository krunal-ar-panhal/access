import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [currentFontSize, setCurrentFontSize] = useState(16);
  const [screenReaderEnabled, setScreenReaderEnabled] = useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  // Adjust font size
  const adjustFontSize = (change) => {
    setCurrentFontSize((prevSize) => Math.max(12, prevSize + change));
  };

  // Reset settings
  const resetSettings = () => {
    setCurrentFontSize(16);
    setScreenReaderEnabled(false);
    setDarkModeEnabled(false);
    document.body.style.fontSize = "";
  };

  // Speak selected text
  const speakText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  // Toggle screen reader
  const toggleScreenReader = () => {
    setScreenReaderEnabled((prev) => !prev);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkModeEnabled((prev) => !prev);
  };

  useEffect(() => {
    // Apply font size change to all elements
    document.querySelectorAll("*").forEach((el) => {
      el.style.fontSize = `${currentFontSize}px`;
    });

    // Add dark mode classes dynamically
    document.body.classList.toggle("dark-mode", darkModeEnabled);
  }, [currentFontSize, darkModeEnabled]);

  useEffect(() => {
    // Screen reader functionality
    if (screenReaderEnabled) {
      const handleMouseUp = () => {
        const selectedText = window.getSelection().toString().trim();
        if (selectedText) {
          speakText(selectedText);
        }
      };

      const handleFocus = (event) => {
        speakText(event.target.textContent.trim());
      };

      document.addEventListener("mouseup", handleMouseUp);
      document.querySelectorAll("button, a").forEach((el) =>
        el.addEventListener("focus", handleFocus)
      );

      return () => {
        document.removeEventListener("mouseup", handleMouseUp);
        document.querySelectorAll("button, a").forEach((el) =>
          el.removeEventListener("focus", handleFocus)
        );
      };
    }
  }, [screenReaderEnabled]);

  return (
    <div
      className="accessibility-bar"
      role="navigation"
      aria-label="Accessibility Bar"
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left: Contact Information */}
          <div className="col-md-6 d-none d-md-flex mr-auto"></div>
          {/* Right: Accessibility Tools */}
          <div className="col-md-6 d-flex justify-content-center justify-content-md-end">
            <button
              type="button"
              className="font-size-btn btn-sm btn btn-outline-light"
              id="increase-font"
              aria-label="Increase font size"
              onClick={() => adjustFontSize(2)}
            >
              A+
            </button>
            <button
              type="button"
              className="font-size-btn btn-sm btn btn-outline-light"
              id="decrease-font"
              aria-label="Decrease font size"
              onClick={() => adjustFontSize(-2)}
            >
              A-
            </button>
            <button
              type="button"
              className="btn btn-sm btn-outline-light"
              id="reset-settings"
              aria-label="Reset accessibility settings"
              onClick={resetSettings}
            >
              <i
                className="fa-solid fa-arrow-rotate-right pt-1"
                aria-hidden="true"
              />
            </button>
            {/* <button
              type="button"
              className="btn btn-sm btn-outline-light"
              id="toggle-screenreader"
              aria-label="Toggle screen reader"
              onClick={toggleScreenReader}
            >
              {screenReaderEnabled ? (
                <i className="fa-solid fa-volume-off"></i>
              ) : (
                <i className="fa-solid fa-volume-xmark"></i>
              )}
            </button> */}
            {/* <button
              type="button"
              className="btn btn-sm btn-outline-light"
              id="mode-icon"
              aria-label="Toggle dark mode"
              onClick={toggleDarkMode}
            >
              <i
                className={`fa-solid ${
                  darkModeEnabled ? "rotate" : ""
                } fa-moon`}
              ></i>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
