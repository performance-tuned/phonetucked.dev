import { projects } from "@/content/projects";

export default function Home() {
  return (
    <main>
      <h1>phonetucked</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.slug}>
            {project.name} · {project.kind} · {project.date}
          </li>
        ))}
      </ul>
    </main>
  );
}
