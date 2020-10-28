import React from 'react'
import Hello from './Hello';
// import Person from './Person';

function NameList4WithoutIDUsingIndex() {

    const persons = ['bruce', 'clark', 'diana', 'bruce']
    const personList = persons.map((person, index) => <h2 key={index}>{person} with index is {index}</h2>);
    // const pL = persons.map((person, index) => <Person person={person}></Person>)
    return (
        <div>
            {personList}
            {/* {pL} */}
        </div>
    )
}

export default NameList4WithoutIDUsingIndex