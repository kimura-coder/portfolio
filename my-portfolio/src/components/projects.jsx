import projectimage from "../assets/Figure 1 23_05_2025 07_48_39.png";
function Projects() {
  const projects = [
    {
      name: "Covid-19 anayzer",
      description: "This project analyzes global COVID-19 trends using real-world data. It focuses on exploring and visualizing key metrics such as cases, deaths, and vaccinations over time across selected countries..",
      tech: "Python,pandas,matplotlib",
      link: "https://github.com/kimura-coder/Covid-Analyzer",
      image: "/assets/weather.png"
    }
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map((project, i) => (
        <div key={i}>
          <img src={projectimage} alt={project.name} style={{ width: '100%' }} />
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <p><strong>Tech Used:</strong> {project.tech}</p>
          <a href={project.link}>View on GitHub</a>
        </div>
      ))}
    </section>
  );
}

export default Projects;
