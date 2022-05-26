const SubjectCard = (props) => {
    function handleShowDetails () {
        props.chooseCurrent(props.item);
        props.toggleShow();
    }

    return (
        <div key={props.index} className="subject-card" onClick={handleShowDetails}>
        <div>{props.item.name}</div>
        <div>{props.item.date}</div>
    </div>
    );
}

export default SubjectCard;