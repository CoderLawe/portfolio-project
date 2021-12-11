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
import { useContext, useEffect, useState } from 'react';
import { fire } from './firebase';
import ViewMessages from './ViewMessages';
import Aos from "aos";
import { ScrolledProvider, ScrolledContext } from './context/PageContext';
import Navbar from './Navbar';





function App() {

  const[user,setUser]= useState('');
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');

  const[emailError, setEmailError] = useState('');
  const[passwordError, setPasswordError] = useState('');
  const[hasAccount, setHasAccount] = useState(false);
  const [link, setLink] = useState('');
  const [scrolled, setScrolled] = useContext(ScrolledContext)


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

  const checkScrolled = () => {
      if(window.scrollY > 60){
        setScrolled(true);
        console.log('scrolled', scrolled)
      }else{
        setScrolled(false);
      }
  }

  useEffect(() =>{
      authListener();
  },[]);

  // useEffect(() => {
  //   checkScrolled()
  // },[scrolled])
  

  useEffect(() => {
    Aos.init({duration:2000})
       
    }, [])

  
    window.addEventListener('scroll', checkScrolled)
  return (
    <div className="app bg-nav-image bg-fixed text-gray-50">
      <Router>
      <div className="">
        {/* Header */}
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>
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
    {/* <Route path="/:slug">
      <DetailPage />
    </Route> */}

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
