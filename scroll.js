document.lasScrollPosition = 0;

document.addEventListener("scroll", () => {
  const direction =
    window.pageXOffset - document.lastScrollPosition > 0 ? "down" : "up";
  const section = [...document.querySelectorAll("section")];

  document.lasScrollPosition = window.pageXOffset;
});
