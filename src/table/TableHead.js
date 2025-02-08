import './Table.css';

function TableHead (props){
    let headers = [];
    props.headers.forEach((each)=>{
        headers.push(<th className={'th'}>{each}</th>)
    })

    return (
       <thead className={'thead'}>
        <tr>{headers}</tr>
       </thead>
    )
}

export default TableHead;