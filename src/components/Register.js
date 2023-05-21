import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { register } from '../utils/auth.js';
import Header from './Header.js';

const Register = () => {
  const [formValue, setFormValue] = useState({
    email: '',
    password: ''
  })
  const navigate = useNavigate();

  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { password, email } = formValue;
    register(password, email).then((res) => {
        navigate('/sign-in', {replace: true});
    }
    );
  }
  const page = 1;

  return (
    <>
      <Header page={page}/>
      <section className="auth">
      <h2 className="auth__welcome">
        Регистрация
      </h2>
      <form onSubmit={handleSubmit} className="auth__form">
        <input className="auth__input" id="email" name="email" type="email" value={formValue.email} onChange={handleChange} placeholder='Email'/>
        <input className="auth__input" id="password" name="password" type="password" value={formValue.password} onChange={handleChange} placeholder='Пароль'/>
        <div className="auth__button-container">
          <button type="submit" onSubmit={handleSubmit} className="auth__link">Зарегистрироваться</button>
        </div>
      </form>
      <div className="auth__signin">
        <p>Уже зарегистрированы?</p>
        <Link to="/sign-in" className="auth__login-link">Войти</Link>
      </div>
    </section>
    </>
  );
}

export default Register;