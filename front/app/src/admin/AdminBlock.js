import React, {useState, useEffect} from 'react';

import AdminAudit from "./AdminAudit";
import AdminUsers from "./AdminUsers";
import AdminDataUpload from "./AdminDataUpload";
import SectionPicker from './SectionPicker';
import AdminScheduler from './AdminScheduler';


function AdminBlock(props){

    const [selectedSection, setSection] = useState();

    let componentToRender;

    if (selectedSection === 'audit'){
        componentToRender = <AdminAudit setSection={setSection}/>
    } else if (selectedSection === 'users'){
        componentToRender = <AdminUsers setSection={setSection}/>
    } else if (selectedSection === 'upload'){
        componentToRender = <AdminDataUpload setSection={setSection}/>
    } else if (selectedSection === 'scheduler'){
        componentToRender = <AdminDataUpload setSection={setSection}/>
    } else {
        componentToRender = <SectionPicker setSection={setSection}/>
    }

    return (
        <div>{componentToRender}</div>
    )
}

export default AdminBlock;

