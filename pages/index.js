import React from "react"
import App from "../components/core/App"
import styled from "styled-components"

const Landing = styled.div`
  background: linear-gradient(220deg, #DD755B, #D8987C, #E3AFAB);
  background-size: 600% 600%;
  height: 100vh;

-webkit-animation: AnimationName 30s ease infinite;
-moz-animation: AnimationName 30s ease infinite;
animation: AnimationName 2.5s ease infinite;

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
`
class Index extends React.Component {
  render () {
    return (
      <Landing>
        <App />
      </Landing>
    )
  }
}

export default Index
