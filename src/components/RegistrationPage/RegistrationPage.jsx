import useAuth from '../../hook/useAuth'
import { Navigate } from 'react-router-dom'

const RegistrationPage = () => {
  const { signin } = useAuth()

  const submitHandler = (e) => {
    e.preventDefault()
    signin("admin", () => {<Navigate to={"/"}/>})

  }

  return (
    <div className="form__registration">
      <form onSubmit={submitHandler} className="form">
        <input name='name' type="text" placeholder='Имя'/>
        <input name="password" type="text" placeholder='Пароль'/>
        <button type='submit'>Войти</button>
      </form>
    </div>
  )
}

export default RegistrationPage