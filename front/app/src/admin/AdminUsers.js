import BackButton from './BackButton';

function AdminUsers (props){
    return (
       <div>
           <BackButton setSection={props.setSection}/>
           <div>AdminUsers</div>
       </div>
    )
}

export default AdminUsers;