import '../Main.css';
import SrcDataToggle from './SrcDataToggle';
import SrcTablePicker from "./SrcTablePicker";
import React from "react";


function FiltersBlock (props){

    return (
        <div>
            <div className={'left'}>
                { /* <SrcDataToggle /> */ }
                <SrcTablePicker
                    availableTables={props.availableTables}
                    selectedTable= {props.selectedTable}
                    setSelectedTable= {props.setSelectedTable}
                />
            </div>
            <div className={'right'}>
                <button>Столбцы</button>
                <button>Фильтры</button>
                <button>Скачать</button>
            </div>
            <div className={'clearFix'}></div>
        </div>

    )
}

export default FiltersBlock;
