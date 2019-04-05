import  React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap';
import headerbg1 from '../../images/2.png'
import headerbg2 from '../../images/3.png'

const Header = ()=>(
 <Wrapper>

     <Container style={{paddingTop:"200px"}}>
         <Row >
             <Col md="6" xs="12">
               <div className="p-5" style={{width:"600px"}}>
                   <span>The world is yours </span>
                   <h1>coming soon</h1>
               </div>
             </Col>
             <Col md="6" xs="12">
             <div className="text-center">
                  <img src={headerbg2} />
            </div>
             </Col> 
        </Row>
     </Container>
 </Wrapper>
)

const Wrapper = styled.header`
 background: url(${headerbg1}) no-repeat center center fixed;
 height: 100vh;
 background-size: cover;
 img{
     width:90%;
     height:auto;
     float:right;
     @media(max-width: 480px){
         width:70%;
         margin-right:50px;
     }
 }
 div{
     color:white;
     word-spacing:8px;

     span{
      font-size:40px;
      font-weight:300;
      @media(max-width:480px){
          font-size:20px;
      }
     }
     h1{
         font-size:80px;
         font-weight:800;
         @media(max-width: 480px){
             font-size:40px;
         }
     }
 }
`
export default Header