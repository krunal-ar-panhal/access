import React, { useEffect } from "react";

const Navbar = () => {


  useEffect(() => {
    // Tooltip
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
      new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Auto tab index set
    const tagsToTabIndex = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'img', 'table', 'thead', 'th', 'tbody', 'td', 'li'];
    tagsToTabIndex.forEach(tag => {
      const elements = document.querySelectorAll(tag);
      elements.forEach(element => {
        element.setAttribute('tabindex', '1');
      });
    });

    const focusableTags = ['a', 'button'];
    focusableTags.forEach(tag => {
      const elements = document.querySelectorAll(tag);
      elements.forEach(element => {
        element.setAttribute('tabindex', '0');
      });
    });

    // Font size adjustment functionality
    const increaseFontBtn = document.getElementById('increase-font');
    const decreaseFontBtn = document.getElementById('decrease-font');
    const resetFontBtn = document.getElementById('reset-settings');
    const toggleScreenReaderBtn = document.getElementById('toggle-screenreader');
    const modeIcon = document.getElementById('mode-icon');

    let currentFontSize = 16;
    let screenReaderEnabled = false;
    let darkModeEnabled = false; // Track the current mode

    function adjustFontSize(change) {
      const elements = document.querySelectorAll('*');
      currentFontSize += change;
      currentFontSize = Math.max(12, currentFontSize);

      elements.forEach((el) => {
        const computedStyle = window.getComputedStyle(el);
        const currentSize = parseFloat(computedStyle.fontSize);
        el.style.fontSize = `${currentSize + change}px`;
      });
    }

    // Event listeners for font size
    if (increaseFontBtn) {
      increaseFontBtn.addEventListener('click', () => adjustFontSize(2));
    }

    if (decreaseFontBtn) {
      decreaseFontBtn.addEventListener('click', () => adjustFontSize(-2));
    }

    if (resetFontBtn) {
      resetFontBtn.addEventListener('click', () => {
        const elements = document.querySelectorAll('*');
        currentFontSize = 16;
        elements.forEach((el) => {
          el.style.fontSize = '';
        });
        screenReaderEnabled = false;
        if (toggleScreenReaderBtn) {
          toggleScreenReaderBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
        }

        // Reset dark mode
        darkModeEnabled = false;
        document.body.classList.remove('dark-mode');
        modeIcon.classList.remove('rotate');
        document.querySelectorAll('.bg-light').forEach((section) => {
          section.classList.remove('bg-dark', 'text-light');
        });
        document.querySelectorAll('footer').forEach((footer) => {
          footer.classList.remove('bg-dark', 'text-light');
        });
        document.querySelectorAll('.navbar').forEach((nav) => {
          nav.classList.remove('navbar-dark', 'bg-dark');
        });
      });
    }

    // Toggle screen reader
    if (toggleScreenReaderBtn) {
      toggleScreenReaderBtn.addEventListener('click', () => {
        screenReaderEnabled = !screenReaderEnabled;
        if (toggleScreenReaderBtn) {
          toggleScreenReaderBtn.innerHTML = ` ${screenReaderEnabled
            ? '<i class="fa-solid fa-volume-off"></i>'
            : '<i class="fa-solid fa-volume-xmark"></i>'}`;
        }
      });
    }

    // Toggle dark mode when the icon is clicked
    if (modeIcon) {
      modeIcon.addEventListener('click', () => {
        darkModeEnabled = !darkModeEnabled;
        document.body.classList.toggle('dark-mode', darkModeEnabled);

        modeIcon.classList.toggle('rotate', darkModeEnabled);

        document.querySelectorAll('.bg-light').forEach((section) => {
          section.classList.toggle('bg-dark', darkModeEnabled);
          section.classList.toggle('text-light', darkModeEnabled);
        });

        document.querySelectorAll('footer').forEach((footer) => {
          footer.classList.toggle('bg-dark', darkModeEnabled);
          footer.classList.toggle('text-light', darkModeEnabled);
        });

        document.querySelectorAll('.navbar').forEach((nav) => {
          nav.classList.toggle('navbar-dark', darkModeEnabled);
          nav.classList.toggle('bg-dark', darkModeEnabled);
        });
      });
    }

    function speakText(text) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    }

    document.addEventListener('mouseup', () => {
      if (screenReaderEnabled) {
        const selectedText = window.getSelection().toString().trim();
        if (selectedText) {
          speakText(selectedText);
        }
      }
    });

    document.querySelectorAll('[tabindex="0"]').forEach((element) => {
      element.addEventListener('focus', () => {
        if (screenReaderEnabled) {
          speakText(element.textContent.trim());
        }
      });
    });

    document.querySelectorAll('button, a').forEach((element) => {
      element.addEventListener('focus', () => {
        if (screenReaderEnabled) {
          speakText(element.textContent.trim());
        }
      });
    });

    document.querySelectorAll('.dropdown-submenu').forEach(function (submenu) {
      submenu.addEventListener('mouseover', function () {
        const dropdownMenu = submenu.querySelector('.dropdown-menu');
        dropdownMenu.classList.add('show');
      });

      submenu.addEventListener('mouseout', function () {
        const dropdownMenu = submenu.querySelector('.dropdown-menu');
        dropdownMenu.classList.remove('show');
      });
    });
  }, []);



  return (
    <>
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
              >
                A+
              </button>
              <button
                type="button"
                className="font-size-btn btn-sm btn btn-outline-light"
                id="decrease-font"
                aria-label="Decrease font size"
              >
                A-
              </button>

              <button
                type="button"
                className="btn btn-sm btn-outline-light"
                id="reset-settings"
                aria-label="Reset accessibility settings"
              >
                <i
                  className="fa-solid fa-arrow-rotate-right pt-1"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
