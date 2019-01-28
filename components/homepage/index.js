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
    /* @media(max-width: 375px){ */
left: 28px;
top: 219px;
    }
`

const TextInMyButton = styled(MyButton)`
    color : black;
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
  padding-bottom: 10px;
  border-radius: 10px;
  padding-right: 20px;

  @media(max-width: 414px){
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 10px;
  padding-right: 20px;
  }
`
const InsideButton = styled(Row)`
font-family: Kanit;
font-size: 12px;
`

const SizeImgButton = styled.img`
  width: 18px;
  height: 16px;
`
const SizeImgButton1 = styled.img`
  width: 7.4px;
  height: 12px;
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
            <Col className='d-flex justify-content-center'>
              <DetailSize>วันที่ 2 กุมภาพันธ์ พ.ศ. 2562</DetailSize>
            </Col>
          </Row>
          <Row className='mb-5'>
            <Col className='d-flex justify-content-center'>
              <DetailSize2>ณ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้า</DetailSize2>
            </Col>
          </Row>
          <ButtonAdv>
            <InsideButton >
              <Col xs={{size: 1, offset: 1}}>
                <SizeImgButton src='/static/img/trophy-solid.png' />

              </Col>
              <Col xs={{size: 6, offset: 1}}>
              ตารางการแข่งขัน
              </Col>
              <Col xs={{size: 1, offset: 1}}>
                <SizeImgButton1 src='/static/img/Shape.png' />
              </Col>

            </InsideButton>
          </ButtonAdv>
          <ButtonAdv className='mt-4'>
            <InsideButton>
              <Col xs={{size: 1, offset: 1}}>
                <SizeImgButton src='/static/img/crown-solid.png' />
              </Col>
              <Col xs={{size: 7, offset: 1}}>
              ระบบโหวต ดาว-เดือน
              </Col>
              <Col xs={{size: 1, offset: 0}}>
                <SizeImgButton1 src='/static/img/Shape.png' />
              </Col>
            </InsideButton>
          </ButtonAdv>
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
