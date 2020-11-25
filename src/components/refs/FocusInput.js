import React, { Component } from 'react'
import { Input } from '@material-ui/core'

// Parent component of Child Component
class FocusInput extends Component {

    constructor(props) {
        super(props)
    
        this.compRef = React.createRef()
 
    }

    clickHandler = () => {
        this.compRef.current.focusInputFunc() // focusInput method defined in Child class Input.js
    }
    
    render() {
        return (
            <div>
                <Input ref = {this.compRef} />
                <button onClick = {this.clickHandler} >Focus Input</button>
            </div>
        )
    }
}

export default FocusInput
