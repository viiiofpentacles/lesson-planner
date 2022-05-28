function AddLessonForm (props) {
    function handleSubmit (e) {
        e.preventDefault();
        props.addToSubjectState();
        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Subject Name
                <input className='subject-name-input' type='text' required/>
            </label>
            <label>
                <input className='draft-input' type='checkbox' />
                Draft
            </label>
            <label>
                Date
                <input className='date-input' type='date' required/>
            </label>
            <label>
                Lesson content
                <textarea className="content-input" required/>
            </label>
            <button className='save-button'>Save</button>
        </form>
    );
}

export default AddLessonForm;