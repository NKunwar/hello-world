import React, { Component } from 'react'
import ChildComponentWithoutParameters from './ChildComponentWithoutParameters'

class ParentComponentWithoutParameters extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             parentCompName: 'Parent Component'
        }

        this.greetParentComp = this.greetParentComp.bind(this)

    }
    
    greetParentComp() {
        alert(`Hello ${this.state.parentCompName}`)
    }
    
    render() {
        return (
            <div>
                <ChildComponentWithoutParameters handlerParent={this.greetParentComp} />
            </div>
        )
    }
}

export default ParentComponentWithoutParameters
