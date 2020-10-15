import React from 'react'

// This is an example of Functional Component 


// function Greet() {
//     return <h1>Hello Naimish</h1>
// }

// const Greet = () => <h1>Hello Naimish Kunwar</h1>

const Greet = (props) => {
    console.log(props);
    // props.name = 'Vikas'; props are immutable hence cannot be changed
    return (
        <div>
            <h1>Hello {props.name} also known as {props.heroName} </h1>
            {props.children}
        </div>
    )
}

// const Greet = props => {
//     const {name, heroName} = props
//     return (
//         <div>
//             <h1>Hello {name} aka {heroName}</h1>
//         </div>
//     )
// }

// const Greet = ({name, heroName}) => {
//     console.log(name, heroName)
//     return(
//         <div>
//             <h1> Hello {name} aka {heroName} </h1>
//         </div>
//     )
// }


// export const Greet = () => <h1>Hello Naimish Kunwar</h1> // This is named exports and will be used with curly braces when importing

export default Greet