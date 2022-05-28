function sortBySubjectName (subjArray) {
    const sortedSubjects = [...subjArray].sort((a, b) => {
        const subjA = a.name.toUpperCase();
        const subjB = b.name.toUpperCase();
        return (subjA < subjB) ? -1 : (subjA > subjB) ? 1 : 0;
    });
    return sortedSubjects;
}

function sortByAscendingDate (subjArray) {
    const sortedSubjectsByDate = [...subjArray].sort((a, b) => {
        const subjA = a.date.split('-').join('');
        const subjB = b.date.split('-').join('');
        return (subjA < subjB) ? -1 : (subjA > subjB) ? 1 : 0;
    });
    return sortedSubjectsByDate;
}

function sortByDescendingDate (subjArray) {
    const sortedSubjectsByDate = [...subjArray].sort((a, b) => {
        const subjA = a.date.split('-').join('');
        const subjB = b.date.split('-').join('');
        return (subjA > subjB) ? -1 : (subjA < subjB) ? 1 : 0;
    });
    return sortedSubjectsByDate;
}

export { sortBySubjectName, sortByAscendingDate, sortByDescendingDate };