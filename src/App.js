import React from 'react';
import './App.css';
import Dinner from './dinner.js';

function App() {
  return (
    <div className="App">
       {/* <Dinner></Dinner>    */}

       <Dinner dishName="Nihaari" sweetDish="Kheer" />
       <hr/>
       <Dinner dishName="Biryani" sweetDish="Jalebee"/>
       <hr/>
       <Dinner dishName="Karahi" sweetDish="Gajar ka Halwa"/>
       <hr/>
   </div>
  );
}

export default App;
