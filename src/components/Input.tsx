import { useState } from "react"
import { ExclamationCircleIcon, EyeIcon } from "@heroicons/react/outline"
import { EyeOffIcon } from "@heroicons/react/outline"

type InputProps = {
name: string,
id: string,
type: string,
register?: {},
errors: object | any,
placeholder?: string,
value?: string,
label?: any,
valorMudou?: (novoValor: any) => void
}

export default function Input({name, id, type, value, placeholder, label, register, errors, valorMudou }: InputProps){
    const [state, setState] = useState(false)
    const handleClick = () =>{
        setState(!state)
    }
    return(
     <div>
        
      <div className="relative">
      <input 
      {...register}
      name={name}
      id={id}
      type={!state ? type : "text"}
      value={value}
      placeholder={placeholder}
     
      onChange={e => valorMudou?.(e.target.value)} 
      className="appearance-none xl:block md:w-96 md:h-10 xl:px-6 xl:py-2 px-6 w-80 h-7 border  border-orange-400 bg-gray-50 rounded-md shadow-sm placeholder-gray-500  sm:text-sm" 
      />   
      <div className="absolute inset-y-0 right-0  md:pr-3 flex items-center">
      {type === 'password' && 
      <button
      onClick={handleClick}
      >{!state ? <EyeIcon className="w-5 h-5 text-orange-500"/> : <EyeOffIcon className="w-5 h-5 text-orange-500"/> }</button>
      }
      </div>
      <div className="absolute inset-y-0 xl:px-1 flex items-center">
             <label>
               {label}
             </label>
         </div>
    </div>  
    <p className='absolute mt-2 text-sm text-gray-600 '>
            {errors[name]?.message && (
            <div className='inset-y-0 right-0 pr-3 flex items-center pointer-events-none font-normal gap-x-6'>
            <div className='-mt-4'> <ExclamationCircleIcon className='h-5 w-5 text-gray-500 bg-trasparent mr-3 absolute' aria-hidden='true' /></div>
             <div className='relative '>{errors[name]?.message}</div>
            </div>)}
        </p>
     </div>
    )
}