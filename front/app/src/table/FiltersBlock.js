import React from "react";
import '../Main.css';
import styles from "./FiltersBlock.module.css";

import SrcTablePicker from "./SrcTablePicker";


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
                <button
                    className={styles.button}
                >Столбцы</button>
                <button className={styles.button}>Фильтры</button>
                <button className={styles.button}>Скачать</button>
            </div>
            <div className={'clearFix'}></div>
        </div>

    )
}

export default FiltersBlock;