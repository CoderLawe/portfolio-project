import { Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

function Signin({ email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError }) {



    return (
        <div>
            <div className="top-0 sticky">
                <Navbar />
            </div>
            <div className="flex justify-center mr-40 ml-40  text-gray-800 ">
                <div className="block bg-darkergray rounded-2xl p-20  shadow-2xl">
                <div className="border-b border-blue-500 text-3xl font-bold font-serif">
                    <h1>Signin here</h1>
                </div>
                <div className="mt-10">
                    <label>Username:</label>
                    <input className= "p-2 rounded" placeholder="Enter your username" type='text' autoFocus required value={email} onChange={e=> setEmail(e.target.value)}/>
                    <p className="">{emailError}</p>
                </div>

                <div className="mt-10">
                    <label>Password:</label>
                    <input  className="p-2 rounded"placeholder="Enter your password" type='password' required value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <p>{passwordError}</p>
                </div>
                <div>
                    {hasAccount ? (
                    <div className="flex justify-center mt-5">
                         <Button onClick={handleLogin} variant="outlined" color="primary"> Signin </Button>
                         <p>Don't have an account? <span onClick={() => setHasAccount(!hasAccount)}>Signup</span></p>
                    </div>
                    )
                    :(
                        <div className="flex-col justify-center items-center m-5">
                         <Button className="bg-red-200" onClick={handleSignup} variant="outlined" color="primary"> Signup </Button>
                         <p>Have an account? <span onClick={()=> setHasAccount(!hasAccount)}>Signin</span></p>
                    </div>
                    )}
                </div>
               
                </div>
                
            </div>
        </div>
    )
}

export default Signin
