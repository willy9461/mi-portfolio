import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Gestión de Barrio Privado",
    description: "Aplicación web para la gestión de un barrio privado. Incluye autenticación de usuarios con Supabase, roles de administrador y usuario, y un dashboard dinámico para la visualización y gestión de datos almacenados en PostgreSQL.",
    imageUrl: "/barrio-privado-app.png", // Asegúrate de tener esta imagen en la carpeta `public`
    projectUrl: "https://barrio-privado-app.vercel.app/",
  },
  // Puedes añadir más proyectos aquí
];

export default function Proyectos() {
  return (
    <section id="proyectos" className="w-full max-w-4xl py-16 min-h-screen flex flex-col justify-center">
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}