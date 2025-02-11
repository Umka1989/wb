import React, {useState} from 'react';
import BackButton from './BackButton';

function AdminUsers (props){

    const [usersList, setUsersList] = useState([]);
    let usersListToShow = [];

    if (usersList.length > 0){
        usersList.forEach((each)=>{
            console.log(each);
        })
    }

    return (
       <div>
           <BackButton setSection={props.setSection}/>
           <div>AdminUsers</div>
           <ul>


           </ul>
       </div>
    )
}

export default AdminUsers;