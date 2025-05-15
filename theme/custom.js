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

  // Sidebar toggle for even more interactivity!
  const toggleSidebarBtn = document.createElement("button");
  toggleSidebarBtn.textContent = "☰";
  toggleSidebarBtn.style.position = "fixed";
  toggleSidebarBtn.style.top = "1rem";
  toggleSidebarBtn.style.left = "1rem";
  toggleSidebarBtn.style.zIndex = "10000";
  toggleSidebarBtn.style.background = "#007acc";
  toggleSidebarBtn.style.color = "#fff";
  toggleSidebarBtn.style.border = "none";
  toggleSidebarBtn.style.padding = "0.5rem 1rem";
  toggleSidebarBtn.style.fontSize = "1.5rem";
  toggleSidebarBtn.style.borderRadius = "10px";
  toggleSidebarBtn.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
  toggleSidebarBtn.style.cursor = "pointer";
  toggleSidebarBtn.title = "Toggle Sidebar";
  toggleSidebarBtn.onclick = () => {
    document.body.classList.toggle("sidebar-hidden");
  };
  document.body.appendChild(toggleSidebarBtn);
});
