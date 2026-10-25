// Keshavi's website interactions: language switch and print-friendly letter.
const languageToggle = document.getElementById("languageToggle");
const printLetter = document.getElementById("printLetter");

languageToggle.addEventListener("click", () => {
  const isHindi = document.body.classList.toggle("hindi-mode");
  languageToggle.textContent = isHindi ? "English" : "हिन्दी";
  document.documentElement.lang = isHindi ? "hi" : "en";
});

printLetter.addEventListener("click", () => {
  window.print();
});
