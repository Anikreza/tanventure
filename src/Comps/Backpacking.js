import React from 'react'
import Blog from '../Comps/Blog'
import Data from '../Hooks/backpacking';


const Backpacking = () => {
    return (
        <div>
             <Blog Data={Data}/>
        </div>
    )
}

export default Backpacking
