import { InputHTMLAttributes } from 'react'
import * as I from './input.styles'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>{

    label?: string
}

export default function Input({label, ...props}: InputProps){
return <I.Wrapper>

   { label &&   
    <span>
        {label}
        </span>
     }

   <input 
   id='name'
   placeholder='Digite'
   {...props}
   type = "text"
   />


</I.Wrapper>

}