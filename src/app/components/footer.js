import Image from "next/image";
import Link from "next/link";
import { socials } from "../data/socials";

export const Socials = () => {
    return (
        <div className="mr-8 flex gap-12 text-white">
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