export default function Contacto() {
  return (
    <section id="contacto" className="w-full max-w-4xl py-16 min-h-screen flex flex-col justify-center">
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">Contacto</h2>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <p className="text-center text-lg mb-6">
            ¿Tenés una idea o proyecto en mente? ¡Hablemos!
          </p>
          <form className="space-y-6">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-300">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-gray-300">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="4"
                className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}