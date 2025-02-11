import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import cn from 'classnames';
import './Main.css';
import styles from './Login.module.css';

function LoginPage (props){

    const [formType, setFormType] = useState('login');
    const [login, setLogin] = useState('');
    const [psswrd, setPsswrd] = useState('');
    const [psswrdCheck, setPsswrdCheck] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const handleSendForm = () => {
        const url = formType ? './login' : './register';
        if (formType === 'register' && psswrd !== psswrdCheck){
            setErrorMessage('Введённые пароли не равны');
        } else if (formType === 'register' && (login==='' || psswrd === '' || psswrdCheck === '')) {
            setErrorMessage('Заполнены не все поля');
        } else if (formType === 'login' && (login==='' || psswrd === '' )) {
            setErrorMessage('Заполнены не все поля');
        } else {
            fetch(url, {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        'login': login,
                        'psswrd': psswrd,
                        'psswrdCheck': psswrdCheck
                    })
                }).then(res => res.ok).then(data => {
                console.log(data);
            });
        }
    }


    return (
        <div className={styles.form}>
            <div>
                <button
                    className={'left'}
                    value={'login'}
                    onClick={(e)=>setFormType(e.target.value)}
                >Логин</button>
                <button
                    className={'right'}
                    value={'register'}
                    onClick={(e)=>setFormType(e.target.value)}
                >Регистрация</button>
                <div className={'clearFix'}></div>
            </div>
            <div>
                <label><p>Логин</p><input
                    type="text"
                    name="login"
                    onChange={(e) => setLogin(e.target.value)}
                    value={login}
                /></label>
                <label><p>Пароль</p><input
                    type="password"
                    name="psswrd"
                    onChange={(e) => setPsswrd(e.target.value)}
                    value={psswrd}
                /></label>
                {formType == 'register' && <label><p>Повторите пароль</p><input
                    type="password"
                    name="psswrdCheck"
                    onChange={(e) => setPsswrdCheck(e.target.value)}
                    value={psswrdCheck}
                /></label>}
                <button onClick={handleSendForm}>Войти</button>
            </div>
        </div>
    )
}

export default LoginPage;

