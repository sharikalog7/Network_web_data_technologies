// script.js
// Function to toggle visibility of an element
function toggleVisibility() {
  var element = document.getElementById('toggleElement');
  if (element.style.display === 'none' || element.style.display === '') {
    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }
}

// Attach an event listener to the button
var toggleButton = document.getElementById('toggleButton');
toggleButton.addEventListener('click', toggleVisibility);
