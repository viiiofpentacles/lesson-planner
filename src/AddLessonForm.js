function AddLessonForm (props) {
    function handleSubmit (e) {
        e.preventDefault();
        props.addToSubjectState();
        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='name-draft-input'>
                <label className='name-label-box'>
                    Subject Name
                    <input className='subject-name-input' type='text' required/>
                </label>
                <label className='checkbox-label'>
                    <input className='draft-input' type='checkbox' />
                    Draft
                </label>
            </div>
            <label className='date-label-box'>
                Date
                <input className='date-input' type='date' required/>
            </label>
            <label className='content-label-box'>
                Lesson content
                <textarea className="content-input" required/>
            </label>
            <button className='save-button'>Save</button>
        </form>
    );
}

export default AddLessonForm;