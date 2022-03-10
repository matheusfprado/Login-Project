import Image from 'next/image';
import Paisagem from '../../src/assets/img/Paisagem.png';
import Link from 'next/link';
import AuthInput from '../../components/auth/AuthInput'
import { useState } from 'react';
import useAuth from '../data/hooks/useAuth'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Function é a função que vamos fazer o que esta dentro ter uma ação
export function Home() {
// Const é uma variavel que usamos para construir a função 
// Aqui por exemplo estamos construindo a função 
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const {login} = useAuth()
  
// Aqui com o async na frente de function signfica que vamos ter uma função assincrona, podemos dizer que sao mutiplas execuçoes
  async function submeter() {
// O try catch vem para dizer assim se login executar email e senha de 'login' ok 
    try {
//Se if for login, execute email e senha 
        if (login) {
// E o await é responsavel em fazer as multiplas executações serem respeitadas uma de cada vez
          await login(email, senha)
        } 
// Se houver algum erro me execute o erro 
    } catch(e) {
      toast.error('error: e-mail ou senha invalidos', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
}
  return (
  <>
<ToastContainer />
<div className="flex lg:bg-gray-100  lg:w-screen lg:h-screen">
      <Image src={Paisagem.src} alt='Paisagem' width={900} height={900} className="sm:hidden "/>
  <div className="flex px-4 md:-mt-20 xl:mt-0 lg:mt-0">
    <div className="flex box-border rounded-lg bg-gray-50 shadow-2xl shadow-gray-500/40 w-96 h-40 px-72 py-64 xl:mt-36 lg:mt-8 mt-52  ">
      <div className="-ml-20 -mt-40">
        <h1 className="text-black whitespace-nowrap font-extrabold text-xl font-sans ">Faça Seu Login</h1>
      </div> 
      <div className="flex flex-col justify-center -ml-36 -mt-20"> 
           <div>
            <AuthInput 
                     label="email"
                     name='email'
                     id='email'
                     value={email}
                     valorMudou={setEmail} 
                     type='email'
                     obrigatorio />
           </div>
            <div className='mt-6'>
            <AuthInput 
                    label="senha"
                    name='senha'
                    id='senha'
                    value={senha}
                    valorMudou={setSenha} 
                    type='password'
                    obrigatorio/>
          </div>
          </div>      
          <div className="flex flex-col justify-center pt-14 -ml-52">
            <button className="w-52 h-10  bg-gray-600 hover:bg-gray-800 rounded-lg drop-shadow-2xl px-28 py-1">
              <Link href="/Cadastre">
                  <a className="font-semibold cursor-pointer text-xl font-sans flex justify-center whitespace-nowrap text-gray-200">
                     Cadastre-se
                  </a> 
              </Link>
            </button>  
          </div>
          <div className='flex flex-col  justify-center pt-28 -ml-56'>
                <button onClick={submeter}  className="w-52 h-10  bg-gray-600 hover:bg-gray-800 rounded-lg drop-shadow-2xl px-28 py-1 ">
                  <a className='font-semibold text-xl font-sans flex justify-center text-gray-200'>
                  Login
                  </a> 
                </button>
              </div> 
          </div>
    </div>
  </div>
</>
  )
}
export default Home;

function exibirErro(arg0: any) {
  throw new Error('Function not implemented.');
}
