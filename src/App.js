import './App.css';
import Nav from './Nav'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import DetailPage from './DetailPage';
import About from './About';
import PostUpload from './PostUpload';
import Mycode from './Mycode';
import Footer from './Footer';
import HomeAbout from './HomeAbout';
import Signin from './Signin';
import { useEffect, useState } from 'react';
import { fire } from './firebase';
import ViewMessages from './ViewMessages';



function App() {

  const[user,setUser]= useState('');
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');

  const[emailError, setEmailError] = useState('');
  const[passwordError, setPasswordError] = useState('');
  const[hasAccount, setHasAccount] = useState(false);


  const clearInputs =() =>{
      setEmail('');
      setPassword('');
  }

  const clearErrors = () =>{
      setEmailError('');
      setPasswordError('');
  }

  const handleLogin = () =>{
      clearErrors();
      fire
      .auth()
      .signInWithEmailAndPassword(email,password)
      .catch(err => {
          switch(err.code){
              case"auth/invalid-email":
              case "auth/user-disabled":
              case"auth/user-not-found":
                  setEmailError(err.message)
                  break;
              case "auth/wrong-password":
                  setPasswordError(err.message) 
                  break;
          }
      })
  }

 
  const handleSignup = () =>{
      clearErrors();
      fire  
      .auth()
      .createUserWithEmailAndPassword(email,password)
      .catch(err => {
          switch(err.code){
              case"auth/email-already-in-use":
              case "auth/invalid-email":
                  setEmailError(err.message)
                  break;
              case "auth/weak-password":
                  setPasswordError(err.message) 
                  break;
          }
      })
  }

  const handleLogout =() =>{
      fire.auth().signOut();
  };

  const authListener = () =>{
      fire.auth().onAuthStateChanged(user => {
          if(user){
              clearInputs();
              setUser(user)
          } else{
              setUser('');
          }
          
      })
  }

  useEffect(() =>{
      authListener();
  },[]);
  return (
    <div className="app bg-primary text-gray-50">
      <Router>
      <div className="bg-primary">
        {/* Header */}
      <Switch>

   
    <Route path="/about">
      <About />
    </Route>


    <Route path="/signin">
      {/* { user? (
        
      )} */}
      <Signin  
      enail={email} 
      setEmail={setEmail} 
      password={password} 
      setPassword={setPassword}
       handleLogin={handleLogin}
        handleSignup={handleSignup} 
        hasAccount={hasAccount} 
       setHasAccount={setHasAccount}
        emailError={emailError} passwordError={passwordError}
      
      />
    </Route>

    <Route path="/code">
      <Mycode />
    </Route>
  
      <Route path="/view" component={ViewMessages}/>


    <Route path="/create" component={PostUpload} />

    <Route path="/:slug" component={DetailPage} />

    <Route path="/">
      <Nav handleLogout={handleLogout}/>
    <HomeAbout />

    
    <Home /> 

    </Route>

      </Switch>
    {/* Cards */}
      <Footer />
      </div>
      </Router>
     
      

    </div>
  );
}

export default App;
