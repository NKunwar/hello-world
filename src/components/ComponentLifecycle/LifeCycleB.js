import React, { Component } from 'react'

class LifeCycleB extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Naimish'
        }
        console.log('LifecycleB constructor')
    }
    
    static getDerivedStateFromProps(props, state) { // returns state or null
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifeCycleB componentDidMount')
    }

    render() {
        console.log('LifecycleB rendered')
        return (
            <div>
                Lifecycle B
            </div>
        )
    }
}

export default LifeCycleB
