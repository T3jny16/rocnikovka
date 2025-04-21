import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
      <header className="bg-blue-600 text-white p-4 text-center text-2xl font-bold">
        <h1>Kontaktujte nás</h1>
      </header>

      <nav className="flex justify-center space-x-4 p-4 bg-white shadow-md text-lg">
        <Link href="/" className="text-blue-600 hover:underline">Domů</Link>
        <Link href="/events" className="text-blue-600 hover:underline">Akce</Link>
        <Link href="/contact" className="text-blue-600 hover:underline">Kontakt</Link>
        <Link href="/info" className="text-blue-600 hover:underline">O nás</Link>

      </nav>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">Spojte se s námi</h2>

          <p className="mb-6 text-lg text-center">
            Máte dotazy ohledně koncertů, vstupenek nebo technického zázemí? Podívejte se na naše kontaktní údaje nebo se zastavte přímo u nás.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Adresa</h3>
              <p>O₂ Arena<br />Českomoravská 2345/17<br />190 00 Praha 9</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Kontakt</h3>
              <p>E-mail: <a href="mailto:info@o2arena.cz" className="text-blue-600 hover:underline">info@o2arena.cz</a></p>
              <p>Telefon: +420 266 771 111</p>
            </div>

            <div className="sm:col-span-2">
              <h3 className="text-xl font-semibold mb-2">Otevírací doba pokladen</h3>
              <p>Po–Pá: 9:00 – 18:00<br />Víkendy: podle aktuálního programu</p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">Doprava a parkování</h3>
            <p className="mb-2">Nejrychlejší spojení je metrem linky B na stanici Českomoravská. Dále můžete využít tramvaje č. 8, 25 nebo 52.</p>
            <p>Pro návštěvníky je k dispozici parkování v bezprostřední blízkosti arény.</p>
            <img src="/vstup.jpg" alt="Vstup do O2 Areny" className="mt-4 rounded-lg shadow-md w-full" />
          </div>
        </div>
      </main>

      <footer className="bg-blue-600 text-white text-center p-4 mt-auto">
        <p>&copy; 2025 O₂ Arena. Všechna práva vyhrazena.</p>
      </footer>
    </div>
  );
}
