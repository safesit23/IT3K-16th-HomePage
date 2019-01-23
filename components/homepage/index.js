import React from "react"
import {Container, Row, Col, Button} from "reactstrap"
import styled from "styled-components"

const Landing = styled(Container)`
  /* background-image : linear-gradient(270deg, #5F597B 0%, #B2605C 100%); */
  background: linear-gradient(220deg, #DD755B, #D8987C, #E3AFAB);
background-size: 600% 600%;

-webkit-animation: AnimationName 30s ease infinite;
-moz-animation: AnimationName 30s ease infinite;
animation: AnimationName 3s ease infinite;

@-webkit-keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@-moz-keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
  height : 100vh;
`

const MyButton = styled(Button)`
    background-color : yellow;
`

const TextInMyButton = styled(MyButton)`
    color : black;
`

const TitleStyle = styled.h1`
/* font-family: dY_AgencyGP; */
line-height: normal;
font-size: 64px;
text-align: center;
`

const Title = () => (
  <TitleStyle>IT 3KINGS #16</TitleStyle>
)

const Detail = () => (
  <p>2 กุมภาพันธ์ 2019</p>
)

const Button1 = styled.div`
  border : 1 px;
`

class Homepage extends React.Component {
  render () {
    return (
      <Landing fluid>
        <Container>
          <Row>
            <Col className='d-flex justify-content-center'>
              <img src='/static/img/logoIT3K.svg' />
            </Col>
          </Row>
          <Row>
            <Col className='d-flex justify-content-center'>
              <Title />
            </Col>
          </Row>
          <Row>
            <Col className='d-flex justify-content-center'>
              2 กุมภาพันธ์ 2019
            </Col>
          </Row>
          <Row className='mb-5'>
            <Col className='d-flex justify-content-center'>
              ณ มหาวิทยาลัยพระจอมเกล้า
            </Col>
          </Row>
          <Row className='mb-3'>
            <Col className='d-flex justify-content-center'>
              <Button>ดูผลการแข่งขัน</Button>
            </Col>
          </Row>
          <Row>
            <Col className='d-flex justify-content-center'>
              <Button>โหวตดาวเดือน</Button>
            </Col>
          </Row>
        </Container>
      </Landing>
      /* <HelloWorld>
        <Title />
        <Detail />
        <MyButton color='primary' className='ml-3'>ดูผลการแข่งขัน</MyButton>
        <TextInMyButton color='success' className='ml-3'>โหวตดาวเดือน</TextInMyButton>
      </HelloWorld> */
    )
  }
}
export default Homepage
