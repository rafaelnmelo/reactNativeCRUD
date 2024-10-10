import { createContext, useReducer } from "react"
import users from "../data/users"

const initialState = { users }
//inicializando contexto com objeto vazio
const UsersContext = createContext({})

const actions = {
    deleteUser(state, action) {
        const user = action.payload
        return {
            ...state,
            users: state.users.filter(u => u.id !== user.id)
        }
    }
}

export default UsersContext
export const UsersProvider = props => {

    function reducer(state, action) {
        const fn = actions[action.type]
        return fn ? fn(state, action) : state
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