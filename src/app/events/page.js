export default function Events(){
    const events = [
    { id: 1, name: "Koncert Ed Sheeran", date:"20. června 2025"},
    { id: 2, name: "Koncert Lil Uzi", date:"4. května 2025"},
    { id: 3, name: "Koncert Cashanova:",date:"8. července 2025"},
    ];
    return(
        <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
            <header className="bg-blue-600 text-white p-4 text-center text-2xl font-bold">¨
                Nadcházející akce v O₂ Aréně
            </header>
            <div className="max-w-2xl mx-auto mt-6 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font bold mb-4">Program</h2>
                 <ul>
                     {events.map((event) => (
                        <li key={event.id} className="p-3 border-b last:border-none">¨
                        <span className="font-semibold">{event.name}</span> – {event.date}

                        </li>
                     ))}
                 </ul>
            </div>
        </div>
    );

}