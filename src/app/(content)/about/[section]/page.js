export default async function About({ params }) {
    const { section } = await params; 
    return (
        <div className="flex flex-1 h-full justify-center items-center">
            <h1 className="text-white font-bold">{section} </h1>
        </div>
        )
} 