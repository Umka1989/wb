import styles from './widget.module.css';
import '../Main.css';


function SalesWidget (props){
    return (
       <div className={'left'}>
           <div className={styles.widget}>SalesWidget</div>
       </div>
    )
}

export default SalesWidget;