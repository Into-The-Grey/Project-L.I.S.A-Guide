window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("table").forEach(table => {
      table.style.overflowX = "auto";
      table.style.display = "block";
    });
    const fab = document.createElement("button");
    fab.textContent = "↑";
    fab.style.position = "fixed";
    fab.style.bottom = "2rem";
    fab.style.right = "2rem";
    fab.style.padding = "1rem";
    fab.style.fontSize = "1.5rem";
    fab.style.borderRadius = "50%";
    fab.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
    fab.style.zIndex = "9999";
    fab.style.border = "none";
    fab.style.background = "#007acc";
    fab.style.color = "white";
    fab.style.cursor = "pointer";
    fab.style.transition = "opacity 0.3s ease-in-out";
    fab.title = "Scroll to Top";
    fab.addEventListener("click", () => window.scrollTo({top: 0, behavior: "smooth"}));
    document.body.appendChild(fab);
  });
