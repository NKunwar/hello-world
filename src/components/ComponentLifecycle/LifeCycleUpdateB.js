import React, { Component } from 'react'

class LifeCycleUpdateB extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Naimish'
        }
        console.log('LifeCycleUpdateB constructor')
    }
    
    static getDerivedStateFromProps(props, state) { // returns state or null
        console.log('LifeCycleUpdateB getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifeCycleUpdateB componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifeCycleUpdateA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, nextState) {
        console.log('LifeCycleUpdateA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifeCycleUpdateA componentDidUpdate')
    }

    render() {
        console.log('LifeCycleUpdateB rendered')
        return (
            <div>
                LifeCycleUpdateB
            </div>
        )
    }
}

export default LifeCycleUpdateB
