import React from "react"
import HomePage from "../components/homepage"
import styled from "styled-components"

const HelloWorld = styled.div`
  padding : 50px;
`

class componentName extends React.Component {
  render () {
    return (
      <HelloWorld>
        <HomePage />
      </HelloWorld>
    )
  }
}

export default componentName
