import "./styles.css";

import React, { useState } from 'react';

export default function App() {
  const [a, ua] = useState([]);

  ram = async () => {
    const response = await fetch("https://randomuser.me/api/?results=5");
    const data = await response.json();
    let a=[]
    for (let x in data.results) {
      console.log(data.results[x].name.first)
      let j=<> <h1>{data.results[x].name.first}</h1> </>
      a.push(j)

    }
    console.log(a)
    ua(a)
   
  };
  return (
    <div className="App">
    <button onClick={ram}> click </button>
    {a}
     
    </div>
  );
}
