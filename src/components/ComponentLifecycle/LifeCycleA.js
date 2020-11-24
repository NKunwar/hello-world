import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Naimish'
        }
        console.log('LifecycleA constructor')
    }
    
    static getDerivedStateFromProps(props, state) { // returns Object that represents the updated state or null
        // rarely used method
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }

    render() {
        console.log('LifecycleA rendered')
        return (
            <div>
                Lifecycle A
                <LifeCycleB />
            </div>
        )
    }
}

export default LifeCycleA
