import Image from 'next/image';

export default function Home() {
    return (
        <div className="flex flex-1 h-full justify-center items-center">
            <div className="flex flex-row w-full max-w-4xl gap-10">
                <div className="flex-1 flex justify-center items-center">
                    <Image src="/images/home_image.png" alt="Developper drawing" width={500} height={500} className="object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-center items-start text-white">
                    <h1 className="text-7xl text-yellow-500 font-bold">Salut !</h1>
                    <h2 className="text-4xl mt-2">Je suis <span className="">Benjamin</span>, un dévelopeur web basé à Paris.</h2>
                </div>
            </div>
        </div>
    )
}