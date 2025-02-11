document.lastScrollPosition = 0;
document.lastCentered = 0;
document.onWayTo = null;
let isScrolling = false; // Prevents multiple scrolls at once

document.addEventListener("wheel", (event) => {
  if (isScrolling) return; // Prevents multiple triggers

  const direction = event.deltaY > 0 ? "down" : "up";
  const sections = [...document.querySelectorAll("section")];

  let destIndex =
    direction === "up" ? document.lastCentered - 1 : document.lastCentered + 1;

  if (destIndex >= 0 && destIndex < sections.length) {
    isScrolling = true;
    document.onWayTo = destIndex;

    window.scrollTo({
      top: sections[destIndex].offsetTop,
      behavior: "smooth",
    });

    setTimeout(() => {
      isScrolling = false;
    }, 800); // Adjust delay to match scroll animation time
  }
});

window.addEventListener("scroll", () => {
  const sections = [...document.querySelectorAll("section")];

  sections.forEach((section, index) => {
    if (Math.abs(window.scrollY - section.offsetTop) < 10) {
      // Checks proximity
      document.lastCentered = index;
      if (document.onWayTo === index) {
        document.onWayTo = null;
      }
    }
  });
});
