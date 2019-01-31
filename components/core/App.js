import React, { Component } from "react"
import Loading from "./Loading"
import Homepage from "../homepage"

export default class App extends Component {
  render () {
    return (
      <div>
        <Loading />
        <Homepage />
      </div>
    )
  }
}
