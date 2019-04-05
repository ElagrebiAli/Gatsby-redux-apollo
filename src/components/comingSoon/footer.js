import React from 'react'
import { Container, Row, Col } from 'reactstrap';

const Footer = ()=>(
<footer style={{position:"fixed", bottom:0, width:"100vw"}}>
 <Row>
    <Col className="text-center">
      <div  style={{backgroundColor:"#424546",color:"white",height:"40px"}}>
          <h5 style={{paddingTop:"10px",fontSize:"15px"}}>Copyright © {new Date().getFullYear()} <span style={{fontWeight:"600",fontSize:"17px"}}>Optimal</span>&nbsp;|&nbsp;<span >Solution</span>.All Rights Reserved.</h5>
      </div>
    </Col>
</Row>
</footer>
)



export default Footer