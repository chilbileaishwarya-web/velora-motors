document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav");
  if (menu && nav) menu.addEventListener("click", () => nav.classList.toggle("open"));

  document.querySelectorAll(".product-card").forEach((card, i) => {
    card.animate(
      [{opacity: 0, transform: "translateY(14px)"}, {opacity: 1, transform: "translateY(0)"}],
      {duration: 450, delay: i * 55, easing: "ease-out", fill: "both"}
    );
  });
});
