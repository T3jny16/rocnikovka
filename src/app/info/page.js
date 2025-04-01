import Link from "next/link";

export default function Info() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
      <header className="bg-blue-600 text-white p-4 text-center text-2xl font-bold">
        <h1>O₂ Arena - Informace</h1>
      </header>

      <nav className="flex justify-center space-x-4 p-4 bg-white shadow-md text-lg">
        <Link href="/" className="text-blue-600 hover:underline">Domů</Link>
        <Link href="/events" className="text-blue-600 hover:underline">Akce</Link>
        <Link href="/contact" className="text-blue-600 hover:underline">Kontakt</Link>
        <Link href="/info" className="text-blue-600 hover:underline">O nás</Link>
      </nav>

      <div className="flex flex-col items-center justify-center mt-10 p-6 bg-white shadow-lg rounded-2xl max-w-6xl mx-auto">

        <p className="text-lg mb-4 text-center">O₂ Arena je jednou z nejmodernějších multifunkčních hal v Evropě, která hostí koncerty, sportovní události a další významné akce.</p>

        <div className="flex space-x-8 mb-8">
          <Link href="/info" className="text-blue-600 hover:underline">Průvodce arenou</Link>
          <Link href="/gallery" className="text-blue-600 hover:underline">Fotogalerie</Link>
          <Link href="https://www.hcsparta.cz/zobraz.asp?t=O2-arena" className="text-blue-600 hover:underline" target="_blank">HC Sparta Praha</Link>
        </div>

        <div className="mt-8 space-y-6">
          <div className="flex items-center space-x-6">
            <img src="/o2arena.jpg" alt="O₂ Arena" className="w-80  rounded-lg" />
            <p className="text-lg">O₂ Arena je symbolem moderní architektury a poskytuje špičkové zázemí pro všechny návštěvníky.</p>
          </div>
          <div className="flex items-center space-x-6">
            <img src="/nohavica.jpg" alt="Interiér O₂ Areny" className="w-80  rounded-lg" />
            <p className="text-lg">Uvnitř arény najdete více než 17 000 míst k sezení a prvotřídní technické vybavení.</p>
          </div>
        </div>
      </div>

      <footer className="bg-blue-600 text-white text-center p-4 mt-auto">
        <p>&copy; 2025 O₂ Arena. Všechna práva vyhrazena.</p>
      </footer>
    </div>
  );
}
