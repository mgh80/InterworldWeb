import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex flex-col items-start">
            <Image
              src="/logo.png"
              alt="Logo Interworld"
              width={250}
              height={250}
            />
            <span className="text-sm text-blue-800 font-medium mt-1">
              Maestros en logística integral
            </span>
          </div>
        </Link>
        <nav className="space-x-6 text-sm font-medium text-gray-800">
          <Link
            href="/services"
            className="hover:text-blue-700 transition-colors"
          >
            Servicios
          </Link>
          <Link href="/track" className="hover:text-blue-700 transition-colors">
            Rastreo
          </Link>
          <Link
            href="/contact"
            className="hover:text-blue-700 transition-colors"
          >
            Contacto
          </Link>
          <Link
            href="/careers"
            className="hover:text-blue-700 transition-colors"
          >
            Trabaja con nosotros
          </Link>
          <Link
            href="/login"
            className="text-blue-700 font-semibold hover:underline"
          >
            Iniciar sesión
          </Link>
        </nav>
      </div>
    </header>
  );
}
