

import React, { useState } from 'react'
import axios from 'axios'

import { Col, Row } from 'react-bootstrap';
import Movielist from './Components/Movielist';


function App() {
  const [movie,setMovie] = useState('')
  const [data, setData] = useState('')

  const url = `https://www.omdbapi.com/?apikey=fa1c9c03&t=${movie}`
  const changeMovie =(e)=>{
    setMovie(e.target.value)
  }
  console.log(movie);
  const searchMovie = (e) =>
  {
   
   if (e.key === 'Enter') {
     axios.get(url).then((response) => {
       setData(response.data)
       console.log(response.data);
  
      
      
     })
  
  

     
   }
   
   
 

  }
  const handleClear =(e)=>{
    setMovie("")
    setData('')
  }
    const rate = data.Ratings

   console.log(rate);
  return (

    <div className="app">
  
      <div>
        <br></br>
      </div>
      <div className='header'>
 
            <h6 className='button' ><i class="fa-solid fa-film  fa-lg" style={{ color: '#9b34b7', padding: '10px' }}></i>movie-web</h6>
  

          
      </div>
<div className='search '>
  <h2>What do you want to
    <br></br> Search?</h2>
</div>
<Row>
  <Col lg={4}></Col>
  <Col lg={4}>
    
<div className='searchinput d-flex'>
  
  
  <input
          value={movie}
          onChange={changeMovie}
          onKeyPress={searchMovie}
          className='form-control'
          placeholder='Enter Movie Name & Press "Enter'
          type="text" />
          <button className='btn' style={{backgroundColor:' rgb(75, 45, 103)'}}onClick={handleClear}><i style={{color:"white"}} class="fa-solid fa-xmark"></i></button>
        
  </div>

  </Col>
</Row>

  <Row className='movieitem'>

<Col lg={3}></Col>
{
  data?

  <Col lg={6} className="movie">
    <Row>
      <Col lg={6}><img classname="movimg" style={{height:'500px',width:"350px",borderRadius:'10px'}}src={data.Poster} /></Col>
      <Col lg={6}>
        <br></br><h2 style={{color:'orange',fontSize:'50px'}}>   {data.Title}</h2>
<h5>{data.Year}</h5>
{data.Director?
<h5><span style={{color:'orange'}}>Directed by </span>{''}<i> {data.Director}</i> </h5>:null
}
{data.Released?
  <h6> Released: {data.Released} </h6> :null
}


<br></br>

{data.Plot?
  <p> {data.Plot}</p>:null}


{data.Writer?
  <h6><span style={{color:"orange"}}>Writer:</span> <i> {data.Writer}</i></h6> :null
} 

{
  data.Actors?
  <h6><span style={{color:"orange"}}>Actors:</span><i> {data.Actors}</i> </h6> :null

}
{data.Language?
<h6><span style={{color:"orange"}}>Languages:</span> <i>{data.Language}</i></h6>:null}

{
  data.imdbRating?
  <h6><span style={{color:"orange"}}>imdbRating:</span><i>{data.imdbRating
  }/10</i>  </h6>
  :null

}
</Col>
    </Row>
  


</Col>:<Movielist/>
}

</Row>


    </div>
    
  );
}

export default App;