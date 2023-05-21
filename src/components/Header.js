import logo from '../images/logo.svg';
import {Link, useNavigate} from 'react-router-dom';

export default function Header(props) {
    return (
        <header className="header">
            <div className='header__block'>
                <img src={logo} className="logo" alt="Логотип Место. Россия" />
                { (() => {
                    switch (props.page) {
                        case "auth": 
                            return <Link to="/sign-up" className="auth__login-link">Регистрация</Link>
                        case 2: 
                            return <>
                                <p>{props.email}</p>
                                <Link to="/sign-in" className="auth__login-link">Выйти</Link>
                            </>
                        default:
                            return <Link to="/sign-in" className="auth__login-link">Войти</Link>
                    }
                })()}
            </div>
        </header>
    );
};