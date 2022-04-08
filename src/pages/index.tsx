import Image from 'next/image';
import Link from 'next/link';
import Nerd from '../assets/img/banner.png'
import Google from '../assets/img/google.svg'
import { MailIcon } from '@heroicons/react/outline';
import { LockClosedIcon } from '@heroicons/react/outline';


import { useState } from 'react';
import useAuth from '../data/hooks/useAuth'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Input from '../components/Input';

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';





//Function é a função que vamos fazer o que esta dentro ter uma ação
export default function Home() {
  const [email, setEmail] = useState(null)
  const [senha, setSenha] = useState(null)
  const [name, setName] = useState(null)

  const {login} = useAuth()
  const {loginGoogle} = useAuth()

  const schema = Yup.object().shape({
    email: Yup
    .string()      
    .email("Formato de email inválido")
    .required("Campo Obrigatório"),
    senha: Yup.string().required('campo obrigatório'),
  });

  const yupOption = { resolver: yupResolver(schema)} 
  const { register, handleSubmit, formState} = useForm(yupOption);
  const {errors} = formState

  
 
  async function onSubmit(data: any) {
    try{
      if(login){
        await login(data.email, data.senha)
       }
       toast.success('Logado com Sucesso', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      }catch (error){
      toast.error('Email ou Senha invalidos', {
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
 <div className=" flex justify-center items-center">
   <div className='hidden md:flex lg:flex xl:flex'>
      <Image src={Nerd.src} layout='fill' />
   </div>
   {/* mobile fundo */}
   <div className='md:hidden fixed bg-gray-700 w-screen h-screen'></div>
   {/* mobile fundo */}
      <div className="flex relative md:py-34 py-44">
       <div className="flex items-center justify-center md:py-28 md:px-20 sm:py-20 sm:px-20 rounded-xl bg-orange-400 ">
          <div className="items-center justify-center" >
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-center items-center pt-4">
                  <Input
                  label={<MailIcon className="w-5 h-5 text-orange-500" />}
                  name='email'
                  id='email'
                  placeholder="E-mail"
                  register={register('email')}
                  type='email' 
                  errors={errors}
                   />
                 </div> 
                <div className="flex justify-center items-center pt-10">
                   <Input 
                    label={<LockClosedIcon className="w-5 h-5 text-orange-500" />}
                    name='senha'
                    id='senha'
                    placeholder="Senha"
                    register={register('senha')}
                    type='password' 
                    errors={errors}
                    />
                 </div>
                 <div className="lg:pr-72 lg:pt-8 md:pt-8 ">
                      <Link href="/Cadastre">
                          <a className="text-gray-700 hover:text-gray-100 underline">
                          Cadastre-se
                          </a> 
                      </Link>
                </div>      
                  <div className="flex justify-center items-center pt-4">
                     <button type='submit' className="bg-gray-700 hover:bg-gray-600 w-96 h-10 rounded-lg text-gray-200 font-semibold text-xl ">
                          Login
                     </button>
                   </div> 
                 <div className="flex justify-center items-center pt-4">
                     <button onClick={loginGoogle} className="bg-gray-800 hover:bg-gray-600 w-96 h-10  rounded-lg text-gray-200 font-normal text-xl " >
                     <span className="absolute flex px-20 py-1">
                     <Image src={Google.src} width={25} height={25}/>
                     </span>
                     Entrar com Google
                     </button>
                </div>
                 </form>
                </div>
             </div>
      </div>
 </div>
</>
  )
}


