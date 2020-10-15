import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2>
            I am {person.name} of age {person.age} with skill {person.skill} with ID {person.id}
        </h2>
        </div>
    )
}

export default Person
