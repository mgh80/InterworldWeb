import Image from "next/image";

type Props = {
  title: string;
  description: string;
  image: string;
};

export default function ServiceCard({ title, description, image }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out p-4 w-80 flex-shrink-0">
      <div className="overflow-hidden rounded-xl mb-4">
        <Image
          src={image}
          alt={title}
          width={400}
          height={250}
          className="rounded-xl object-cover w-full h-48 transition-transform duration-300 hover:scale-110"
        />
      </div>
      <h3 className="text-lg font-semibold text-blue-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
