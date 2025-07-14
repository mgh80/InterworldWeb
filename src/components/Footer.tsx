export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-6 text-center text-sm">
        © {new Date().getFullYear()} Interworld Group. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
