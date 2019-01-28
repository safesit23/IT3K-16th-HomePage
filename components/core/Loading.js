import React from "react"
import styled from "styled-components"
import {compose, withState, lifecycle} from "recompose"

const Bg = styled.section`
  height:100%;
  width:100%;
  background: #ffffff;
  z-index: 99999;
  position: fixed;
  display: block;
  transition: all 1.5s ease-in-out;
  &.hide {
    opacity: 0;
    visibility: hidden;
  }
`

const Picture = styled.img`
  height: 120px;
  width: auto;
`

const index = ({show , delay }) => (
  <Bg className={`d-flex justify-content-center align-items-center ${!show ? "hide" : ""}`}>
    <Picture src='/static/img/logoIT3K-Loading.png' />
  </Bg>
)

export default compose(
  withState("show", "setShow", true),
  lifecycle({
    componentDidMount () {
      setTimeout(() => {
        this.props.setShow(false)
      }, 2000)
    }
  })
)(index)
