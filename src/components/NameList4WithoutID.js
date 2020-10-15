import React from 'react'

function NameList4WithoutID() {

    const persons = ['Bruce', 'Diana', 'Clark']

const personList = persons.map(person => <h2 key={person}>{person}</h2>)

    return (
        <div>
            {personList}
        </div>
    )
}

export default NameList4WithoutID
