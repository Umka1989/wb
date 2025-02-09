import BackButton from './BackButton';

function AdminAudit (props){
    return (
       <div>
           <BackButton setSection={props.setSection}/>
           <div>AdminAudit</div>
       </div>
    )
}

export default AdminAudit;