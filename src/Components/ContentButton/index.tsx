import { ReactNode } from "react"
import { ButtonEffect } from "../ButtonEffect"

type ContentButtonType = "ContentButton1"

interface ContentButtonProps {
    type?: ContentButtonType
   
    className?: string
    
}

export const ContentButton= ({ type = "ContentButton1", className = "" }: ContentButtonProps) => {
    return (<>
        <div className={`ContentButton ${type} ${className}`} >
           
            <ButtonEffect>
                Click Me
            </ButtonEffect>

        </div>
    </>)
}