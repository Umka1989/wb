import '../Main.css';
import styles from "./SrcDataToggle.module.css";
import OpenColumnsList from "./OpenColumnsList";


function SrcDataToggle (props) {

    const handleClick = (event) => {
        props.setSelectedData(event.target.value);
    }

    return (
        <div>
            <div className={'left'}>
                <button
                    className={styles.selectionButton}
                    value='ozon'
                    onClick={handleClick}
                >Ozon</button>
                <button
                    className={styles.selectionButton}
                    value='wb'
                    onClick={handleClick}
                >WB</button>
            </div>
            <div className={'right'}>
                <button
                    className={styles.button}
                >Столбцы</button>
                <div>
                    <button className={styles.button}>Фильтры</button>
                    <OpenColumnsList />
                </div>
                <button className={styles.button}>Скачать</button>
            </div>
            <div className={'clearFix'}></div>
        </div>
    )
}

export default SrcDataToggle;