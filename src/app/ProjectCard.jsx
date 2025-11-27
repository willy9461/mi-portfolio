import Image from 'next/image';

export default function ProjectCard({ title, description, imageUrl, projectUrl }) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="relative w-full h-56">
        <Image
          src={imageUrl}
          alt={`Imagen del proyecto ${title}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-300 mb-4 h-24 overflow-y-auto">{description}</p>
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
        >
          Ver Proyecto
        </a>
      </div>
    </div>
  );
}