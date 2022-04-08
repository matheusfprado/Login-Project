import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'


import Image from "next/image"
import { LogoutIcon } from "@heroicons/react/outline";
import { ViewListIcon } from "@heroicons/react/outline";
import Perfil from "../assets/img/perfil.svg"
import Swiper from '../components/Swiper';


//import Perfil from "../../components/meuperfil"

import useAuth from "../data/hooks/useAuth"
import Promotions from '../components/Promotions';




 const navigation = [
   { name: 'Home', href: '/BemVindo', current: true },
   { name: 'loja', href: '#', current: false },
   { name: 'Animes', href: '#', current: false },
   { name: 'Series', href: '#', current: false },
   { name: 'Filmes', href: '#', current: false },
  ]
  const userNavigation = [
    { name: 'Meu Perfil', href: '/Perfil' },
    { name: 'Configuração', href: '#' }
  ]
  
  
  export default function BemVindo() {
    const {usuario, logout} = useAuth()
    const userData = usuario
    return (
     <>
     <ToastContainer />
      <div className="min-h-full">
               <Disclosure as="nav" className="bg-orange-400">
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
                                   className='px-2 py-2 rounded-md text-sm font-medium'
                                   
                                   aria-current={item.current ? 'page' : undefined}
                                  >
                                   {item.name}
                                 </a>
                               ))}
                             </div>
                           </div>
                         </div>
                         <div className="hidden md:block">
                           <div className=" flex items-center md:ml-6 text-gray-200">                      
                            <div className="font-normal text-gray-800 ">
                            <span>{userData?.email}</span>
                            </div>
                             {/* Profile dropdown */}
                             <Menu as="div" className="relative flex px-2">
                               <div className="flex flex-col" >
                                 <Menu.Button className="max-w-xs bg-gray-800 rounded-full text-sm focus:outline-none focus:ring-white">
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
                                 <Menu.Items className="origin-top-right absolute right-14 w-48 rounded-md shadow-lg py-2 ring-1 bg-gray-200 ">
                                   <div className="relative flex justify-end"> 
                                       <button onClick={logout} ><LogoutIcon className="w-5 h-5 text-gray-800"/></button>
                                    </div>
                                   {userNavigation.map((item) => (
                                     <Menu.Item key={item.name}>
                                       {({}) => (
                                         <a
                                           href={item.href}
                                           className=' bg-gray-200 block px-4 py-1 text-sm text-gray-800'>
                                           {item.name}
                                        </a>
                                       )}
                                     </Menu.Item>
                                   ))}
                                 </Menu.Items>
                               </Transition>
                             </Menu>
                           </div>
                         </div>
                         <div className="-mr-2 flex md:hidden">
                           {/* Mobile menu button */}
                           <Disclosure.Button className=" inline-flex items-center justify-center">
                             <span className="w-8 h-8 text-gray-800 "><ViewListIcon/></span>
                             
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
                             <div className="text-base font-medium leading-none text-gray-800">{userData?.name}</div>
                             <div className="text-sm font-medium leading-none text-gray-800">{userData?.email}</div>
                             <button onClick={logout} ><LogoutIcon className="w-6 h-6 text-gray-800"/></button>
                           </div>
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
                <div className='bg-gray-800  w-full h-full'>
               <div className=" pt-10 px-8 ">
               <Swiper/>
               <Promotions/>
               </div>
              </div> 
             </div>
             </> 
        )
}


