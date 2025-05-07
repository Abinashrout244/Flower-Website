
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

function toggleMenu() {
  // Toggle nav visibility
  navLinks.classList.toggle("hidden");

  // Toggle menu icon between hamburger and X
  if (menuIcon.classList.contains("bi-list")) {
    menuIcon.classList.remove("bi-list");
    menuIcon.classList.add("bi-x-lg");
  } else {
    menuIcon.classList.remove("bi-x-lg");
    menuIcon.classList.add("bi-list");
  }
}


  function showMap() {
    document.getElementById("mapSection").classList.remove("hidden");
    document.getElementById("flowerSection").classList.add("hidden");

    document.getElementById("mapBtn").classList.add("bg-indigo-900", "text-white");
    document.getElementById("mapBtn").classList.remove("bg-white", "text-black");

    document.getElementById("flowerBtn").classList.add("bg-white", "text-black");
    document.getElementById("flowerBtn").classList.remove("bg-indigo-900", "text-white");
  }

  function showFlower() {
    document.getElementById("mapSection").classList.add("hidden");
    document.getElementById("flowerSection").classList.remove("hidden");

    document.getElementById("flowerBtn").classList.add("bg-indigo-900", "text-white");
    document.getElementById("flowerBtn").classList.remove("bg-white", "text-black");

    document.getElementById("mapBtn").classList.add("bg-white", "text-black");
    document.getElementById("mapBtn").classList.remove("bg-indigo-900", "text-white");
  }
