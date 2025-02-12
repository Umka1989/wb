import React, {useEffect, useState} from 'react';
import BackButton from './BackButton';
import DeleteUserButton from './DeleteUserButton';

import styles from './Admin.module.css';

function AdminUsers (props){

    const [usersList, setUsersList] = useState([]);
    let usersListToShow = [];

    const loadUsers = () => {

        fetch('./users/').then(res => res.json()).then(data => {
            setUsersList(data);
        });
    };

    useEffect(() => {
        loadUsers();
    }, []);

    if (usersList['data'].length > 0){
        usersList['data'].forEach((each)=>{
            usersListToShow.push(<tr>
                <td>{each[0] === null ? '-' : each[0]}</td>
                <td>{each[1] === null ? '-' : each[1]}</td>
                <td>{each[2] === null ? '-' : each[2]}</td>
                <td>{each[3] === null ? '-' : each[3]}</td>
                <td>{each[4] === null ? '-' : each[4]}</td>
                <td>{each[5] === null ? '-' : each[5]}</td>
                <td>{each[6] === null ? '-' : each[6]}</td>
                <td>{each[7] === null ? '-' : each[7]}</td>
                <td><a href={'./user_card'}>{each[1]}</a></td>
                <td><DeleteUserButton userId={each[0]}/></td>
            </tr>)
        })
    }

    return (
       <div>
           <BackButton setSection={props.setSection}/>
           <div>AdminUsers</div>
           <table>
               <thead><tr>
                   <th>Идентификатор</th>
                   <th>Логин</th>
                   <th>Фамилия</th>
                   <th>Имя</th>
                   <th>Отчество</th>
                   <th title={'Показывает прошёл ли пользователь регистрацию на сайте'}>Флаг регистрации</th>
                   <th>Роль</th>
                   <th title={'Показывает был ли удалён профиль пользователя'}>Флаг удаления</th>
                   <th>Ссылка на профиль пользователя</th>
                   <th>Удаление пользователя</th>
               </tr></thead>
               <tbody>{usersListToShow}</tbody>
           </table>
       </div>
    )
}

export default AdminUsers;