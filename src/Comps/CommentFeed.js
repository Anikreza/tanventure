import React from 'react'
import '../Style/CommentFeed.css'
import {Avatar} from '@material-ui/core'
import moment from 'moment'

const CommentFeed = ({name, image, comment, time }) => {
    return (
        <div className='feeda'>
        <div className='feed'>
            <div className='comment'>
                <div className='flex-comment'>
                    <Avatar src={image}/> 
                      <p1>{name}</p1>
                      <p2></p2>
                 </div>
                 <hr/>
                  <div className='comment-text'>             
                     <p>{comment} </p>
                  </div>
                  <p2>{moment(time?.toDate()) .format('LL')}</p2>
            </div>
          
        </div>
        </div>
    )
}

export default CommentFeed
