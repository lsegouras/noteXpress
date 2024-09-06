import Form from '../components/Form'
import '../styles/Register.css'

const Register = () => {
  return (
    <div className="register-container">
      <div className="form-container">
        <Form route="/api/user/register/" method="register" />
      </div>
    </div>
  )
}

export default Register
