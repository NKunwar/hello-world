import React, { Component } from 'react'
import LifeCycleUpdateB from './LifeCycleUpdateB'

class LifeCycleUpdateA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Naimish'
        }
        console.log('LifeCycleUpdateA constructor')
    }
    
    static getDerivedStateFromProps(props, state) { // returns Object that represents the updated state or null
        // rarely used method
        console.log('LifeCycleUpdateA getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifeCycleUpdateA componentDidMount')
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

    changeState = () => {
        this.setState({
            name: 'CodeEvolution'
        })
    }

    render() {
        console.log('LifeCycleUpdateA rendered')
        return (
            <div>
                LifeCycleUpdateA
                <button onClick={this.changeState}>Change State</button>
                <LifeCycleUpdateB />
            </div>
        )
    }
}

export default LifeCycleUpdateA
