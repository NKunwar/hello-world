import React, { Component } from 'react'

// Child component of Parent Component
class Input extends Component {

    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        // this.state = {}
    }
    
    focusInputFunc() {  // called in Parent Component
        this.inputRef.current.focus()
    }

    render() {
        return (
            <div>
                <input type = "text" ref = {this.inputRef} />   
            </div>
        )
    }
}

export default Input
