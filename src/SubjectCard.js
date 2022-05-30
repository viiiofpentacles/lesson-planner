const SubjectCard = (props) => {
    function handleShowDetails (e) {
        if (document.querySelector('.current') !== null) {
            const prevSelection = document.querySelector('.current');
            prevSelection.classList.remove('current');
        }
        const selectedDiv = e.target.closest('div');
        selectedDiv.classList.add('current');
        props.chooseCurrent(props.item);
        props.toggleShow();
    }

    function handleShowDetailsOnEnter (e) {
        if (e.key === 'Enter') {
            handleShowDetails();
          }
    }

    return (
        <div key={props.index} className="subject-card" onClick={handleShowDetails} onKeyUp={handleShowDetailsOnEnter} tabIndex='0'>
        <span>{props.item.name}</span>
        <span>{props.item.date}</span>
    </div>
    );
}

export default SubjectCard;