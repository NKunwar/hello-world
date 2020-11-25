import React from 'react'
import ReactDom from 'react-dom'
import PortalsDemoHTML from './PortalsDemoHTML'

function PortalDemo() {
    // return (
    //     <h1>Portal Demo</h1>
    // )

    return ReactDom.createPortal(
        <h1>Portals Demo</h1>,
        document.getElementById('portal-root')
    )

    // return ReactDom.createPortal(
    //     <div>
    //         <h1>Portal demo</h1>
    //         <PortalsDemoHTML />
    //     </div>,
    //     document.getElementById('portal-root')
    // )

}

export default PortalDemo
