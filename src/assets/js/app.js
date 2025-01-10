document.addEventListener("DOMContentLoaded", function () {

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

  // Function to adjust font size globally
  function adjustFontSize(change) {
    const elements = document.querySelectorAll('*'); // Select all elements on the page
    currentFontSize += change;
    currentFontSize = Math.max(12, currentFontSize); // Ensure minimum font size is 12px

    elements.forEach((el) => {
      const computedStyle = window.getComputedStyle(el);
      const currentSize = parseFloat(computedStyle.fontSize);
      el.style.fontSize = `${currentSize + change}px`;
    });
  }

  // Increase font size
  if (increaseFontBtn) {
    increaseFontBtn.addEventListener('click', () => {
      adjustFontSize(2);
    });
  }

  // Decrease font size
  if (decreaseFontBtn) {
    decreaseFontBtn.addEventListener('click', () => {
      adjustFontSize(-2);
    });
  }

  // Reset settings (including font size)
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

      // Apply rotation effect for toggle button dark mood and light mood
      modeIcon.classList.toggle('rotate', darkModeEnabled);

      // Apply dark mode to specific sections
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

  // Screen Reader functionality
  function speakText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  }

  // Read selected text on mouseup
  document.addEventListener('mouseup', () => {
    if (screenReaderEnabled) {
      const selectedText = window.getSelection().toString().trim();
      if (selectedText) {
        speakText(selectedText);
      }
    }
  });

  // Focus event for elements with tabindex="0" (auto-read when tabbed to)
  document.querySelectorAll('[tabindex="0"]').forEach((element) => {
    element.addEventListener('focus', () => {
      if (screenReaderEnabled) {
        speakText(element.textContent.trim());
      }
    });
  });

  // Also, add focus event for links and buttons
  document.querySelectorAll('button, a').forEach((element) => {
    element.addEventListener('focus', () => {
      if (screenReaderEnabled) {
        speakText(element.textContent.trim());
      }
    });
  });

  // Submenu dropdown
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

});
