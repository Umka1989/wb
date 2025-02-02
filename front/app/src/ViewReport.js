import React from 'react';
import {useState, useEffect} from 'react';

import Table from "./table/Table";
import FiltersBlock from "./table/FiltersBlock";
import PaggingBlock from "./table/PaggingBlock";
import Header from "./common/Header";
import Footer from "./common/Footer";

function ViewReport (props){

    const [availableTables, setAvailableTables] = useState([]);
    const [selectedTable, setSelectedTable] = useState();
    const [tableData, setTableData] = useState();

    console.log('selectedTable');
    console.log(selectedTable);
    console.log('tableData');
    console.log(tableData);


    const loadAvailableTables = () => {
        fetch('./view_report/available_tables').then(res => res.json()).then(data => {
            setAvailableTables(data);
        });
    };


    const getTableData = () => {
        if (selectedTable) {
            console.log('./view_report/data/' + selectedTable.value);
            fetch('./view_report/data/' + selectedTable.value).then(res => res.json()).then(data => {
                setTableData(data);
            });
        }
    };

    useEffect(() => {
        loadAvailableTables();
        getTableData();
    }, [selectedTable]);


    return (
       <div>
           <Header />
           <div>
               <FiltersBlock
                   availableTables= {availableTables}
                   selectedTable= {selectedTable}
                   setSelectedTable= {setSelectedTable}
               />
               <Table tableData={tableData}/>
               <PaggingBlock />
           </div>
           <Footer />
       </div>
    )
}

export default ViewReport;