import './App.css';
import React from 'react';
import Box from "./Components/Box";

function App() {

  return (
   <div >
    <div className="container">
      {
        Object.keys([...(new Array(3))]).map((item, i) => <Box key={i} />)
      }
     </div>
   </div>
  );
}

export default App;
