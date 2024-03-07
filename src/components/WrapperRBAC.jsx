import useAuth from '../hook/useAuth'

export const WrapperPublicUser = ({children}) => {
    return children
}

export const WrapperAuthUser = ({children}) => {
    const { user }= useAuth()
    {
        if (user === "user" || user === "admin"){
            return <>{children}</>
        } else{
            return <div>Monkey</div>
        }

    }
}

export const WrapperAdmin = ({children}) => {
    const { user }= useAuth()
    if (user === "admin"){
        return <>{children}</>
    } else{
        return <div>Monkey</div>
    }

}