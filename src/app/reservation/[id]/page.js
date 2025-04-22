"use client"
import { useParams } from "next/navigation"
import { useState } from "react"

const stoly = [

    {
        "id": 1,
        "name": "Stol 1",
        "price": 1000
    },
    {
        "id": 2,
        "name": "Stol 2",
        "price": 1000
    },
    {
        "id": 3,
        "name": "Stol 3",
        "price": 1000
    },
    {
        "id": 4,
        "name": "Stol 4",
        "price": 1000
    },
    {
        "id": 5,
        "name": "Stol 5",
        "price": 1000
    },
    {
        "id": 6,
        "name": "Stol 6",
        "price": 1000
    },

    {
        "id": 7,
        "name": "Stol 7",
        "price": 1000
    },

]




export default function Dashboard() {
    const [ahoj, setAhoj] = useState()
    const params = useParams()
    return (
        <div className="flex gap-2 ">
            {stoly.map(element => (
                <a href = {`/reservation/chair/${params.id}/${element.id}`} className="bg-black text-white w-fit p-3" key={element.name}>
                    <h2>{element.name}</h2>
                </a>
            ))}
        </div>
    )
}