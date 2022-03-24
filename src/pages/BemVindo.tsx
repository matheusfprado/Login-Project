import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'

import Image from "next/image"
import Exit from "../assets/img/logout.svg"
import Perfil from "../assets/img/perfil.svg"

//import Perfil from "../../components/meuperfil"

import useAuth from "../data/hooks/useAuth";
import { isContext } from "vm";

 const navigation = [
   { name: 'Home', href: '/BemVindo', current: true },
   { name: 'Team', href: '#', current: false },
   { name: 'Projects', href: '#', current: false },
   { name: 'Calendar', href: '#', current: false },
   { name: 'Reports', href: '#', current: false },
  ]
  const userNavigation = [
    { name: 'Meu Perfil', href: '/Perfil' },
    { name: 'Configuração', href: '#' }
  ]
  
  
  export default function BemVindo() {
    const {usuario, logout, login} = useAuth()
    const userData = usuario
  console.log(userData)
      
      //  useEffect(() => {
      //   const notify = () =>{
      //     toast.success('usuario logado com sucesso', {
      //           position: "top-right", 
      //           theme: 'dark',
      //           autoClose: 20,
      //           hideProgressBar: false,
      //           closeOnClick: true,
      //           pauseOnHover: false,
      //           draggable: true,
      //           progress: undefined,
                
      //           });
      // }
      //  },[login])
    
      
    return (
     <>
     <ToastContainer />
      <div className="min-h-full">
               <Disclosure as="nav" className="bg-gray-600">
                 {({}) => (
                   <>
                     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                       <div className="flex items-center justify-between h-16">
                         <div className="flex items-center">
                           <div className="flex-shrink-0">
                           </div>
                           <div className="hidden md:block">
                             <div className="ml-10 flex items-baseline space-x-4">
                               {navigation.map((item) => (
                                 <a
                                   key={item.name}
                                   href={item.href}
                                   className='bg-gray-800 text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                                   aria-current={item.current ? 'page' : undefined}
                                  >
                                   {item.name}
                                 </a>
                               ))}
                             </div>
                           </div>
                         </div>
                         <div className="hidden md:block">
                           <div className="ml-4 flex items-center md:ml-6 text-white">                      
                            <div className="font-normal mt-2 -ml-28 text-gray-300">
                            <span>{userData?.email}</span>
                            </div>
                             {/* Profile dropdown */}
                             <Menu as="div" className="ml-3 relative mt-1">
                               <div>
                                 <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none  focus:ring-white">
                                   <img className="h-12 w-12 rounded-full" src={userData?.imagemUrl || Perfil.src} alt="foto de perfil" />
                                 </Menu.Button>
                               </div>
                               <Transition
                                 as={Fragment}
                                 enter="transition ease-out duration-100"
                                 enterFrom="transform opacity-0 scale-95"
                                 enterTo="transform opacity-100 scale-100"
                                 leave="transition ease-in duration-75"
                                 leaveFrom="transform opacity-100 scale-100"
                                 leaveTo="transform opacity-0 scale-95">
                                 <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                   {userNavigation.map((item) => (
                                     <Menu.Item key={item.name}>
                                       {({}) => (
                                         <a
                                           href={item.href}
                                           className='bg-gray-100 block px-4 py-2 text-sm text-gray-700'>
                                           {item.name}
                                        </a>
                                       )}
                                     </Menu.Item>
                                   ))}
                                 </Menu.Items>
                               </Transition>
                               <div className="ml-14 -mt-8 ">
                                   <button onClick={logout} ><Image src={Exit.src} width={25} height={25}/></button>
                               </div>
                             </Menu>
                           </div>
                         </div>
                         <div className="-mr-2 flex md:hidden">
                           {/* Mobile menu button */}
                           <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                             <span className="sr-only">Open main menu</span>
                             
                           </Disclosure.Button>
                         </div>
                       </div>
                     </div>
       
                     <Disclosure.Panel className="md:hidden">
                       <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                         {navigation.map((item) => (
                           <Disclosure.Button
                             key={item.name}
                             as="a"
                             href={item.href}
                             aria-current={item.current ? 'page' : undefined}
                           >
                             {item.name}
                           </Disclosure.Button>
                         ))}
                       </div>
                       <div className="pt-4 pb-3 border-t border-gray-700">
                         <div className="flex items-center px-5">
                           <div className="flex justify-center">
                             <img className="h-10 w-10 rounded-full" src={userData?.imagemUrl || Perfil.src} alt="foto de perfil" />
                           </div>
                           <div className="ml-3">
                             <div className="text-base font-medium leading-none text-white">{userData?.name}</div>
                             <div className="text-sm font-medium leading-none text-gray-400">{userData?.email}</div>
                             <button onClick={logout} ><Image src={Exit.src} width={25} height={25}/></button>
                           </div>
                           <button
                             type="button"
                             className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                           >
                             <span className="sr-only">View notifications</span>
                             
                           </button>
                         </div>
                         <div className="mt-3 px-2 space-y-1">
                           {userNavigation.map((item) => (
                             <Disclosure.Button
                               key={item.name}
                               as="a"
                               href={item.href}
                               className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">
                                
                               {item.name}
                             </Disclosure.Button>
                           ))}
                         </div>
                       </div>
                     </Disclosure.Panel>
                   </>
                 )}
               </Disclosure>
               <header className="bg-white shadow">                  
               </header>
               <main>
                 <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                   <div className="px-4 py-6 sm:px-0">
                     <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
                   </div>
                 </div>
               </main>
             </div>
             </> 
        )
}


