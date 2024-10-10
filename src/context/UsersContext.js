import { createContext } from "react"
import users from "../data/users"

//inicializando contexto com objeto vazio
const UsersContext = createContext({})

export default UsersContext
export const UsersProvider = props => {
    return (
        //provider que receberá lista de elementos(children)
        //disponibiliza a lista de usuário(users)
        <UsersContext.Provider value={{ state: {users} }}>
            {props.children}
        </UsersContext.Provider>
    )
}