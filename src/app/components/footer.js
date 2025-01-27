"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL

export const Socials = () => {

    const [socials, setSocials] = useState([]);
    const [error, setError] = useState(null)

    useEffect(() => {
        // Fetch Socials
        const fetchSocials = async () => {
            try {
                const response = await fetch(`${backendUrl}/socials`)
                if (!response.ok) throw new Error("Failed to fetch socials");
                const data = await response.json()
                console.log(data)
                setSocials(data.socials)
            } catch (err) {
                setError("Failed to fetch socials")
            }
        }
        fetchSocials()
    }, [])

    return (
        <div className="m-4 flex gap-12 text-white">
            <p>Connect with me: </p>
        {socials.map((data, index) => (
            <Link key={index} href={data.url} passHref target="_blank">
                <Image
                    src={`/images/logos/${data.logoUrl}`}
                    alt={`Logo ${data.name}`}
                    width={32}
                    height={32}
                    className="w-6 cursor-pointer"
                />
            </Link>
        ))}
        </div>
    )
}