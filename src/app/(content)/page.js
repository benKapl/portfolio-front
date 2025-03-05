import Image from 'next/image';

export default function Home() {

    const container = "flex flex-1 h-full w-full justify-start items-center"
    const titleContainer = "flex-1 flex flex-col justify-center items-start text-white"
    return (
        <div className={container}>
            <div className="flex flex-row gap-10 mx-16">
                <Image src="/images/home_image.png" alt="Developper drawing" width={400} height={400} className="hidden md:block w-[400px]" />
                <div className={titleContainer}>
                    <h1 className="text-7xl text-yellow-500 font-bold">Hello !</h1>
                    <h2 className="text-4xl mt-2">Je suis <span className="">Benjamin</span>, un développeur web backend basé à Paris.</h2>
                </div>
            </div>
        </div>
    )
}