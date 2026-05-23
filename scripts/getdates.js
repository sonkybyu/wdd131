const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

document.getElementById('lastModified').textContent =
  `Last Modified: ${document.lastModified}`;
// const para = document.querySelector('.para');

// para.innerHTML += "<h2>New Title</h2><p>Updated content!</p>"