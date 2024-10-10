document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".leaf");
  images.forEach(function (image) {
    // Generați o poziție verticală aleatorie între 0 și înălțimea ferestrei
    const randomPosition = Math.floor(Math.random() * window.innerHeight);
    // Setăm poziția verticală a fiecărei imagini
    image.style.top = randomPosition + "px";
  });
});
