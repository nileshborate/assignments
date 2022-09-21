import logo from './logo.svg';
import './App.css';
import { Card } from './Card';
import React, { useEffect, useState } from 'react'
import { getMovies } from './movieService';

function App() {
  const[data,setData] = useState([]);

  useEffect(()=>{
      getMovies().then((res)=>{
          //console.log(res.data);
          setData(res.data)
      })
  });

  return (
    <>
    <h1>List Of Movies</h1>
    {
      data.map((val,index)=>{
        return(
          <Card 
            key={index}
            imgsrc={val.imgsrc}
            title={val.title}
            rating={val.rating}
            releaseDate={val.releaseDate}
          />
        )
        
      })
    }
    </>
  );
}

export default App;
