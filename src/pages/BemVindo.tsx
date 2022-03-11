import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import useAuth from '../data/hooks/useAuth'

export function BemVindo() {
   const {logout, login} = useAuth()

   const notify = () =>{
       toast.success('usuario logado com sucesso', {
             position: "top-right",
             autoClose: 3000,
             hideProgressBar: false,
             closeOnClick: true,
             pauseOnHover: true,
             draggable: true,
             progress: undefined,
             });
   }

   if(login === login)
   {
      useEffect(() => {
         notify()
      },[])
   }
    return (
        
    <div className="bg-gray-300 w-screen h-screen">
       <ToastContainer />
        <div className="bg-gradient-to-r from-gray-800 drop-shadow-2xl">
           <div className="w-full">
           <div className="flex justify-end">
           <button onClick={logout} className="w-52 h-10 font-semibold text-xl font-sans flex cursor-pointer bg-gray-600 hover:bg-gray-800 rounded-lg drop-shadow-2xl -ml-40 pl-16 mt-6 px-28 py-1 text-gray-200">
              deslogar
          </button>  
            </div>
           </div>
        </div>
          <div className="flex justify-center py-64">
             <h1 className="font-sans text-9xl font-bold">BEM VINDO !!!</h1>
          </div>
    </div> 
        
    )
}

export default BemVindo;  