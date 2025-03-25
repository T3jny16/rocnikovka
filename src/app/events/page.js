import Image from "next/image";
import Link from "next/link";

const EventCard = ({ img, title, date, description }) => (
  <div className="max-w-2xl mx-auto mt-6 bg-white p-6 rounded-lg shadow-md">
    <Image src={img} alt={title} width={600} height={400} className="rounded-lg" />
    <ul>
      <li className="p-3 border-b last:border-none">
        <span className="font-bold text-xl">{title}</span> – {date}
      </li>
    </ul>
    
    <div className="mt-6">
      {description.map((text, index) => (
        <p key={index} className="mt-2">{text}</p>
      ))}
    </div>
    <div className="mt-6 text-center">
      <Link href="/dashboard" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        REZERVACE
      </Link>
    </div>
  </div>
);

export default function Events() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
      <header className="bg-blue-600 text-white p-4 text-center text-2xl font-bold">
        Nadcházející akce v O₂ Aréně
      </header>

      <EventCard
        img="/ed.jpg"
        title="Ed Sheeran"
        date="20. července 2025"
        description={[
          "🎤 Ed Sheeran v O₂ Aréně – 20. července 2025 🎶",
          "Jedna z největších hudebních událostí roku míří do Prahy!",
          "Připravte se na večer plný emocí a hitů jako Shape of You, Perfect nebo Bad Habits.",
          "🔔 Nezmeškejte tuto jedinečnou příležitost! Kapacita je omezená, zajistěte si své místo co nejdříve.",
          "📅 Datum: 20. července 2025",
          "📍 Místo: O₂ Aréna, Praha",
          "🎟️ Rezervace vstupenek: Klikněte na tlačítko REZERVACE níže."
        ]}
      />

      <EventCard
        img="/michaldavid.jpg"
        title="Koncert Michal David"
        date="30. srpna 2025"
        description={[
          "🎤 Michal David v O₂ Aréně – 30. srpna 2025 🎶",
          "Legendární český zpěvák a hitmaker Michal David se vrací na pódium O₂ Arény!",
          "Připravte se na legendární skladby jako Pár přátel, Nonstop a další oblíbené hity.",
          "🔔 Nenechte si ujít tuto mimořádnou událost!",
          "📅 Datum: 30. srpna 2025",
          "📍 Místo: O₂ Aréna, Praha",
          "🎟️ Rezervace vstupenek: Klikněte na tlačítko REZERVACE níže."
        ]}
      />
      <EventCard
        imgSrc="/lynyrd.jpg"
        title="Lynyrd Skynyrd"
        date="24. července 2025"
        description={[
          "🎸 Lynyrd Skynyrd v O₂ Aréně – 24. července 2025 🎵",
          "Legendární rocková kapela Lynyrd Skynyrd vystoupí poprvé v Praze!",
          "Přijďte si užít ikonické skladby jako \"Sweet Home Alabama\", \"Free Bird\" a další klasiky této jižanské rockové kapely.",
          "🔔 Tento koncert bude nezapomenutelným zážitkem pro všechny milovníky rockové hudby. Nenechte si ho ujít!",
          "📅 Datum: 24. července 2025",
          "📍 Místo: O₂ Aréna, Praha",
          "🎟️ Rezervace vstupenek: Klikněte na tlačítko REZERVACE níže."
        ]}
      />
    </div>
  );
}
