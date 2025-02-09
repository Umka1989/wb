import './Table.css';

function TableBody (props){
    let rows = [];

    props.data.forEach((row)=>{
        let tableRow = [];
        row.forEach((each)=>{
            tableRow.push(<td className={'td'}>{each}</td>)
        })
        rows.push(<tr>{tableRow}</tr>)
    })

    return (
       <tbody>
       {rows}
       </tbody>
    )
}

export default TableBody;