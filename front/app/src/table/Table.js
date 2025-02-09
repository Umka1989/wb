import TableBody from "./TableBody";
import TableHead from "./TableHead";
import './Table.css'

function Table (props){
    let headers = [];
    let data = []
    if (props.tableData){
        headers = props.tableData.headers;
        data = props.tableData.data;
    }
    return (
        <table className={'table'}>
            <TableHead headers={headers}/>
            <TableBody data={data}/>
        </table>

    )
}

export default Table;