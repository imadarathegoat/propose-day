const heart = document.getElementById("heart");
const sparklesContainer = document.getElementById("sparkles");
const message = document.getElementById("message");

heart.addEventListener("click", () => {
  if (!heart.classList.contains("clicked")) {
    heart.classList.add("clicked");
    createSparkles();
    setTimeout(() => {
      message.textContent = "Ammu, will you be mine forever? 💍❤️";
    }, 800);
  }
});

function createSparkles() {
  for (let i = 0; i < 30; i++) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";

    const x = (Math.random() - 0.5) * 200 + "px";
    const y = (Math.random() - 0.5) * 200 + "px";

    sparkle.style.setProperty("--x", x);
    sparkle.style.setProperty("--y", y);

    sparkle.style.top = "50%";
    sparkle.style.left = "50%";

    sparklesContainer.appendChild(sparkle);

    setTimeout(() => {
      sparkle.remove();
    }, 1000);
  }
}
