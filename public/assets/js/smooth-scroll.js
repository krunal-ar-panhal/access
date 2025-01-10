// Modern Smooth Scroll Implementation
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('a[href^="#"]'); // Target anchor links
  
    links.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth", // Smooth scrolling
          });
        }
      });
    });
  });
  