  
  import { useState } from 'react'
    import './TodoApp.css'
    import {BrowserRouter, Routes, Route,useNavigate,useParams , Link, Navigate} from 'react-router-dom'
    import Logoutcomponent from './Logout'
    import LoginComponent from './Login'
    import Header from './Header'
    
    import WelcomeComponent from './Welcome'
    import  Errorcomponent from './Error'
    import  ListTodocomponent from './Todolist'
    import AuthProvider ,{useAuth}from './Security/AuthContext'
    import TodoComponent from './TodoComponent.jsx'

    function AuthenticatedRoute({children}){
        
      const authContext = useAuth()
      if(authContext.isAuthenticated)
      return children
    return<Navigate to  = "/"/>

        
    }
    
    

    export default function TodoApp(){

        return(
    <div className ="TodoApp" >

       <AuthProvider>
            <BrowserRouter>
            <Header/> 
            <Routes>
                <Route path = '/' element={<LoginComponent/>}> </Route>
                <Route path = '/login'element={<LoginComponent/>}> </Route>
                <Route path = '/logout'element={
                <AuthenticatedRoute>
                   <Logoutcomponent/>
                   </AuthenticatedRoute>
                }> </Route>
                <Route path = '*'element={<Errorcomponent/>}> </Route>

                <Route path = '/todos'element={ <AuthenticatedRoute>
                <ListTodocomponent/>
                </AuthenticatedRoute>}> </Route>
                
                <Route path='/todo/:id' element={
                            <AuthenticatedRoute>
                                <TodoComponent /> 
                            </AuthenticatedRoute>
                        } />
               

                <Route path =  '/welcome/:username'element={
                     <AuthenticatedRoute>
                 <WelcomeComponent/>
                
                </AuthenticatedRoute>
            }> </Route>
           
               
                
                
            
            </Routes>
        
            </BrowserRouter>
        </AuthProvider>
        
    
    
    </div>
        )


    
    
       
    }