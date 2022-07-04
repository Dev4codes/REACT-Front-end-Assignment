import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'

export default function Login() {
  return (
<>
<div>
<div className='username'><input type="text" placeholder='enter your uysername'/></div>
<div className='pass'><input type="text" placeholder='enter your password'/></div> 
<input type="button" value="Login"/>


<br/>
<br/>
<br/>
<br/>
<br/>
<br/>






<div>If U Don't Have an Account Please <Link to="/Signup"><input type="button" value="Create Here"/></Link></div>

</div>
</>
  )
}
