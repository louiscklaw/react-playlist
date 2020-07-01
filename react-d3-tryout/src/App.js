import React from 'react'
import * as d3 from 'd3'

const temperatureData = [ 8, 5, 13, 9, 12 ]

class App extends React.Component{
  componentDidMount = () => {
    console.log(this.refs)

    d3.select(this.refs.temperatures)
      .selectAll("h2")
      .data(temperatureData)
        .enter()
            .append("h2")
            .text("New Temperature")

  }

  render(){

    return(
      <>
        helloworld
        <div ref="temperatures"></div>
      </>
    )
  }
}

export default App