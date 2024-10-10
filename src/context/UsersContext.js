import { createContext, useReducer } from "react"
import users from "../data/users"

const initialState = { users }
//inicializando contexto com objeto vazio
const UsersContext = createContext({})

export default UsersContext
export const UsersProvider = props => {

    function reducer(state, action) {
        console.warn(action)
        return state
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        //provider que receberá lista de elementos(children)
        //disponibiliza a lista de usuário(users)
        <UsersContext.Provider value={{ state, dispatch }}>
            {props.children}
        </UsersContext.Provider>
    )
}