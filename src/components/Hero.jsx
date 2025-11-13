export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-gray-900 text-white h-[50vh] flex flex-col justify-center items-center"
    >
      <div className="text-center">
        <h1 className="text-5xl font-extrabold mb-4">Hola, soy Guille</h1>
        <p className="text-xl mb-8 m-5">
          Desarrollador Web especializado en React y Next.js
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
