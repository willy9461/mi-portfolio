import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="w-full mt-0 h-[50vh] bg-gray-900  flex relative justify-center items-center">
     
      <Image
        src="../tecno.jpg"
        alt="Imagen de referencia a tecnologias de desarrollo web"
        // layout="fill"
        width={600}
        height={600}
       
        objectFit="cover"
        className=" image rounded-lg shadow-lg"
        
      />
    </div>
  );
}