import { Link } from 'react-router-dom'
import Form from '../components/Form'
import '../styles/Login.css'

const Login = () => {
  return (
    <div className="login-container">
      <div className="form-container">
        <Form route="/api/token/" method="login" />
        <p className="register-link">
          Ainda não tem uma conta? <Link to="/register">Registre-se aqui</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
