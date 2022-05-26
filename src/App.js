import React from "react";
import { Route } from "react-router-dom";
import Week from "./Week";
import Detail from "./Detail";

function App() {

  return (
    <div className="App">
      
      <Route path='/' exact>
      <Week />
      </Route>
      <Route path='/detail/:id'>
        <Detail />
        </Route> 
     
      

    </div>
  );
}








export default App;