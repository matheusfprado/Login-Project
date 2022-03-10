import { createContext, useEffect, useState } from 'react'
import Usuario from '../../../model/Usuario'
import firebase from '../../firebase/config'
import Cookies from 'js-cookie'
import Router  from 'next/router'


interface AuthContexProps{
  usuario?: Usuario,
  carregando?:boolean,
  cadastrar?:(email:string, senha:string) =>Promise<void>
  login?:(email:string, senha:string) =>Promise<void>
  logout?: () => Promise<void>
}

const AuthContext = createContext<AuthContexProps>({})

async function usuarioNormalizado(usuarioFirebase: firebase.User): Promise<Usuario>{
  const token = await usuarioFirebase.getIdToken()
  return {
      uid:usuarioFirebase.uid,
      name:usuarioFirebase.displayName,
      email:usuarioFirebase.email,
      token,
      provedor:usuarioFirebase?.providerData[0].providerId
  }
}

function gerenciarCookie(logado: Boolean) {
    if(logado) {
        Cookies.set('Login-Project',logado, {
          expires:7  
        })
    } else {
        Cookies.remove('Login-Project')
    }
}

export function AuthProvider(props:any) {
    const [carregando, setCarregando] =useState(true)
    const [usuario, setUsuario] =useState<Usuario>()
     
    async function configurarSessao(usuarioFirebase:any) {
        if(usuarioFirebase?.email) {
            const usuario = await usuarioNormalizado(usuarioFirebase)
            setUsuario(usuario)
            gerenciarCookie(true)
            setCarregando(false)
            return usuario.email
         
        } else { 
            setUsuario(usuario)
            gerenciarCookie(false)
            setCarregando(false)
            return false
        }
    } 

    async function login(email: string, senha: string) {
      try {
        setCarregando(true)
        const resp = await firebase.auth()
            .signInWithEmailAndPassword(email, senha)

        await configurarSessao(resp.user)
        Router.push('/BemVindo')
     
    } finally {
        setCarregando(false)
    }


    }
    async function cadastrar(email: string, senha: string) {
        try{
         setCarregando(true)
         const resp = await firebase.auth()
          .createUserWithEmailAndPassword(email, senha)
  
          await configurarSessao(resp.user)
          Router.push('/')
        } catch {
            setCarregando(false)
        }
      }
    useEffect(() => {
       const cancelar = firebase.auth().onIdTokenChanged(configurarSessao)
       return () => cancelar()
    }, [])

    async function logout() {
      try {
          setCarregando(true)
          await firebase.auth().signOut()
          await configurarSessao(null)
          Router.push('/')
      } finally {
          setCarregando(false)
      }
  }

    return (
        <AuthContext.Provider value={{
            usuario,
            carregando,
            login,
            logout,
            cadastrar
        }}>
          {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContext

