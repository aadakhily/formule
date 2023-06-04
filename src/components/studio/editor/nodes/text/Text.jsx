import { useNode } from '@craftjs/core'
import React from 'react'

function Text() {
    const { connectors: { connect, drag } } = useNode()
    return (
        <div ref={ref => connect(drag(ref))} className='h-48' >this is a Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, asperiores?</div>
    )
}

export default Text