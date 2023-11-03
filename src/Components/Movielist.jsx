import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react'
import axios from 'axios'
import { Col, Row } from 'react-bootstrap'
import './Movielist.css';

function Movielist() {
  const [data, setData] = useState('')
  const [data1, setData1] = useState('')
  const [data2, setData2] = useState('')
    const url = `https://www.omdbapi.com/?apikey=fa1c9c03&t=jailer`
       axios.get(url).then((response) => {
         setData(response.data)
         console.log(response.data);
   
       })
    
       const url1 = `https://www.omdbapi.com/?apikey=fa1c9c03&t=jawan`
       axios.get(url1).then((response) => {
         setData1(response.data)
         console.log(response.data);
   
       })
  
       const url2 = `https://www.omdbapi.com/?apikey=fa1c9c03&t=leo`
       axios.get(url2).then((response) => {
         setData2(response.data)
         console.log(response.data);
   
       })
     
   
  
    
  return (

    
    <div>


        <Row>
        
            <Col lg={2}></Col>
            <Col lg={8}>
              <h4><i class="fa-solid fa-magnifying-glass"></i>Popular Searches</h4>
<Row style={{}}>
<Col lg={4}>
<Card className='ui-card'  style={{ width: '18rem' }}>
      <Card.Img className='img' variant="top" style={{height:'320px'}} src={data.Poster} />
      <div className='description'>
        <h3 style={{color:"orange"}}>{data.Title}</h3>
        <p style={{fontSize:'medium',fontWeight:'bold'}}> Directed by: {data.Director}
        </p>
        <p>{data.Plot}</p>
      
      </div>
    </Card>
</Col>
<Col lg={4}>
<Card  className='ui-card' style={{ width: '18rem' }}>
      <Card.Img className='img'variant="top" style={{height:'320px'}} src={data1.Poster} />
      <div className='description'>
        <h3 style={{color:"orange"}}>{data1.Title}</h3>
        <p style={{fontSize:'medium',fontWeight:'bold'}}> Directed by: {data1.Director}
        </p>
        <p>{data1.Plot}</p>
      
      </div>
    </Card>
</Col>
<Col lg={4}>
<Card  className='ui-card'style={{ width: '18rem' }}>
      <Card.Img className='img'variant="top" style={{height:'320px'}} src={data2.Poster} />
      <div className='description'>
        <h3 style={{color:"orange"}}>{data2.Title}</h3>
        <p style={{fontSize:'medium',fontWeight:'bold'}}> Directed by: {data2.Director}
        </p>
        <p>{data2.Plot}</p>
      
      </div>
    </Card>
</Col>
</Row>

            </Col>
        </Row>
    </div>
  )
}

export default Movielist
