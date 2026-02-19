import "./style.css";

const links = [
  { 
    label: "Email",
    value: "emreelbir0@gmail.com",
    href: "mailto:emreelbir0@gmail.com"
  },
  { 
    label: "Phone",
    value: "+31 641770579",
    href: "tel:+31641770579"
  },
  { 
    label: "GitHub",
    value: "github.com/emreelbir",
    href: "https://github.com/emreelbir"
  },
  { 
    label: "GitHub (DeerProjects)",
    value: "github.com/DeerProjects",
    href: "https://github.com/DeerProjects"
  },
  { 
    label: "LinkedIn",
    value: "linkedin.com/in/emre-elbir-0739921a6",
    href: "https://www.linkedin.com/in/emre-elbir-0739921a6/"
  }
];

const apiExample = {
  endpoint: "POST /api/posts",
  request: {
    content: "Test post",
    userId: 999
  },
  error: {
    status: "404 Not Found",
    body: {
      error: "UserNotFound",
      message: "User does not exist"
    }
  }
};

const app = document.querySelector("#app");

app.innerHTML = `
  <div class="page">

    <header class="hero">
      <h1>Emre Elbir</h1>
      <p class="subtitle">Junior .NET Backend Developer • Amsterdam</p>
      <p class="lead">
        I build predictable and maintainable REST APIs using C# and .NET,
        focusing on validation, consistent error handling, and clean integration
        between frontend requests and relational data.
      </p>

      <div class="contacts">
        ${links.map(l => `
          <a class="contact" href="${l.href}" target="${l.href.startsWith("http") ? "_blank" : "_self"}" rel="noreferrer">
            <span class="contactLabel">${l.label}</span>
            <span class="contactValue">${l.value}</span>
          </a>
        `).join("")}
      </div>
    </header>

    <main class="layout">

      <section class="card highlight">
        <h2>Moody — Backend Case Study</h2>
        <p class="muted">.NET Web API • Entity Framework • SQL</p>

        <h3>My Responsibility</h3>
        <ul class="list">
          <li>Owned small backend features from implementation to pull request</li>
          <li>Validated requests and standardized error responses</li>
          <li>Debugged integration issues between frontend and backend behavior</li>
        </ul>

        <h3>Problem & Decision</h3>
        <ul class="list">
          <li>Frontend occasionally sent invalid user IDs during integration.</li>
          <li>Instead of allowing inconsistent database state, I added domain-level checks.</li>
          <li>Introduced structured error responses to keep API behavior predictable.</li>
        </ul>

        <h3>Example API Interaction</h3>
        <div class="codeblock">
          <div class="codeTitle">${apiExample.endpoint}</div>
          <pre><code>${JSON.stringify(apiExample.request, null, 2)}</code></pre>

          <div class="codeTitle">${apiExample.error.status}</div>
          <pre><code>${JSON.stringify(apiExample.error.body, null, 2)}</code></pre>
        </div>

        <p class="muted small">
          Focus: keeping backend behavior predictable for other developers during integration.
        </p>
      </section>

      <section class="card">
        <h2>Experience</h2>
        <p class="muted">Collaborative Backend Developer — Remote Team (2022–2024)</p>
        <ul class="list">
          <li>Worked in shared repositories with PR reviews and merge conflict resolution</li>
          <li>Implemented REST endpoints with validation and consistent responses</li>
          <li>Connected application logic to relational database operations</li>
          <li>Containerized services locally using Docker</li>
        </ul>
      </section>

      <section class="card">
        <h2>Quick Info</h2>
        <p class="small">Certification: Microsoft Azure Fundamentals (AZ-900)</p>
        <p class="small">Languages: English B2 • Turkish Native • Dutch A2</p>
      </section>

    </main>

    <footer class="footer">
      © ${new Date().getFullYear()} Emre Elbir
    </footer>

  </div>
`;
