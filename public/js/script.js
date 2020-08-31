window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const text = ["Web Developer", "UI/UX Designer", "Graphic Designer"];
let count = 0;
let index = 0;
let current = "";
let letter = "";

(function type() {
  if (count === text.length) {
    count = 0;
  }
  current = text[count];
  letter = current.slice(0, ++index);
  document.querySelector(".effect").textContent = "Your " + letter;
  if (letter.length === current.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 200);
})();
