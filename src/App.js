import './App.css';
import Nav from './Nav'
import Home from './Home'


function App() {
  return (
    <div className="app bg-primary text-gray-50">
      <div className="">
        {/* Header */}
      <Nav />
    {/* Cards */}
    <div className="border-b-7 divide-y divide-light-blue-400 mt-10">
         <h1 className="italic flex justify-center font-serif text-xl divide-y divide-light-blue-400">Some of My projects </h1>
         <p></p>
     </div>
      <Home /> 
      </div>
      

    </div>
  );
}

export default App;
