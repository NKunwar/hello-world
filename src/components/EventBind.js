import React, { Component } from 'react'

class EventBind extends Component {

constructor(props) {
    super(props)

    this.state = {
         message: 'Hello'
    }

    this.clickHandler = this.clickHandler.bind(this); {/* Approach 3 */}

}

// clickHandler() {
//     this.setState({
//         message: 'Goodbye'
//     })
//     console.log(this);
// }

    // clickHandler = () => { //This is Approach 4
    //     this.setState ({
    //         message: 'Goodbye'
    //     })
    // }

    render() {
        return (
            <div> 
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button>   */} {/* Approach 1- Using bind function, not preferred for big applications as it will cause performance issues */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */} {/* Approach 2- Using fat arrow function */}
                {/* <button onClick={this.clickHandler}>Click</button> */} {/* Approach 3 - binding this keyword in the constructor */}
                <button onClick={this.clickHandler}>Click</button> {/* Approach 4 - Using fat arrow function, check function definition */}
            </div>
        )
    }
}

export default EventBind
