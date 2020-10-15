import React from 'react'

function ChildComponentWithoutParameters(props) {
    return (
        <div>
            <button onClick={props.handlerParent}>Greet Parent without Parameter</button>
        </div>
    )
}

export default ChildComponentWithoutParameters