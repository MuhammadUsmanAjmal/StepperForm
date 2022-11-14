import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
const Loader = () => {
  return (
    <div>
       <Spinner animation="border" role="status" style={{width:"20px",height:"20px",display:"block",margin:"auto"}}>
       <span className="sr-only">Loading...</span>
    </Spinner>
    </div>
  )
}

export default Loader
