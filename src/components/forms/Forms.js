import React, { Component } from 'react'

class Forms extends Component {

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
        // const {name, comments, topic} = this.state
        return (
            <form onSubmit={this.handleSubmitButton}>
                <div>
                    <label>Username</label>
                    <input type = 'text' value = {this.state.username} onChange = {this.handleUsernameChange} />
                </div>

                <div>
                    <label>Comments</label>
                    <textarea value = {this.state.comments} onChange = {this.handleCommentsChange} />
                </div>
                <div>
                    <label>Topic</label>
                    <select value = {this.state.topic} onChange = {this.handleTopicChange} >
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

export default Forms