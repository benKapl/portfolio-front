"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();

    const container = "flex flex-1 h-full w-full justify-start items-center"
    const homeContent = "flex flex-col items-center md:flex-row gap-10 mx-20 md:mx-24 lg:mx-32"
    const titleContainer = "flex-1 flex flex-col justify-center items-center md:items-start text-white"
    return (
        <div className={container}>
            <div className={homeContent}>
                <Image 
                    src="/images/home_image.png" 
                    alt="Developper drawing" 
                    width={200} 
                    height={200} 
                    className="md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]" 
                    onClick={() => router.push("/about/bio")}/>
                <div className={titleContainer}>
                    <h1 className="text-7xl text-yellow-500 font-bold">Hello !</h1>
                    <h2 className="text-4xl mt-2 text-center md:text-left">Je suis Benjamin, un développeur web <span className="italic">backend</span> basé à Paris.</h2>
                </div>
            </div>
        </div>
    )
}