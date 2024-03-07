import { createContext, useState } from 'react'

export const AuthContext = createContext(null)

export const AuthProvide = ({children}) => {
    const [user, setUser] = useState("public user")

    const signin = (user, cb) => {
        setUser(user)
        cb()
    }

    const signout = (user, cb) => {
        setUser(user)
        cb()
    }

    const value = {user, signin, signout}

  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}