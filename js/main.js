// Promo Code
document.getElementById("promoCode").addEventListener("click", function() {
    // Create a new input element
    var inputElement = document.createElement("input");
    // Append the input element to the body
    document.body.appendChild(inputElement);
    // Set its value to the text content found within the span inside the #promoCode element
    inputElement.value = document.querySelector("#promoCode span").textContent;
    // Select the content of the input element
    inputElement.select();
    // Execute the copy command
    document.execCommand("copy");
    // Remove the input element from the body
    document.body.removeChild(inputElement);

    // Display the SweetAlert
    Swal.fire({
        title: "Successful",
        text: "Coupon has been copied to clipboard!",
        icon: "success",
        confirmButtonText: "Close"
    });
});

// Language Alert
document.addEventListener('DOMContentLoaded', () => {
    // Attach click event listener to each language option
    document.querySelectorAll('.language-option').forEach(item => {
      item.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default link behavior
        
        const language = this.getAttribute('data-language');
        const country = this.getAttribute('data-country');
        
        // Show SweetAlert popup
        Swal.fire({
          icon: 'error',
          title: 'Unavailable Language',
          html: `Sorry, the <span style="color: white; font-weight: bold;">${language}</span> language option is not yet available.`,
          confirmButtonText: 'OK'
        });
      });
    });
});

// Knowledgebase Alert
document.addEventListener('DOMContentLoaded', () => {
  const knowledgebaseLinks = document.querySelectorAll('.knowledgebase-link');
  
  knowledgebaseLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent navigating
        
        // Show SweetAlert popup
        Swal.fire({
          icon: 'info',
          title: 'Under Construction',
          text: 'Our Knowledgebase is currently under construction. Please check back later.',
          confirmButtonText: 'Okay'
        });
      });
  });
});

// Discord Alert
document.addEventListener('DOMContentLoaded', () => {
  const discordLinks = document.querySelectorAll('.discord-link');
  
  discordLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent navigating
        
        // Show SweetAlert popup
        Swal.fire({
          icon: 'info',
          title: 'Under Construction',
          text: 'Our advanced Discord bot hosting service is currently in the works, promising exceptional uptime and ease of use. Revisit us soon to elevate your Discord experience.',
          confirmButtonText: 'Okay'
        });
      });
  });
});

// Close Drag and download images
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('img'); // Select all images
  images.forEach(function(img) {
      img.addEventListener('contextmenu', function(e) {
          e.preventDefault(); // Prevent right-click menu on images
      });
      img.addEventListener('dragstart', function(e) {
          e.preventDefault(); // Prevent dragging of images
      });
  });
});

// SVG Images delete cache
document.addEventListener('DOMContentLoaded', function() {
  var svgs = document.querySelectorAll('img[src$=".svg"]');
  svgs.forEach(function(svg) {
      var src = svg.getAttribute('src');
      var timestamp = new Date().getTime(); // Generates a unique timestamp
      svg.setAttribute('src', src + '?v=' + timestamp);
  });
});

/* Light Dark 
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('themeToggle');
  const currentTheme = localStorage.getItem('theme');

  // Define your icons
  const lightModeIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="var(--velo-primary-color)" width="16" height="16">
    <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
  </svg>`;
  const darkModeIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="var(--velo-primary-color)" width="16" height="16">
    <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clip-rule="evenodd" />
  </svg>`;

  // Set the initial icon and theme
  if (currentTheme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      themeToggle.innerHTML = darkModeIcon;
  } else {
      // Default theme is dark
      document.documentElement.setAttribute('data-theme', 'dark');
      themeToggle.innerHTML = lightModeIcon;
  }

  // Toggle the theme and icon on button click
  themeToggle.addEventListener('click', function() {
      const theme = document.documentElement.getAttribute('data-theme');
      if (theme === 'dark') {
          document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
          themeToggle.innerHTML = darkModeIcon;
      } else {
          document.documentElement.setAttribute('data-theme', 'dark');
          localStorage.setItem('theme', 'dark');
          themeToggle.innerHTML = lightModeIcon;
      }
  });
});
*/