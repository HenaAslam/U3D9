import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const Job = ({ data }) =>
{

  const dispatch=useDispatch()


  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return(
  <Row
    className="mx-0 mt-3 p-3"
    style={{ border: '1px solid #00000033', borderRadius: 4 }}
  >
    <Col xs={3}>
      <Link to={`/${data.company_name}`}>{data.company_name} </Link>
    </Col>
    <Col xs={7}>
      <a href={data.url} target="_blank" rel="noreferrer">
        {data.title}
      </a>
      </Col>
      <Col xs={2}>
     <div         onClick={handleClick}
> <FaStar className='ml-3' color={ active ? "red" : "black"}   onClick={()=>{
      
       

        dispatch({
          
          type:"ADD_TO_FAV",
          payload:data
        })
       
        
      }}/> </div>
      </Col>
   
  </Row>
)
} 
export default Job
