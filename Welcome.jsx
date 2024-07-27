import { useState } from 'react'
import {useParams , Link} from 'react-router-dom'

import {retrievHelloWorldbean , retrievHelloWorldPathvariable} from './api/Helloworldapi'
import { useAuth } from './Security/AuthContext'
   export default function WelcomeComponent(){
        const {username} = useParams()
        const[message, setMessage] = useState(null)
        const authContext =useAuth()

        function callHelloWorldRestApi(){

            console.log('called')
            // axios.get('http://localhost:8080/hello-world')
            // .then(
            //     (response)=>succesResponse(response)
            // )
            // .catch(
            //     (error)=> errorResponse(error)
            // )
            // .finally( () => console.log('cleanup'))
            //retrievHelloWorldbean()
            retrievHelloWorldPathvariable('yug' , authContext.token)
            .then(
                (response)=>succesResponse(response)
            )
            .catch(
                (error)=> errorResponse(error)
            )
            .finally( () => console.log('cleanup'))
        }
        // function callhellobean(){
        //     console.log('called')
        //     axios.get('http://localhost:8080/hello-world-bean')
        //     .then(
        //         (response)=>succesResponse(response)
        //     )
        //     .catch(
        //         (error)=> errorResponse(error)
        //     )
        //     .finally( () => console.log('cleanup'))

        // }
        function succesResponse(response){
            console.log(response)
            //setMessage(response.data)
            setMessage(response.data.message)
        }
        function errorResponse(error){
            console.log(error)
        }
        return(
        <div className="welcome">
            <h1>    WELCOME TO YUG</h1>
            welcome {username}
            <div>
                Manage your todos - <Link to = "/todos"> Go here </Link>
            </div>
            <div>
                <button class="btn btn-success" onClick={callHelloWorldRestApi}> 
                call Hello_World</button>
                <div className="text-info">{message}

                </div>
                {/* <button class="btn btn-succes" onClick={callhellobean}> Bean button</button> */}
                {/* //use axios to call HelloWorldRestApi */}

            </div>
        
        </div>
        
        )
        }
        