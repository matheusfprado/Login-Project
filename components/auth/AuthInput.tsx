interface AuthInputProps{
    label:string
    value:any
    required?:boolean 
    type:'text' | 'email' | 'password'
    valorMudou: (novoValor: any) => void,
    name: string,
    id: string
}
export default function AuthInput (props:AuthInputProps) {
 return (
     <div>
         <label  >{props.label}</label>
         <input 
         type={props.type}
         value={props.value}
         onChange={e => props.valorMudou?.(e.target.value)} 
         required= {props.required}
         name={props.name}
         id={props.id}
         className="bg-gray-200 w-52 h-14 text-black rounded-lg drop-shadow-2xl px-3"
         
         />
     </div>
 )
}