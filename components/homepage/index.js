import React from "react"
import {Container, Row, Col} from "reactstrap"
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

const TitleStyle = styled.h1`
/* font-family: dY_AgencyGP; */
line-height: normal;
font-size: 64px;
text-align: center;
font-family: Kanit;

@media(max-width: 375px){
font-style: normal;
font-weight: 500;
line-height: 24px;
font-size: 24px;
}
`

const Title = () => (
  <TitleStyle>IT3K ครั้งที่ 16</TitleStyle>
)

const SizeDetail = styled.p`
@media(max-width : 375px){
  font-style: normal;
font-weight: normal;
line-height: 24px;
font-size: 14px;
}
`

const Detail = () => (
  <p>2 กุมภาพันธ์ 2019</p>
)

const Sizeimg = styled.img`
  @media (max-width: 375px) {
    width: 70px;
    height: 55.48px;
    }
`
const DetailSize = styled.p`
    font-family: Kanit;
  @media(max-width: 375px){
font-style: normal;
font-weight: normal;
line-height: 24px;
font-size: 14px;
  }
`

const DetailSize2 = styled.p`
  font-family: Kanit;
  @media(max-width: 375px){
  font-style: normal;
  font-weight: normal;
  line-height: 24px;
  font-size: 12px;
  }
`

const ButtonAdv = styled.div`
  background-color: white;
  padding-top: 10px;
  padding-bottom: 5px;
  border-radius: 10px;
  padding-right: 20px;

  @media(max-width: 414px){
  padding-top: 10px;
  padding-bottom: 5px;
  border-radius: 10px;
  padding-right: 20px;
  }
`

class Homepage extends React.Component {
  render () {
    return (
      <Landing fluid>
        <Container>
          <Row className='pt-5'>
            <Col className='d-flex justify-content-center'>
              <Sizeimg src='/static/img/logoIT3K.svg' />
            </Col>
          </Row>
          <Row className='mt-3'>
            <Col className='d-flex justify-content-center'>
              <Title />
            </Col>
          </Row>
          <Row>
            <Col xs='12' className='d-flex justify-content-center'>
              <DetailSize>วันที่ 2 กุมภาพันธ์ พ.ศ. 2562</DetailSize>
            </Col>
            <Col xs='12' className='d-flex justify-content-center'>
              <DetailSize2>ณ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้า</DetailSize2>
            </Col>
          </Row>
          <ButtonAdv>
            <a href='https://sport.it3k.in.th'>
              <Row >
                <Col xs={{size: 1, offset: 1}}>
                  <img src='/static/img/trophy-solid.png' />
                </Col>
                <Col xs={{size: 6, offset: 1}}>
              ตารางการแข่งขัน
                </Col>
                <Col xs={{size: 1, offset: 1}}>
                  <img src='/static/img/Shape.png' />
                </Col>
              </Row>
            </a>
          </ButtonAdv>
          <ButtonAdv className='mt-4'>
            <a href='https://vote.it3k.in.th'>
              <Row>
                <Col xs={{size: 1, offset: 1}}>
                  <img src='/static/img/crown-solid.png' />
                </Col>
                <Col xs={{size: 7, offset: 1}}>
              ระบบโหวต ดาว-เดือน
                </Col>
                <Col xs={{size: 1, offset: 0}}>
                  <img src='/static/img/Shape.png' />
                </Col>
              </Row>
            </a>
          </ButtonAdv>
        </Container>
      </Landing>
    )
  }
}
export default Homepage
