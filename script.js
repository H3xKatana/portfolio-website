document.addEventListener('DOMContentLoaded', function () {
    const root = document.documentElement;
    const toggleButton = document.getElementById('toggleButton');
    const logo = document.querySelector('.logo a');
    let isBrightPalette = false;

    toggleButton.addEventListener('click', function () {
        isBrightPalette = !isBrightPalette;

        if (isBrightPalette) {
            // Apply bright color palette
            root.style.setProperty('--primary-bg', '#f5f5f5');
            root.style.setProperty('--secondary-bg', '#ffffff');
            root.style.setProperty('--text-color', '#333333');
            root.style.setProperty('--accent-color', '#009688');
            root.style.setProperty('--link-color', '#007bff');
            root.style.setProperty('--card-bg', '#e0e0e0');
            root.style.setProperty('--title-color', '#555555');
            logo.style.color = '#333333'; // Change the logo color
            toggleButton.innerHTML = '<i class="fa-regular fa-sun"></i>'; // Change the button icon
        } else {
            // Apply dark color palette (your original colors)
            root.style.setProperty('--primary-bg', '#1e1e1e');
            root.style.setProperty('--secondary-bg', '#2c2c2c');
            root.style.setProperty('--text-color', '#FAF0E6');
            root.style.setProperty('--accent-color', '#6e45e2');
            root.style.setProperty('--link-color', '#fff');
            root.style.setProperty('--card-bg', '#7a7676');
            root.style.setProperty('--title-color', '#c1c8de');
            logo.style.color = '#FAF0E6'; // Change the logo color
            toggleButton.innerHTML = '<i class="fa-regular fa-moon"></i>'; // Change the button icon
        }
    });
});




// Get the button element
var pdfButton = document.getElementById("pdfButton");

// Add click event listener to the button
pdfButton.addEventListener("click", function() {
  // Open the PDF file in a new tab or window
  window.open("path/to/your/pdf_file.pdf", "_blank");
});





const type = document.querySelector('.type-text');

let listTexts = [' K M ','Developer', 'CS studen'];

let index = -1;
let current = 0;

function typeTextFunc() {
    if (current === listTexts.length) {
        current = 0;
    }
    let typeText = setInterval(() => {
        if (index == listTexts[current].length - 1) {
            clearInterval(typeText);
            clearTextFunc();
        } else {
            index++;
            type.textContent += listTexts[current][index];
        }
    }, 150);
};

function clearTextFunc() {
    let clearText = setInterval(() => {
        if (type.textContent.length == 0) {
            clearInterval(clearText);
            index = -1;
            current++
            typeTextFunc();
        } else {
            type.textContent = type.textContent.slice(0, -1)
        }
    }, 150);
};

typeTextFunc();



Resources