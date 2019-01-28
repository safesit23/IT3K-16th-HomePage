import React, { Component } from "react"
import {Container, Row, Col} from "reactstrap"
import styled from "styled-components"

const Picture = styled.img`
  height: 120px;
  width: auto;
`

const RowP = styled(Row)`
  padding-top: 30%;
`

class Loadingpage extends Component {
  render () {
    return (
      <Container>
        <RowP>
          <Col className='d-flex justify-content-center' >
            <Picture src='/static/img/logoIT3K-Loading.png' />
          </Col>
        </RowP>
      </Container>
    )
  }
}

export default Loadingpage
