    import React from 'react'

    function NameList2WithIDData() {

        const persons = [
            {
                id: 1,
                name: 'Bruce',
                age: 30,
                skill: 'React'
            },
            {
                id: 2,
                name: 'Clark',
                age: 25,
                skill: 'Angular'
            },
            {
                id: 3,
                name: 'Diana',
                age: 28,
                skill: 'Vue'
            }
        ]

        const personList = persons.map(person => (
            <h2>
                I am {person.name} of age {person.age} with skill {person.skill} with ID {person.id}
            </h2>
        ))

        return (
            <div>
                {personList}
            </div>
        )
    }

    export default NameList2WithIDData
