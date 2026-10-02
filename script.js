document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const roles = [
  "Senior Data Analyst",
  "Power BI Developer",
  "Python Builder",
  "RAG / GenAI Enthusiast"
];

const typedRole = document.getElementById("typed-role");
let roleIndex = 0;

if (typedRole) {
  setInterval(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    typedRole.style.opacity = 0;
    setTimeout(() => {
      typedRole.textContent = roles[roleIndex];
      typedRole.style.opacity = 1;
    }, 180);
  }, 2200);
}
