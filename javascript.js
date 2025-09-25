// Highlight active page in nav
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop().toLowerCase();
  const links = document.querySelectorAll("nav ul li a");

  links.forEach(link => {
    const targetPage = link.getAttribute("href").toLowerCase();
    if (currentPage === targetPage) {
      link.classList.add("active");
    }

    // Add click handler to allow JavaScript-driven navigation
    link.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = link.getAttribute("href");
    });
  });
});
