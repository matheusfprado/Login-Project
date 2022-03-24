import { createContext, useEffect, useRef, useState } from 'react'
import Usuario from '../../../model/Usuario'
import firebase from '../../firebase/config'
import Cookies from 'js-cookie'
import Router  from 'next/router'
import { any } from 'prop-types'




interface AuthContexProps{
  usuario?: Usuario | null,
  carregando?:boolean,
  cadastrar?:(email:string, senha:string) =>Promise<void>
  login?:(email:string, senha:string) =>Promise<void>
  loginGoogle?: () => Promise<void>
  logout?: () => Promise<void>
}

const AuthContext = createContext<AuthContexProps>({})

async function usuarioNormalizado(usuarioFirebase: firebase.User ): Promise<Usuario>{
  const token = await usuarioFirebase.getIdToken()
  return {
      uid:usuarioFirebase.uid,
      name:usuarioFirebase.displayName,
      email:usuarioFirebase.email,
      token,
      // @ts-ignore: Object is possibly 'null'.
      provedor:usuarioFirebase.providerData[0].providerId,
      imagemUrl: usuarioFirebase.photoURL
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
    const [usuario, setUsuario] = useState(null)
     
    async function configurarSessao(usuarioFirebase:any) {
        if(usuarioFirebase?.email) {
            const usuario = await usuarioNormalizado(usuarioFirebase)
            setUsuario(null)
            gerenciarCookie(true)
            setCarregando(false)
            return usuario.email
         
        } else { 
            setUsuario(null)
            gerenciarCookie(false)
            setCarregando(false)
            Cookies.remove('Login-Project')
    
            return false
        }
    } 

    async function loginGoogle() {
        try {
            setCarregando(true)
            const resp = await firebase.auth().signInWithPopup(
                new firebase.auth.GoogleAuthProvider()
            )
    
            await configurarSessao(resp.user)
            Router.push('/BemVindo')
        } finally {
            setCarregando(false)
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

    async function logout() {
      try {
          setCarregando(true)
          await firebase.auth().signOut()
          await configurarSessao(null)
          Router.push('/')
          self.location.href='/', self.location.href
      } finally {
          setCarregando(false)
      }
  }
  useEffect(() => {
    if(Cookies.get('Login-Project')) {
        const cancelar = firebase.auth().onIdTokenChanged(configurarSessao)
        return () => cancelar() 
    } else {
        setCarregando(false)
    }
}, [])

    return (
        <AuthContext.Provider value={{
            usuario,
            carregando,
            login,
            loginGoogle,
            logout,
            cadastrar
        }}>
          {props.children}
        </AuthContext.Provider>
    )
    }
export default AuthContext



