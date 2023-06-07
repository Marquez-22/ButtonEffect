import { CSSProperties, MouseEventHandler, ReactNode, useState } from "react"

type ButtonEffectType = "ButtonEffect1"

interface ButtonEffectProps {
    type?: ButtonEffectType
    children?: ReactNode
    className?: string
}

export const ButtonEffect = ({ type = "ButtonEffect1", children, className = "" }: ButtonEffectProps) => {
    const [active, setActive] = useState(false)
    const [top, settop] = useState(0)
    const [left, setleft] = useState(0)
    const onClick : MouseEventHandler<HTMLButtonElement> = async (e) => {
        setActive(true)
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        settop(e.clientY - rect.top)
        setleft(e.clientX - rect.left)
        await new Promise((r) => setTimeout(r, 500));
        setActive(false)
    }
    return (<>
        <button className={`ButtonEffect ${active ? "active" : ""} ${type} ${className}`}
            style={{
                ["--top"]: `${top}px`,
                ["--left"]: `${left}px`,
            } as CSSProperties}
            onClick={onClick}>
            {children}
            <div className="capa">

            </div>


        </button>
    </>)
}