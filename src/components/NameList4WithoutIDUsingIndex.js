import React from 'react'

function NameList4WithoutIDUsingIndex() {

    const persons = ['bruce', 'clark', 'diana', 'bruce']
const personList = persons.map((person, index) => <h2 key = {index}>{person} with index is {index}</h2>);
    return (
        <div>
            {personList}
        </div>
    )
}

export default NameList4WithoutIDUsingIndex


    const persons = ['bruce', 'clark', 'diana']
const personList = persons.map(person => <h2 key = {person}>{person}</h2>);