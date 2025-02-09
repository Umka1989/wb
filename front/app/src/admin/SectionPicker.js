
function SectionPicker(props){

    const handleClick = (event) => {
        props.setSection(event.target.value);
    }

    return (
        <ul>
            <li>
                <button value={'users'} onClick={handleClick}>Пользователи</button>
            </li>
            <li>
                <button value={'upload'} onClick={handleClick}>Загрузка данных</button>
            </li>
            <li>
                <button value={'audit'} onClick={handleClick}>Аудит</button>
            </li>
        </ul>
    )
}

export default SectionPicker;

