import React, { Component } from 'react'

class RefsDemo extends Component {

    constructor(props) {
        super(props)
        
        this.inputRef = React.createRef()
        this.cbRef = null
        this.setCBref = (element) => {
            this.cbRef = element
        }

        // this.state = {}
    }

    componentDidMount() {
        
        if(this.cbRef) {
            this.cbRef.focus()
        }
        
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
    }
    
    clickHandler = (event) => {
        alert(this.inputRef.current.value)
        // console.log('value by event' event.)
    }

    render() {
        return (
            <div>
                <input type = "text" ref = {this.inputRef} />
                <input type = "text" ref = {this.setCBref} />
                <button onClick = {this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo