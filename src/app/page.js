import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";

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

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Kde nás najdete</h2>
          <iframe
            title="Mapa O₂ Arény"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.519928464246!2d14.487273776734154!3d50.1045211135995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470becd370d90021%3A0x9dfbb9b2a76d1fae!2sO2%20arena!5e0!3m2!1scs!2scz!4v1710685641234!5m2!1scs!2scz"
            width="100%"
            height="450"      
            allowFullScreen=""           
          ></iframe>
        </div>

      </main>
      <footer className="bg-blue-600 text-white text-center p-4 mt-6">
      <p>&copy; 2025 O₂ Arena. Všechna práva vyhrazena.</p>
      <div className="flex justify-center space-x-4 mt-4">
        <Link href="https://www.facebook.com/o2arenapraha/?locale=cs_CZ">
        <FaFacebook className="text-white text-2xl hover:text-gray-300" />
        </Link>
        <Link href="https://www.instagram.com/o2arenapraha/?hl=cs" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white text-2xl hover:text-gray-300" />
          </Link>
      </div>
      </footer>

    </div>
  );
}