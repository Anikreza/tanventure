import React, {useState} from 'react'
import { useHistory } from 'react-router';

const Login = () => {
    const [email, setEmail]=useState();
    const [password, setPassword]=useState();
    const history=useHistory();
    let user=JSON.parse(window.sessionStorage.getItem('user'));
    const login=async()=>{

        let user=JSON.parse(window.sessionStorage.getItem('user'));
        let userdata={email,password};

        let API= fetch('http://localhost:8000/api/login',{
            method:'POST',
            body:JSON.stringify(userdata),
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        }) 

    API=await (await API).json(); 
    window.sessionStorage.setItem('user',JSON.stringify(API));
    console.log('strge user',window.sessionStorage.getItem('user'));
    console.log('strge error',user?.error);

    if(!user){
        alert('Please enter a valid username and password');
        history.push('/');
        window.location.reload(); 
        
      }
      else{
        history.push('/add');
        window.location.reload(); 
      }

    }
    console.log('strge user',window.sessionStorage.getItem('user'));
    console.log('strge error',user?.error);

    return (
        <div >
            <div className='col-sm-6 offset-sm-6'>
              <input type='text' placeholder='email' className='form-control' onChange={(e)=>setEmail(e.target.value)}/>
              <br/>
              <input type='password' placeholder='password' className='form-control'onChange={(e)=>setPassword(e.target.value)}/>
                <button onClick={login} className='btn btn-primary'> LogIn </button>
            </div>
        </div>
    )
}

export default Login
