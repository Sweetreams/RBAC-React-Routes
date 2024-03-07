import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import HomePage from "./components/HomePage/HomePage"
import RegistrationPage from "./components/RegistrationPage/RegistrationPage"
import NewsPage from "./components/NewsPage/NewsPage"
import {loadingNews} from "./components/NewsPage/NewsPage"
import { WrapperAdmin, WrapperAuthUser, WrapperPublicUser } from './components/WrapperRBAC'
import AdminPage from "./components/AdminPage/AdminPage"
import {AuthProvide} from "./hoc/AuthProvide"
import StartPage from "./components/StartPage/StartPage"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path={"/"} element={<Layout/>}>

    <Route index element={<StartPage/>}/>

    <Route path="home" element={
      <WrapperAuthUser>
         <HomePage/>
      </WrapperAuthUser>
    }/>
    <Route path="reg"element={
      <WrapperPublicUser>
        <RegistrationPage/>
      </WrapperPublicUser>
    }/>
    <Route path="news" loader={loadingNews} element={
    <WrapperAuthUser>
      <NewsPage />
    </WrapperAuthUser>
    }/>
    <Route path="admin" element={
    <WrapperAdmin>
      <AdminPage/>
    </WrapperAdmin>
    }/>
  </Route>
))

// const contextValue = {...CORRECT_USER_TYPE}

function App() {
  return (
    <>
    <AuthProvide>
      <RouterProvider router={router}/>
    </AuthProvide>
    </>
  )
}

export default App
