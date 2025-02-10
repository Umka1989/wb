import React, {useState} from 'react';
import cn from 'classnames';
import './Main.css';
import styles from './Login.module.css';

function LoginPage (props){

    const [formType, setFormType] = useState('login');
    const [login, setLogin] = useState('');
    const [psswrd, setPsswrd] = useState('');
    const [psswrdCheck, setPsswrdCheck] = useState('');


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
                <button>Войти</button>
            </div>
        </div>
    )
}

export default LoginPage;

