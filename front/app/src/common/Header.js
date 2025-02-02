import HeaderOption from "./HeaderOption";
import '../Main.css';
import headerStyles from './Header.module.css';
import optionStyles from './HeaderOption.module.css';

function Header (props){

    const userInfoClassNames = 'right ' + optionStyles.option;

    return (
       <div className={headerStyles.header}>
           <HeaderOption route={'/'} title={'Главная'}/>
           <HeaderOption route={'/view_report'} title={'Исходные данные'}/>
           <HeaderOption route={'/dashboard'} title={'Отчёт'}/>
           <HeaderOption route={'/upload_data'} title={'Загрузить данные'}/>
           <div className={userInfoClassNames}>Данные о пользователе</div>
           <div className={'clearFix'}></div>
       </div>
    )
}

export default Header;