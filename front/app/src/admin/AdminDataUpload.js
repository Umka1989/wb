import BackButton from './BackButton';

function AdminDataUpload (props){
    return (
       <div>
           <BackButton setSection={props.setSection}/>
           <div>AdminDataUpload</div>
       </div>
    )
}

export default AdminDataUpload;