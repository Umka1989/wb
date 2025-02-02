
function TableHead (props){
    let headers = [];
    props.headers.forEach((each)=>{
        headers.push(<th>{each}</th>)
    })

    return (
       <thead>
        <tr>{headers}</tr>
       </thead>
    )
}

export default TableHead;