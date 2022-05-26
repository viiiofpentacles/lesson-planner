import React, { useState } from 'react';
import './styles/App.css';
import SubjectsFolder from './SubjectsFolder';
import AddLessonForm from './AddLessonForm';

function App() {
  const [subjects, setSubjects] = useState([
    {
      name: 'Math',
      date: '25 May 2022',
      content: '',
      draft: false,
    },
  ]);
  const [showForm, setShowForm] = useState(false);

  function addToSubjectState () {
    const subjName = document.querySelector('.subject-name-input');
    const draft = document.querySelector('.draft-input');
    const determineDraftValue = () => {
      let draftValue = false;
      if (draft.checked) {
        draftValue = true;
      }
      return draftValue;
    }
    const date = document.querySelector('.date-input');
    const content = document.querySelector('.content-input');
    setSubjects(subjects.concat({
      name: subjName.value,
      draft: determineDraftValue(),
      date: date.value,
      content: content.value,
    }));
  }

  function toggleAddForm () {
    if (showForm === false) {
      setShowForm(true);
    } else {
      setShowForm(false);
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        Lesson Planning System
      </header>
      <main className='container'>
        <div className='subject-box'>
          <div className='subject-sorter'>Subject</div><div className='date-sorter'>Date</div>
          <div className='subject-list'>
            <SubjectsFolder subjects = {subjects} />
            </div>
          <button className='add-subject-button' onClick={toggleAddForm}>Add</button>
        </div>
        <div className='list-add-viewer' />
        {showForm === true && 
        <AddLessonForm addToSubjectState = {addToSubjectState} />
        }
      </main>
    </div>
  );
}

export default App;
