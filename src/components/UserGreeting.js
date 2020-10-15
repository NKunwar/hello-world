import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    

    render() {
        
        return(
            this.state.isLoggedIn ? <div>Naimish</div> : <div>Guest</div>
        )

    //     let message
    //     if(this.state.isLoggedIn){
    //         message = <div>Welcome Naimish</div>
    //     } else {
    //         message = <div>Welcome guest</div>
    //     }

    // return <div>{message}</div>

        // if(this.state.isLoggedIn) {
        //     return(
        //         <div> Welcome Naimish </div>
        //     )
        // } else {
        //     return(
        //         <div>Welcome Guest</div>
        //     )
        // }

        return (
            <div>
                {/* <div>Welcome Naimish</div>
                <div>Welcome Guest</div> */}
            </div>
        )
    }
}

export default UserGreeting