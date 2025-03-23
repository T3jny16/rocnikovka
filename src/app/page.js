import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
      <header className="bg-blue-600 text-white p-4 text-center text-2xl font-bold">
      <h1>O₂ Arena</h1>
      </header>
      <nav className="flex justify-center space-x-4 p-4 bg-white shadow-md text-lg">
        <Link href="/" className="text-blue-600 hover:underline">Domů</Link>
        <Link href="/events" className="text-blue-600 hover:underline">Akce</Link>
        <Link href="/contact" className="text-blue-600 hover:underline">Kontakt</Link>
      </nav>
      <main className=" flex-grow p-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Vítejte v O₂ Aréně!</h1>
        <p className="text-lg text-gray-700 mb-6">Nadcházející Eventy.</p>

        <div className="flex justify-center  space-x-4">
          
          <img src="/michaldavid.jpg" alt="Michal David" className="w-1/3 rounded-lg shadow-md"></img>
          <img src="/lynyrd.jpg" alt="LynyrdD" className="w-1/3 rounded-lg shadow-md"></img>

        </div>
      </main>
      <footer className="bg-blue-600 text-white text-center p-4 mt-6">
      <p>&copy; 2025 O₂ Arena. Všechna práva vyhrazena.</p>
      </footer>
      
    </div>
  );
}
