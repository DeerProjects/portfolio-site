import "./style.css";

const skills = [
  "C#", ".NET", "REST APIs", "SQL",
  "Entity Framework (basic)", "Git & GitHub",
  "Azure Fundamentals (AZ-900)",
  "C++", "Unreal Engine"
];

const links = [
  { label: "📧 emreelbir0@gmail.com", href: "mailto:emreelbir0@gmail.com" },
  { label: "📞 +31 641770579", href: "tel:+31641770579" },
  { label: "💻 github.com/emreelbir", href: "https://github.com/emreelbir" },
  { label: "💻 github.com/DeerProjects", href: "https://github.com/DeerProjects" },
  { label: "🔗 LinkedIn", href: "https://www.linkedin.com/in/emre-elbir-76a71235a/" },
  { label: "🔗 LinkedIn (Alt)", href: "https://www.linkedin.com/in/emre-elbir-0739921a6/" },
];

const app = document.querySelector("#app");

app.innerHTML = `
  <div class="wrap">
    <div class="grid">
      <div class="card">
        <h1>Emre Elbir</h1>
        <p class="muted">Junior .NET Backend Developer (Azure Cloud)</p>
        <p>
          Backend developer with 2+ years of experience building RESTful APIs using C# and .NET.
          Currently expanding into Azure cloud and aiming to grow in production environments.
        </p>
        <div class="row">
          ${links.map(l => `<a class="link" href="${l.href}" target="${l.href.startsWith("http") ? "_blank" : "_self"}" rel="noreferrer">${l.label}</a>`).join("")}
        </div>
      </div>

      <div class="card">
        <h2>Skills</h2>
        <div class="row">
          ${skills.map(s => `<span class="pill">${s}</span>`).join("")}
        </div>

        <div class="section">
          <h2>Certifications</h2>
          <p class="small">Microsoft Azure Fundamentals (AZ-900)</p>
        </div>

        <div class="section">
          <h2>Languages</h2>
          <p class="small">English B2 • Turkish Native • Dutch A2</p>
        </div>
      </div>
    </div>

    <div class="section card">
      <h2>Experience</h2>
      <p><strong>Junior Backend Developer — Remote Team (2022–2024)</strong></p>
      <ul class="list">
        <li>Developed backend services using C# and .NET</li>
        <li>Designed RESTful APIs and data flow for features</li>
        <li>Worked with relational SQL databases and basic modeling</li>
        <li>Collaborated with frontend and QA in team workflows</li>
        <li>Debugged issues and improved existing code</li>
      </ul>
    </div>

    <div class="section card">
      <h2>Projects</h2>
      <p><strong>Moody — Team Software Project</strong></p>
      <p class="muted">Backend components, API endpoints, team collaboration via Git</p>
      <div class="row">
        <a class="link" href="https://github.com/lets-do-it-pl" target="_blank" rel="noreferrer">lets-do-it-pl</a>
        <a class="link" href="https://github.com/KeepCodingPL" target="_blank" rel="noreferrer">KeepCodingPL</a>
        <a class="link" href="https://github.com/emreelbir" target="_blank" rel="noreferrer">Personal GitHub</a>
      </div>
    </div>

    <div class="footer">
      <span>© ${new Date().getFullYear()} Emre Elbir</span>
      <span>Built with Vite</span>
    </div>
  </div>
`;
