import TableBody from "./TableBody";
import TableHead from "./TableHead";
import styles from "./Table.module.css";

function Table (props){
    let headers = [];
    let data = []
    if (props.tableData){
        headers = props.tableData.headers;
        data = props.tableData.data;
    }
    return (
        <table>
            <TableHead headers={headers}/>
            <TableBody data={data}/>
        </table>

    )
}

export default Table;