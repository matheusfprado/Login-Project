import { createContext } from 'react'

interface AppContextprops {

}

const AppContext = createContext({})

export function AppProvider(props:any) {
    return (
        <AppContext.Provider value={{
            nome: 'teste API'
        }}>
          {props.children}
        </AppContext.Provider>
    )
}
export default AppContext
