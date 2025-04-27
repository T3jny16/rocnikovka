"use client";

import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function SingleID() {
  const params = useParams();
  const sectorId = Number(params.id?.[1]);

  const isSeating = sectorId >= 1 && sectorId <= 18;
  const totalSeats = isSeating ? 450 : 500;

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [reservedSeats, setReservedSeats] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    address: "",
    phone: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [reservationId, setReservationId] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchReservedSeats = async () => {
      const res = await fetch("/api/reservations");
      const data = await res.json();
      const currentEventId = params.id?.[0];

      const seats = data
        .filter((r) => r.eventId === currentEventId)
        .flatMap((r) => r.seats);

      setReservedSeats(seats);
    };

    fetchReservedSeats();
  }, [params.id]);

  const handleSeatSelect = (e) => {
    const seat = Number(e.target.value);
    if (selectedSeats.includes(seat)) return;
    if (selectedSeats.length >= 3) {
      setError("Maximální počet rezervovaných míst je 3.");
      return;
    }
    setSelectedSeats([...selectedSeats, seat]);
    setError("");
  };

  const removeSeat = (seat) => {
    setSelectedSeats(selectedSeats.filter((s) => s !== seat));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedSeats.length === 0) {
      setError("Vyberte si alespoň jedno místo.");
      return;
    }

    const payload = {
      eventId: params.id?.[0],
      eventName: `Sektor ${sectorId}`,
      price: selectedSeats.length * 1500,
      seats: selectedSeats,
      ...formData,
    };

    const res = await fetch("/api/reservations", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      const result = await res.json();
      setReservationId(result.saved._id);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="p-6 max-w-xl mx-auto bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          Rezervace byla úspěšně odeslána!
        </h2>
        <p className="mb-2">
          Děkujeme za rezervaci do <strong>Sektoru {sectorId}</strong>.
        </p>
        <p className="mb-4">
          Číslo rezervace: <strong>{reservationId}</strong>
        </p>
        <div className="bg-gray-100 p-4 rounded-lg text-left space-y-1">
          <p>
            <strong>Jméno:</strong> {formData.name} {formData.surname}
          </p>
          <p>
            <strong>Adresa:</strong> {formData.address}
          </p>
          <p>
            <strong>Telefon:</strong> {formData.phone}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
          <p>
            <strong>Vybraná místa:</strong> {selectedSeats.join(", ")}
          </p>
          <p>
            <strong>Cena celkem:</strong> {selectedSeats.length * 1500} Kč
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Link
        href={`/reservation/${params.id?.[0]}`}
        className="text-blue-600 hover:underline mb-4 inline-block"
      >
        ← Zpět na výběr sektoru
      </Link>

      <h1 className="text-2xl font-bold mb-4">Rezervace – Sektor {sectorId}</h1>

      {isSeating ? (
        <div className="mb-6">
          <label className="block mb-2 font-medium">
            Vyberte sedadlo (max 3):
          </label>
          <select
            onChange={handleSeatSelect}
            className="w-full p-2 border rounded overflow-y-auto h-12"
          >
            {Array.from({ length: totalSeats }, (_, i) => i + 1).map((seat) => (
              <option
                key={seat}
                value={seat}
                disabled={
                  reservedSeats.includes(seat) || selectedSeats.includes(seat)
                }
              >
                Sedadlo {seat}{" "}
                {reservedSeats.includes(seat) ? "(obsazeno)" : ""}
              </option>
            ))}
          </select>

          <div className="mt-2">
            {selectedSeats.map((seat) => (
              <span
                key={seat}
                className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm mr-2 mb-2"
              >
                {seat}{" "}
                <button
                  onClick={() => removeSeat(seat)}
                  className="ml-2 text-red-300"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
      ) : (
        <div className="mb-4">
          <p className="mb-2">
            Toto je sektor na stání. Vyber počet osob (max 3):
          </p>
          {[1, 2, 3].map((count) => (
            <button
              key={count}
              onClick={() => {
                setSelectedSeats(
                  Array.from({ length: count }, (_, i) => `stání ${i + 1}`)
                );
                setError("");
              }}
              className={`text-sm px-3 py-1 mr-2 rounded ${
                selectedSeats.length === count
                  ? "bg-green-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              {count} osoba/y
            </button>
          ))}
        </div>
      )}

      {error && <p className="text-red-600 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Jméno"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          required
        />
        <input
          name="surname"
          placeholder="Příjmení"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          required
        />
        <input
          name="address"
          placeholder="Adresa"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          required
        />
        <input
          name="phone"
          placeholder="Telefon"
          type="tel"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          required
        />
        <input
          name="email"
          placeholder="Email"
          type="email"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Odeslat rezervaci
        </button>
      </form>
    </div>
  );
}
