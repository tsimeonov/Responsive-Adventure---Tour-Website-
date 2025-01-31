const openMenu = () => {
  document.querySelector("backdrop").className = "backdrop active";
  document.querySelector("aside").className = "active";
};

document.getElementById("menuBtn").onclick = (e) => {
  e.preventDefault();
};
