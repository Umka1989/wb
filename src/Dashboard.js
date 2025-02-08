import React from 'react';
import {useState, useEffect} from 'react';

import Header from "./common/Header";
import Footer from "./common/Footer";
import Table from "./table/Table";
import SrcDataToggle from "./table/SrcDataToggle";


function Dashboard (props){

    const [selectedData, setSelectedData] = useState('wb');
    const [tableData, setTableData] = useState();

    const getTableData = () => {
        console.log('./dashboard/data/' + selectedData);
        fetch('./dashboard/data/' + selectedData).then(res => res.json()).then(data => {
            setTableData(data);
        });
    }

    useEffect(()=>{
        getTableData()
    }, [selectedData])

    console.log(tableData);

    return (
       <div>
           <Header />
           <SrcDataToggle setSelectedData={setSelectedData}/>
           <Table tableData={tableData}/>
       </div>
    )
}

export default Dashboard;