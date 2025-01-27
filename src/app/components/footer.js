import Image from "next/image";
import Link from "next/link";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL

export const Socials = async () => {
    const response = await fetch(`${backendUrl}/socials`)
    const socials = await response.json()

    return (
        <div className="m-4 flex gap-12 text-white">
            <p>Connect with me: </p>
        {socials.data.map((data, index) => (
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