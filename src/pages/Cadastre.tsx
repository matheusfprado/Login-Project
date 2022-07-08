import Image from 'next/image';
import Link from 'next/link';
import Nerd from '../assets/img/banner.png'
import { MailIcon } from '@heroicons/react/outline';
import { LockClosedIcon } from '@heroicons/react/outline';
import { UserIcon } from '@heroicons/react/outline';

import { useState } from 'react';
import useAuth from '../data/hooks/useAuth';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Input from '../components/Input';
import { on } from 'events';

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';




export default function Cadastre() {
  
  const [email, setEmail] = useState(null)
  const [senha, setSenha] = useState(null)
  const [Confirmsenha, ConfirmsetSenha] = useState('')
  const {cadastrar} = useAuth()
  const [name, setName] = useState(null)


  const schema = Yup.object().shape({
    email: Yup
    .string()      
    .email("Formato de email inválido")
    .required("Campo Obrigatório"),
    senha: Yup.string().required('campo obrigatório'),
    confirm_password: Yup.string()
     .oneOf([Yup.ref('senha'), null], 'senhas precisam ser iguais')
  });

  const yupOption = { resolver: yupResolver(schema)} 
  const { register, handleSubmit, formState} = useForm(yupOption);
  const {errors} = formState

  
 
  async function onSubmit(data: any) {
    try{
      if(cadastrar){
        await cadastrar(data.email, data.senha)
       }
       toast.success('cadastrado com sucesso', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
}catch (error){
      toast.error('error:error ao cadastrar', {
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
    <div className="flex justify-center items-center ">
    <div className='hidden md:flex lg:flex xl:flex'>
      <Image src={Nerd.src} layout='fill' />
   </div>
   {/* mobile fundo */}
   <div className='md:hidden fixed bg-gray-700 w-screen h-screen'></div>
   {/* mobile fundo */}
   <div className="flex relative justify-center items-center py-36">
       <div className="flex items-center justify-center md:py-20 md:px-20 sm:py-20 sm:px-20 rounded-xl bg-orange-400">
          <div className="items-center justify-center">
            <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-center items-center pt-4">
                  <Input
                  label= {<UserIcon className="w-5 h-5 text-orange-500"/>}
                  name='name'
                  id='name'
                  placeholder="Name"
                  register={register('name')}
                  type='text'
                  errors={errors}
                  />
          </div> 
          <div className="flex justify-center items-center pt-4">
                  <Input
                  label= {<MailIcon className="w-5 h-5 text-orange-500"/>}
                  name='email'
                  id='email'
                  placeholder="Email"
                  register={register('email')}
                  type='email'
                  errors={errors}
                  />
                 </div> 
                <div className="flex justify-center items-center pt-4">
                   <Input 
                    label={<LockClosedIcon className="w-5 h-5 text-orange-500" />}
                    name='senha'
                    id='senha'
                    register={register('senha')}
                    placeholder="Senha"
                    type='password'
                    errors={errors}
                    />
                 </div>
                 <div className="flex justify-center items-center pt-4">
                   <Input 
                    label={<LockClosedIcon className="w-5 h-5 text-orange-500" />}
                    name='confirm_password'
                    id='confirm_password'
                    placeholder="Confirmar senha"
                    type='password'
                    register={register('confirm_password')}
                    errors={errors}
                    />
                 </div>
                 <div className="pr-52 pt-6">
                      <Link href="/">
                          <a className="text-gray-700 hover:text-gray-100 underline">
                          Já sou cadastrado
                          </a> 
                      </Link>
                </div>      
                  <div className="flex justify-center items-center  pt-4 ">
                     <button type='submit' className="bg-gray-700 hover:bg-orange-600 w-96 h-10 px-6 py-2 rounded-lg text-white text-md font-semibold ">
                     <Link href="/">
                       Cadastar
                     </Link>
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




function isEmailValidator(value: string): boolean | Yup.ValidationError | Promise<boolean | Yup.ValidationError> {
  throw new Error('Function not implemented.');
}
   