import Link from "next/link";

export default function Navbar() {
  return (
    <nav classname="bg-gray-800 text-white p-4 top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className={"text-xl font-bold"}>
          Guillermo Galarraga
        </Link>

        <div className="space-x-4">
          <Link href="#proyectos" className="hover:text-gray-300">
            Proyectos
          </Link>
          <Link href="#sobre-mi" className="hover:text-gray-300">
            Sobre mi
          </Link>
          <Link href="#contacto" className="hover:text-gray-300">
            Contacto
          </Link>
          
        </div>
      </div>
    </nav>
  );
}
