import React, { Component } from 'react'

// This is an example of Class Component

class Welcome extends Component {
    render() {
        // this.props.name = 'Modi'; props are immutable hence cannot be changed
        return (
            <div>
                <h1>Hello {this.props.name} aka {this.props.heroName}</h1>
                {this.props.children}
            </div>
        );

    }
}

export default Welcome