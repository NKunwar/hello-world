import React, { Component } from 'react'
import FRRef from './FRRef'

class FRParentInput extends Component {
    render() {
        return (
            <div>
                <FRRef />
                <button>Focus Input</button>
            </div>
        )
    }
}

export default FRParentInput