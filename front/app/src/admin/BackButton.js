
function BackButton(props){

    const handleClick = () => {
        props.setSection();
    }

    return (
        <button onClick={handleClick}>Назад</button>
    )
}

export default BackButton;
