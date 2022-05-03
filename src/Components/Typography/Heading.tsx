export interface HeadingProps{
    level: 1|2|3

    children: React.ReactNode
}

export default function Heading ({level, children}: HeadingProps){
    return <h1>
        {children}
    </h1>
}