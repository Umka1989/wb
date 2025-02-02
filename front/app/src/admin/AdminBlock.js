import AdminAudit from "./AdminAudit";
import AdminUsers from "./AdminUsers";
import AdminDataUpload from "./AdminDataUpload";


function AdminBlock(props){
    return (
        <ul>
            <li>
                <div>
                    <div>Пользователей</div>
                    <img></img>
                </div>
            </li>
            <li>
                <div>
                    <div>Загрузка данных</div>
                    <img></img>
                </div>
            </li>
            <li>
                <div>
                    <div>Аудит</div>
                    <img></img>
                </div>
            </li>
        </ul>
    )
}

export default AdminBlock;

