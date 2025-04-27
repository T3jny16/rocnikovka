"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const stoly = [
  ...Array.from({ length: 18 }, (_, i) => {
    const id = i + 1;
    let price = 1500;
    if (id >= 1 && id <= 6) price = 2000;
    else if (id >= 7 && id <= 12) price = 1700;
    return {
      id,
      name: `Sektor ${id}`,
      price,
      type: "sezeni",
    };
  }),

  ...Array.from({ length: 16 }, (_, i) => {
    const id = i + 19;
    let price = 1300;
    if (id >= 19 && id <= 25) price = 1400;
    return {
      id,
      name: `Sektor ${id}`,
      price,
      type: "stani",
    };
  }),
];

export default function Dashboard() {
  const params = useParams();

  return (
    <div className="min-h-screen p-4 bg-gray-100 flex flex-col items-center">
      <Link
        href="/events"
        className="self-start text-blue-600 mb-4 hover:underline"
      >
        ← Zpět na akce
      </Link>
      <h1 className="text-2xl font-bold text-center mb-4">Vyberte si místo</h1>

      <div className="mb-6 text-center">
        <p className="text-gray-700">
          <span className="text-blue-600 font-semibold">Modré sektory</span> –
          sezení |
          <span className="text-yellow-500 font-semibold ml-2">
            Žluté sektory
          </span>{" "}
          – stání
        </p>
      </div>

      <Image
        src="/mista1.png"
        alt="Mapa sektorů O2 Arény"
        width={1000}
        height={600}
        className="rounded-lg shadow mb-8"
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {stoly.map((element) => (
          <a
            href={`/reservation/chair/${params.id}/${element.id}`}
            key={element.id}
            className={`bg-white border-2 transition-all duration-200 rounded-lg p-4 text-center shadow w-32 h-32 flex flex-col justify-center items-center text-sm ${
              element.type === "sezeni"
                ? "border-blue-500 hover:bg-blue-100"
                : "border-yellow-500 hover:bg-yellow-100"
            }`}
          >
            <h2
              className={`font-semibold mb-1 ${
                element.type === "sezeni" ? "text-blue-700" : "text-yellow-500"
              }`}
            >
              {element.name}
            </h2>
            <p className="text-gray-600">{element.price} Kč</p>
          </a>
        ))}
      </div>
    </div>
  );
}
