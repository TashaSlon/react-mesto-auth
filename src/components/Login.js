import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {authorize} from '../utils/auth.js';
import Header from './Header.js';

export default function Login() {
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
        if (!formValue.email || !formValue.password) {
            return;
        }
        const { password, email } = formValue;
        authorize(password, email)
        .then((res) => {
            if (res.token) {
                setFormValue({email: '', password: ''});
                navigate('/main', {replace: true});
              }
        })
        .catch(err => console.log(err));
    }
    const page = "auth";

    return (
        <>
            <Header page={page}/>
            <section className="auth">
                <h2 className="auth__welcome">
                Вход
                </h2>
                <form onSubmit={handleSubmit} className="auth__form">
                    <input className="auth__input" id="email" name="email" type="email" value={formValue.email} onChange={handleChange} placeholder='Email'/>
                    <input className="auth__input" id="password" name="password" type="password" value={formValue.password} onChange={handleChange} placeholder='Пароль'/>
                    <div className="auth__button-container">
                        <button type="submit" onSubmit={handleSubmit} className="auth__link">Войти</button>
                    </div>
                </form>
            </section>
        </>
    )
}