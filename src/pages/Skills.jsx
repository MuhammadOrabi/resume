export default function Skills() {
  return (
    <div className="page-stack">
      <div className="surface-card section-block">
        <p className="text-lg text-black font-bold">Core Technical Skills:</p>
        <div className="text-grey-darkest text-base leading-normal content-flow">
          <ul>
            <li>Languages: TypeScript, JavaScript (ES6+), PHP, Go</li>
            <li>Backend: Node.js, NestJS, Laravel, REST APIs</li>
            <li>Databases and Search: PostgreSQL, MongoDB, Redis, Elasticsearch</li>
            <li>Frontend: Vue.js, React, Tailwind CSS, Sass</li>
            <li>Architecture: System design, microservices architecture, performance optimization</li>
            <li>Testing: Unit, integration, and end-to-end testing</li>
          </ul>
        </div>
      </div>
      <div className="surface-card section-block">
        <p className="text-lg text-black font-bold">Tools and Platforms:</p>
        <div className="text-grey-darkest text-base leading-normal content-flow">
          <ul>
            <li>Workflow: GNU/Linux, Bash scripting, Git, GitHub/GitLab workflows</li>
            <li>DevOps: Docker, Kubernetes basics, CI/CD (GitHub Actions, GitLab CI)</li>
            <li>API Tooling: Postman, Swagger/OpenAPI</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
