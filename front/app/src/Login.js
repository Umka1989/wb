import styles from './Login.module.css';

function Login (props){
    return (
        <form method="POST" action="/login" className={styles.form}>
            <h3>Логин</h3>
            <label><p>Логин</p><input type="text" name="login"/></label>
            <label><p>Пароль</p><input type="password" name="password"/></label>
            <label><p></p><input type="submit" value="Войти"/></label>
        </form>
    )
}

export default Login;
