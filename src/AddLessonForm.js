function AddLessonForm (props) {
    function populateDetails () { //function to populate details if draft is set to true
    }

    function handleSubmit (e) {
        e.preventDefault();
        props.addToSubjectState();
        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Subject Name
                <input className='subject-name-input' type='text' />
            </label>
            <label>
                <input className='draft-input' type='checkbox' />
                Draft
            </label>
            <label>
                Date
                <input className='date-input' type='date' />
            </label>
            <label>
                Lesson content
                <textarea className="content-input"/>
            </label>
            <button className='save-button'>Save</button>
        </form>
    );
}

export default AddLessonForm;