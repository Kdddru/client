import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';

function App() {
  const [data, setData] = useState([]);


  const callApi = async()=>{
    axios.get('/api').then((res)=>{
      setData(res.data.user);
    })
  }

  useEffect(()=>{
    callApi()
  },[])

  if(data){
    console.log(data)
  }

  return (
    <div className="App">
      {data && data.map((user)=>(
        <ul>
          <li>{user}</li>
        </ul>
      ))}
    </div>
  );
}

export default App;
