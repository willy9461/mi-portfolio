export default function SobreMi() {
  return (
    <section
      id="sobre-mi"
      className="bg-gray-900 text-white h-screen flex flex-col justify-center items-center"
    >
      <div className="text-center">
        <h1 className="text-5xl font-extrabold mb-4">Sobre mi</h1>
        <p className="text-xl mb-8 m-15">
          Soy Guillermo Galarraga, desarrollador web con enfoque en Front-End y
          una base sólida en desarrollo Full-Stack. Me especializo en React.js y
          Next.js, tecnologías con las que disfruto construir interfaces
          modernas, funcionales y centradas en la experiencia del usuario. Me
          apasiona transformar ideas en soluciones digitales reales, cuidando
          tanto la estética y usabilidad del diseño como la lógica del código
          que hay detrás. He trabajado en proyectos personales como mi
          aplicación barrio-privado-app.vercel.app , donde integré autenticación
          con Supabase, bases de datos en PostgreSQL y un dashboard dinámico con
          control de roles. Actualmente curso la Tecnicatura en Desarrollo de
          Software en el IFTS N°29, y sigo ampliando mis conocimientos con
          programas de AWS Academy (despliegue y desarrollo en la nube) y IBM
          SkillBuild (introducción a la inteligencia artificial). Disfruto
          aprender nuevas tecnologías, trabajar en equipo y buscar siempre la
          mejor forma de crear productos que aporten valor. Mi objetivo es
          seguir creciendo como Front-End Developer en un entorno desafiante,
          colaborativo e innovador, donde pueda aplicar mis conocimientos y
          continuar aprendiendo cada día.
        </p>
        <a
          href="#proyectos"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Ver mis proyectos
        </a>
      </div>
    </section>
  );
}
