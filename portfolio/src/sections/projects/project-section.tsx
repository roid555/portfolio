import ProjectCard from "./project-card";

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="w-full flex flex-col items-center text-center"
    >
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        <ProjectCard />
      </div>
    </section>
  );
}
