import React from 'react'
import Blog from '../Comps/Blog'
import Data from '../Hooks/Pm'

const PmPage = () => {
    return (
        <div>
            <Blog Data={Data}/>
        </div>
    )
}

export default PmPage
