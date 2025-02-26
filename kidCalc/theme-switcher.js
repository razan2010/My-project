// theme-switcher.js

// Get the theme selector dropdown and the link to the CSS
const themeSelector = document.getElementById('theme');
const themeStyleLink = document.getElementById('theme-style');

// Function to switch themes
themeSelector.addEventListener('change', function() {
  // Get the selected theme
  const selectedTheme = themeSelector.value;

  // Switch the theme based on the selected option
  if (selectedTheme === 'defult theme') {
    themeStyleLink.setAttribute('href', 'assets/style.css'); // Default theme
  } else if (selectedTheme === 'theme1') {
    themeStyleLink.setAttribute('href', 'assets/car.css'); // Cars theme
  } else if (selectedTheme === 'theme2') {
    themeStyleLink.setAttribute('href', 'assets/space.css'); // Space theme
  } else if (selectedTheme === 'theme3') {
    themeStyleLink.setAttribute('href', 'assets/dinasour.css'); // Dinosaurs theme
  }
});
// Optionally, set a default theme when the page loads
window.addEventListener('load', () => {
  themeLink.setAttribute('href', 'assets/style.css'); // Default to default theme
});
