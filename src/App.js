import './App.css';
import Nav from './Nav'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import DetailPage from './DetailPage';
import About from './About';
import PostUpload from './PostUpload';
import Mycode from './Mycode';
import Footer from './Footer';


function App() {
  return (
    <div className="app bg-primary text-gray-50">
      <Router>
      <div className="bg-primary">
        {/* Header */}
      <Nav />
      <Switch>

   
    <Route path="/about">
      <About />
    </Route>

    <Route path="/code">
      <Mycode />
    </Route>


    <Route path="/create" component={PostUpload} />

    <Route path="/:slug" component={DetailPage} />

    <Route path="/">
    <div className="border-b-7 divide-y divide-light-blue-400 mt-10">
         <h1 className="italic flex justify-center font-serif text-xl divide-y divide-light-blue-400">Some of My projects </h1>
         <p></p>
      </div>
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
