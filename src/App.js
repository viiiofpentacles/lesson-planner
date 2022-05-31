import React, { useState, useEffect } from 'react';
import './styles/App.css';
import './styles/form.css';
import SubjectCard from './SubjectCard';
import AddLessonForm from './AddLessonForm';
import DisplayLessonDetails from './DisplayLessonDetails';
import { sortBySubjectName, sortByAscendingDate, sortByDescendingDate } from './sort';

function App() {
  const [subjects, setSubjects] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [current, setCurrent] = useState({});
  const [showDetails, setShowDetails] = useState(false);
  
  (function getSubjects () {
    if (localStorage.length !== 0 && (subjects.length === 0)) {
      const parseStorage = JSON.parse(localStorage.getItem('lessons'));
      setSubjects(subjects.concat(parseStorage));
    }
  })();

  useEffect(() => {
    if (subjects.length !== 0) {
      localStorage.setItem('lessons', JSON.stringify(subjects));
    }
  }, [subjects])

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
    setCurrent({});
  }

  function handleSortSubjects () {
    if (document.querySelector('.current') !== null) {
      const prevSelection = document.querySelector('.current');
      prevSelection.classList.remove('current');
    }
    const sortedSubjectsArray = sortBySubjectName(subjects);
    setSubjects(sortedSubjectsArray);
    setCurrent({});
    setShowDetails(false);
  }

  function handleEnterSort (e) {
    if (e.key === 'Enter') {
      handleSortSubjects();
    }
  }

  function handleSortByDate () {
    if (document.querySelector('.current') !== null) {
      const prevSelection = document.querySelector('.current');
      prevSelection.classList.remove('current');
    }
    chooseCurrentSelection({});
    setShowDetails(false);
    let dateText= document.querySelector('.date-sorter');
    if (dateText.textContent === 'Date ▾') {
      const sortedByDatesArray = sortByAscendingDate(subjects);
      setSubjects(sortedByDatesArray);
      dateText.textContent = 'Date ▴'
    } else {
      const sortedByDatesArray = sortByDescendingDate(subjects);
      setSubjects(sortedByDatesArray);
      dateText.textContent = 'Date ▾';
    }
  }

  function handleEnterSortDate (e) {
    if (e.key === 'Enter') {
      handleSortByDate();
    }
  }

  function updateDraft () { 
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
    if (document.querySelector('.current') !== null) {
      const prevSelection = document.querySelector('.current');
      prevSelection.classList.remove('current');
    }
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

  function deleteSubject () {
    if (document.querySelector('.current') !== null) {
      const prevSelection = document.querySelector('.current');
      prevSelection.classList.remove('current');
    }
    if (subjects.length === 1 ) {
      localStorage.clear();
    };
    const filteredArray = subjects.filter((subject) => subject !== current);
    setSubjects(filteredArray);
    setShowDetails(false);
    setCurrent({});
  }

  const displaySubjects = subjects.map(((item, index) => {
    return <SubjectCard item={item} key={index} chooseCurrent={chooseCurrentSelection} toggleShow={toggleShowDetails} />
  }));

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Lesson Planning System</h1>
      </header>
      <main className='container'>
        <div className='subject-box'>
          <div className='sorter-box'>
            <div className='subject-sorter' onClick={handleSortSubjects} onKeyUp={handleEnterSort} tabIndex='0'>Subject</div>
            <div className='date-sorter' onClick={handleSortByDate} onKeyUp={handleEnterSortDate} tabIndex='0'>Date ▾</div>
          </div>
          <div className='subject-list'>
            {displaySubjects}
            {subjects.length === 0 &&
              <div className='no-plans-text'>There are no lesson plans yet.</div>
            }
          </div>
          <button className='add-subject-button' onClick={toggleAddForm}>Add</button>
        </div>
        <div className='list-add-viewer'>
          {showForm === true && 
          <AddLessonForm addToSubjectState={addToSubjectState} />
          }
          {showDetails === true &&
          <DisplayLessonDetails current={current} updateDraft={updateDraft} deleteSubject = {deleteSubject} />
          }
        </div>
      </main>
    </div>
  );
}

export default App;
