import React from 'react';
import {useState} from 'react';
import Select from 'react-select';

function SrcTablePicker (props){

    let availableTables = props.availableTables;
    let options = [];

    if (availableTables){
        availableTables.forEach((each)=>{
            options.push({
                value: each[0],
                label: each[1]
            })
        })
    }
    let component;

    if (props.selectedTable) {
        component = <Select
               options={options}
               onChange={() => props.setSelectedTable()}
               defaultValue={props.selectedTable}
           />
    } else {
        component = <Select
               options={options}
               onChange={props.setSelectedTable}
           />
    }

    return (
       <div>{component}</div>
    )
}

export default SrcTablePicker;