import React, { Component } from 'react'

class FormsWithGlobalThisDotState extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            topic: 'react'
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
        // console.log(event.target.value)
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
        // console.log(event.target.value)
    }

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
        // console.log(event.target.value)
    }

    handleSubmitButton = (event) => {
        alert(`${this.state.username} with Comment ${this.state.comments} and topic ${this.state.topic}`);
        event.preventDefault(); // prevents default behavious of form submission
    }

    render() {

        // <================================================================>
        const { username, comments, topic } = this.state // this will globally define this.state for name, 
        // comments & topic, so we can truncate "this.state" part from "input type 'value' "
        // <================================================================>

        return (
            <form onSubmit={this.handleSubmitButton}>
                <div>
                    <label>Username</label>
                    <input type='text' value={username} onChange={this.handleUsernameChange} />
                </div>

                <div>
                    <label>Comments</label>
                    <textarea value={comments} onChange={this.handleCommentsChange} />
                </div>
                <div>
                    <label>Topic</label>
                    <select value={topic} onChange={this.handleTopicChange} >
                        <option value="react">ReactJS</option>
                        <option value="angular">AngularJS</option>
                        <option value="view">ViewJS</option>
                    </select>
                </div>

                <div>
                    <button type='submit'>Submit</button>
                </div>

            </form>

        )
    }
}

export default FormsWithGlobalThisDotState