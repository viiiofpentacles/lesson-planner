import { useEffect } from 'react';
import AddLessonForm from './AddLessonForm';

function DisplayLessonDetails (props) {
    useEffect(() => {
        if (props.current.draft === true) {
        const subjName = document.querySelector('.subject-name-input');
        const draft = document.querySelector('.draft-input');
        const date = document.querySelector('.date-input');
        const content = document.querySelector('.content-input');
        subjName.value = props.current.name;
        draft.checked = true;
        date.value = props.current.date;
        content.value = props.current.content;
        }
    })

    if (props.current.draft === false) {
        return (
            <div className='lesson-details-container'>
                <div>{props.current.name}</div>
                <div>{props.current.date}</div>
                <div>{props.current.content}</div>
            </div>
        )} else {
        return (
            <AddLessonForm subject={props.current} addToSubjectState={props.updateDraft} />
        )}
}

export default DisplayLessonDetails;