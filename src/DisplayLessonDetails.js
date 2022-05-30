import { useEffect } from 'react';
import AddLessonForm from './AddLessonForm';
import { parse, format } from 'date-fns';

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

    const dateParse = parse(props.current.date, 'yyyy-MM-dd', new Date());
    const formattedDate = format(dateParse, 'dd MMM yyyy');

    if (props.current.draft === false) {
        return (
            <div className='lesson-details-container'>
                <div className='details-display'>Subject Name</div>
                <div className='generated-details'>{props.current.name}</div>
                <div className='details-display'>Date</div>
                <div className='generated-details'>{formattedDate}</div>
                <div className='details-display'>Lesson content</div>
                <div className='generated-details'>{props.current.content}</div>
            </div>
        )} else {
        return (
            <AddLessonForm subject={props.current} addToSubjectState={props.updateDraft} />
        )}
}

export default DisplayLessonDetails;