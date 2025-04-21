import Image from "next/image";
import Link from "next/link";

export default function Gallery() {
  const images = [
    "/o2arena1.jpg",
    "/o2arena2.jpg",
    "/o2arena3.jpg",
    "/o2arena4.jpg",
    "/o2arena5.jpg",
    "/o2arena6.jpg"
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
      <header className="bg-blue-600 text-white p-4 text-center text-2xl font-bold">
        <h1>Fotogalerie O₂ Areny</h1>
      </header>

      <nav className="flex justify-center space-x-4 p-4 bg-white shadow-md text-lg">
        <Link href="/" className="text-blue-600 hover:underline">Domů</Link>
        <Link href="/events" className="text-blue-600 hover:underline">Akce</Link>
        <Link href="/contact" className="text-blue-600 hover:underline">Kontakt</Link>
        <Link href="/info" className="text-blue-600 hover:underline">O nás</Link>

      </nav>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src={src}
                width={600}
                height={400}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-blue-600 text-white text-center p-4 mt-auto">
        <p>&copy; 2025 O₂ Arena. Všechna práva vyhrazena.</p>
      </footer>
    </div>
  );
}
