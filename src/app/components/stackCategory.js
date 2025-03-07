import clsx from "clsx"
import { stacks } from "../data/stacks"
import { Stack } from "./stack"

export const StackCategory = ({ id, name }) => {

    const filteredStacks = stacks.filter(data => data.category === id)

    const container = "bg-inherit flex flex-col h-full w-60 justify-start items-start mx-3 mb-6"
    const titleStyle = "text-yellow-500 font-bold";
    const stacksContainer ="flex flex-col justify-start items-start h-auto w-full gap-6" 

    return (
        <div className={container}>
            <h2 className={clsx(titleStyle, "text-2xl mb-3")}>{name}</h2>
            <div className={stacksContainer}>
                {filteredStacks.map((data, i) => {
                    return (
                        <Stack 
                        key={i}
                        name={data.name}
                        logo_url={data.logo}
                        level={data.level}
                        isLevelDisplayed={data.isLevelDisplayed}
                        />
                    )
                })}
            </div>
        </div>
    )

}