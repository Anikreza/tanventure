import React, {useState, useEffect} from 'react'
import '../Style/WriteComment.css'
import TextareaAutosize from 'react-textarea-autosize';
import {GoogleLogin} from 'react-google-login'
import CommentFeed from './CommentFeed';
import db from '../Hooks/firebase'
import firebase from 'firebase'

const WriteComment = () => {
    
    const [comment, setComment]=useState('')
    const [name, setName] =useState('');
    const [email, setEmail] =useState('');
    const [avatar, setAvatar] =useState('');
    const [posts, setPosts] = useState([]);

    function responseGoogle (response){
        console.log(response.profileObj);
        setEmail(response.profileObj.email)           
        setName(response.profileObj.givenName)                 
        setAvatar(response.profileObj.imageUrl)                 
      }

      
    useEffect(() => {
        db.collection(window.location.pathname).orderBy("time", "desc").onSnapshot((snapshot) =>
          setPosts(snapshot.docs.map((doc) =>(
            {
              data: doc.data(),               
            }
          )))
        ); 
      }, []);

       function post(){
        if(!email) {
          alert('Please Sign In First!')
          return
        }
        db.collection(window.location.pathname).add({
            comment: comment,
            name: name,
            email:email,
            image:avatar,
            time: firebase.firestore.FieldValue.serverTimestamp(),
          });
          setComment('');
          alert(`I Recieved your Message,  ${name}, Thank you for getting in touch!`)
    }

    return (
        <div className='write'>

            <div className='login-button'>
                <GoogleLogin
                 clientId="766075204483-lulb8u6h2g1v0h8kp0gsnirlntf170en.apps.googleusercontent.com"
                 render={renderProps => (
                    <button className='loginbtn' onClick={renderProps.onClick} disabled={renderProps.disabled}><p style={{fontSize:'20px', color:'black'}}>Log In With Google</p></button>
                  )}
                 onSuccess={responseGoogle}
                 onFailure={responseGoogle}
                 cookiePolicy={'single_host_origin'}
                 />
              </div>
             <form onSubmit={(e=> e.preventDefault())}>
                <div className='tweetboxInput'>       
                    <TextareaAutosize
                       className='auto_height'
                       value={comment} 
                       onChange ={e=>setComment(e.target.value)} 
                       placeholder="Write a comment..." 
                       minRows={3}
                       maxRows={20}
                    />                          
                </div>
                  <div className='send'>
                 
                 <button onClick={post}> POST</button>
                
                </div>
                </form>



                    {posts.map((post) => 
                            <CommentFeed
                                key={post.data.name}
                                name={post.data.name}
                                image={post.data.image}
                                comment={post.data.comment}
                                time={post.data.time}
                            />    
                    )}
        </div>
    )
}

export default WriteComment
