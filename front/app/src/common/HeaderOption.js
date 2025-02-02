import { useNavigate } from "react-router-dom";


import '../Main.css';
import style from './HeaderOption.module.css';

function HeaderOption (props){

    const classNamesOption = 'left ' + style.option;
    let navigate = useNavigate();
    const redirectToPage = () =>{
        navigate(props.route);
    }

    return (
        <div className={classNamesOption} onClick={redirectToPage}>{props.title}</div>
    )
}

export default HeaderOption;