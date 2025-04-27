"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const EventCard = ({ img, id, title, date, description }) => {
  const formattedDate = new Date(date).toLocaleString("cs-CZ", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="max-w-2xl mx-auto mt-6 bg-white p-6 rounded-lg shadow-md">
      <Image
        src={img}
        alt={title}
        width={600}
        height={400}
        className="rounded-lg"
      />

      <ul>
        <li className="p-3 border-b last:border-none">
          <span className="font-bold text-xl">{title}</span> – {formattedDate}
        </li>
      </ul>

      <div className="mt-6 bg-blue-50 p-4 rounded-md space-y-2 text-left border border-blue-200">
        {String(description)
          .split("\\n")
          .map((line, index) => (
            <p key={index} className="leading-relaxed text-gray-800">
              {line}
            </p>
          ))}
      </div>

      <div className="mt-6 text-center">
        <Link
          href={`/reservation/${id}`}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          REZERVACE
        </Link>
      </div>
    </div>
  );
};

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchReservations = async () => {
    const data = await axios.get("/api/events");
    if (data.status === 200) {
      setEvents(data.data);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
      <header className="bg-blue-600 text-white p-4 text-center text-2xl font-bold">
        <h1>O₂ Arena</h1>
      </header>

      <nav className="flex justify-center space-x-4 p-4 bg-white shadow-md text-lg">
        <Link href="/" className="text-blue-600 hover:underline">
          Domů
        </Link>
        <Link href="/events" className="text-blue-600 hover:underline">
          Akce
        </Link>
        <Link href="/contact" className="text-blue-600 hover:underline">
          Kontakt
        </Link>
        <Link href="/info" className="text-blue-600 hover:underline">
          O nás
        </Link>
      </nav>

      <main className="flex-grow p-6">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Nadcházející Eventy
        </h1>
        {loading ? (
          <p className="text-center text-lg">Načítám akce...</p>
        ) : (
          events.map((element) => (
            <EventCard
              key={element._id}
              id={element._id}
              img={element.img}
              title={element.title}
              date={element.date}
              description={element.description}
            />
          ))
        )}
      </main>

      <footer className="bg-blue-600 text-white text-center p-4 mt-6">
        <p>&copy; 2025 O₂ Arena. Všechna práva vyhrazena.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <Link
            href="https://www.facebook.com/o2arenapraha/?locale=cs_CZ "
            target="_blank"
          >
            <FaFacebook className="text-white text-2xl hover:text-gray-300" />
          </Link>
          <Link
            href="https://www.instagram.com/o2arenapraha/?hl=cs"
            target="_blank"
          >
            <FaInstagram className="text-white text-2xl hover:text-gray-300" />
          </Link>
        </div>
      </footer>
    </div>
  );
}
