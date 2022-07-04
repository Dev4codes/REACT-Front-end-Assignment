import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
<>
<div>
<div className='username'><input type="text" placeholder='enter your uysername'/></div>
<div className='pass'><input type="text" placeholder='enter your password'/></div> 
<input type="button" value="Create Account"/>


<br/>
<br/>
<br/>
<br/>
<br/>
<br/>


<div>If U Have Already  an Account Please <Link to="/Login"><input type="button" value="Login Here"/></Link></div>





</div>

</>
  )
}
