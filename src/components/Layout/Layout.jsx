import { Link, Navigate, Outlet } from 'react-router-dom'
import './layout.css'
import useAuth from '../../hook/useAuth'

const Layout = () => {
  const { user, signin }= useAuth()
  
  const handler = () => {
    signin("public user",() => <Navigate to = "/"/>)
  }

  return (
    <>
      <div className='wrapper'>
        <header className="header">
          {(user === "user" || user === "admin" )
          ? <Link to={"/home"}>Главная страница</Link> : <Navigate to={"/"}/>}

          {(user === "public user")
          ? <Link to={"/reg"}>Регистрация</Link> : <Navigate to={"/"}/>}

          {(user === "user" || user === "admin" )
          ? <Link to={"/news"}>Новости</Link> : <Navigate to={"/"}/>}

          {(user === "admin")
          ? <Link to={"/admin"}>Админ панель</Link> : <Navigate to={"/"}/>}

          {
          (user === "user" || user === "admin" )
          ? <button onClick={handler}>Выйти из аккаунта</button> : <h1></h1>}
        </header>
          <Outlet/>
      </div>
    </>
    
  )
}

export default Layout