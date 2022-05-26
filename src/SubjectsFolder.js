const SubjectsFolder = (props) => {

    const displaySubjects = 
        props?.subjects.map((item => {
        return (
            <div className="subject-card">
                <div>{item.name}</div>
                <div>{item.date}</div>
            </div>
        )
        }));

    return (
        <div className="subject-cards-container">
            {displaySubjects}
        </div>
    );
}

export default SubjectsFolder;