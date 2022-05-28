import React, { useState } from 'react';
import './styles/App.css';
import SubjectCard from './SubjectCard';
import AddLessonForm from './AddLessonForm';
import DisplayLessonDetails from './DisplayLessonDetails';

function App() {
  const [subjects, setSubjects] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [current, setCurrent] = useState({});
  const [showDetails, setShowDetails] = useState(false);

  function determineDraftValue () {
    const draft = document.querySelector('.draft-input');
    let draftValue = false;
    if (draft.checked) {
      draftValue = true;
    }
    return draftValue;
    }

  function addToSubjectState () {
    const subjName = document.querySelector('.subject-name-input');
    const date = document.querySelector('.date-input');
    const content = document.querySelector('.content-input');
    setSubjects(subjects.concat({
      name: subjName.value,
      draft: determineDraftValue(),
      date: date.value,
      content: content.value,
    }));
  }

  function updateDraft () { //const updatedSUbj, then setCurrent
    const subjName = document.querySelector('.subject-name-input');
    const date = document.querySelector('.date-input');
    const content = document.querySelector('.content-input');
    const filteredArray = subjects.filter((subject) => subject !== current);
    const updatedSubj = {
      name: subjName.value,
      draft: determineDraftValue(),
      date: date.value,
      content: content.value,
    }
    setSubjects(filteredArray.concat(updatedSubj));
    chooseCurrentSelection(updatedSubj);
  }

  function toggleAddForm () {
    if (showForm === false) {
      setShowForm(true);
      setShowDetails(false);
      setCurrent({});
    } else {
      setShowForm(false);
      setCurrent({});
    };
  }

  function chooseCurrentSelection (item) {
    setCurrent(item);
  }

  function toggleShowDetails () {
    if (showForm === true) {
      setShowForm(false);
    };
    setShowDetails(true);
  }

  const displaySubjects = subjects.map(((item, index) => {
    return <SubjectCard item = {item} key={index} chooseCurrent={chooseCurrentSelection} toggleShow={toggleShowDetails} />
  }));

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Lesson Planning System</h1>
      </header>
      <main className='container'>
        <div className='subject-box'>
          <div className='subject-sorter'>Subject</div><div className='date-sorter'>Date</div>
          <div className='subject-list'>
            {displaySubjects}
            </div>
          <button className='add-subject-button' onClick={toggleAddForm}>Add</button>
        </div>
        <div className='list-add-viewer'>
          {showForm === true && 
          <AddLessonForm addToSubjectState={addToSubjectState} />
          }
          {showDetails === true &&
          <DisplayLessonDetails current={current} updateDraft={updateDraft} />
          }
        </div>
      </main>
    </div>
  );
}

export default App;
