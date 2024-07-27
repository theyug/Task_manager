import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {useAuth} from './Security/AuthContext'
export default function LoginComponent(){
    const [username , setUsername] = useState('yug123')
    const [password , setpassword] = useState('abcd')
    const [showsuccessmessage , setshowSuccessmessage] = useState(false)
    const [showerrormessage , setshowErrormessage] = useState(false)
const navigate = useNavigate();
const authContext = useAuth()


    function handleusername(event) {
        setUsername(event.target.value);
    }
        function handle_password(event){
    setpassword(event.target.value);


        }
       async function handlesubmit(){
            if(await  authContext.login(username, password)){
              
                navigate(`/welcome/${username}`)

            }
            else{
               
                setshowErrormessage(true)
            }
            }
           
    
return( 
<div className="login">
    <h1> time to login </h1>
   { showerrormessage && <div className="errorMessage">Authentication failed</div>} 
<div className="loginform">

    <div> 
        <label> User_Name</label>
        <input type = "text" name  = "username" value = {username} onChange={handleusername}/> 
            </div>
        <div> 
        <label>Password</label>
        <input type = "Password" name  = "Password" value = {password} onChange={handle_password}/> 
            </div>
            <div>

            <button type="button" onClick={handlesubmit} name="login">
  Login
</button>

            </div>
    </div>
    </div>

)

}
