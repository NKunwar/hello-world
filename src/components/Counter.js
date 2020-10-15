import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    increament() {
        // this.setState ({
        //     count: this.state.count + 1
        // }, () => {console.log('Syncronous call via Callback: ', this.state.count)}) // Whenever we need to execute some code after state has been changed then only use callback function
        
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }), () => console.log('in callback', this.state.count) ) // when you have to update the state based on the previous state then pass FUNCTION as an arguement rather than passing the object
        
        
        console.log(this.state.count); // here its asyncronous
    }

    increamentFive() {
        this.increament()
        this.increament()
        this.increament()
        this.increament()
        this.increament()
    }

    render() {
        return (
            <div>
                <div>
                    Count - {this.state.count}
                </div>
                <button onClick = {() => this.increamentFive()}>Increament</button>
            </div>
        )
    }
}

export default Counter