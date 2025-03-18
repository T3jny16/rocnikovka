import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-blue-600 text-white p-4 text-center text-2xl font-bold">
      O₂ Arena
      </header>
      <nav className="flex justify-center space-x-4 p-4 bg-white shadow-md">
        <Link href="/" className="text-blue-600 hover:underline">Domů</Link>
        <Link href="/events" className="text-blue-600 hover:underline">Akce</Link>
        <Link href="/contact" className="text-blue-600 hover:underline">Kontakt</Link>
      </nav>
      <main className="p-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Vítejte v O₂ Aréně!</h1>
        <p className="text-lg text-gray-700">Největší multifunkční hala v České republice.</p>
      </main>
      
    </div>
  );
}
