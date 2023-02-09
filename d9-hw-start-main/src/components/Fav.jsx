import { Col, Row, Button } from 'react-bootstrap'
import { FaTrash } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const Fav = () => {
  let fav = useSelector((state) => state.fav.content)
  

  const dispatch = useDispatch()

  return (
    
     
        <ul style={{ listStyle: 'none' }}>
          {fav.map((job, i) => (
            <li key={i} className="my-4">
             <Row>
             <Col xs={3}>
              <Link to={`/${job.company_name}`}>{job.company_name} </Link>
              </Col>
              <Col xs={7}>
              <a href={job.url} target="_blank" rel="noreferrer">
        {job.title}
      </a>
      </Col>
    
      <Col xs={2}>
      <Button
                variant="danger"
                onClick={() => {
                  dispatch({
                    type: 'REMOVE_FROM_FAV',
                    payload: i,
                  })
                }}
              >
                <FaTrash />
              </Button>
              </Col>
              </Row>
      </li>
          ))}
        </ul>
    
 
    
  )
}

export default Fav