import React from 'react'
import '../Style/CommentFeed.css'
import {Avatar} from '@material-ui/core'


const CommentFeed = ({name, image, comment, time }) => {
    return (
        <div className='feed'>
            <div className='comment'>
                <div className='flex-comment'>
                    <Avatar src={image}/> 
                      <p1>{name}</p1>
                      <p2></p2>
                 </div>
                 <hr/>
                  <div className='comment-text'>             
                     <p>{comment}</p>
                  </div>

            </div>
        </div>
    )
}

export default CommentFeed
