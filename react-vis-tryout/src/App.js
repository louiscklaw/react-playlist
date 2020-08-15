import React, { Component } from 'react';

import './App.css';
import '../node_modules/react-vis/dist/style.css';
import {
  XYPlot,
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  VerticalBarSeries,
  MarkSeries
} from 'react-vis';

class App extends Component {
  render() {
    const data = [
      {x: 0, y: 8},
      {x: 1, y: 5},
      {x: 2, y: 4},
      {x: 3, y: 9},
      {x: 4, y: 1},
      {x: 5, y: 7},
      {x: 6, y: 6},
      {x: 7, y: 3},
      {x: 8, y: 2},
      {x: 9, y: 0}
    ];
    const data1 = [
      {x: 0, y: 9},
      {x: 1, y: 4},
      {x: 2, y: 1},
      {x: 3, y: 19},
      {x: 4, y: 11},
      {x: 5, y: 17},
      {x: 6, y: 16},
      {x: 7, y: 13},
      {x: 8, y: 12},
      {x: 9, y: 10}
    ];
    return (
      <div className="App">
        https://uber.github.io/react-vis/documentation/general-principles/scales-and-data
        <XYPlot height={200} width={200} >
          <LineSeries data={data} />
          <LineSeries data={data1} />
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
        </XYPlot>

        <XYPlot height={200} width={200}>
          <VerticalBarSeries data={data} />
        </XYPlot>
        <XYPlot height={200} width={200}>
          <LineSeries data={data} />
        </XYPlot>
        <XYPlot height={200} width={200}>
          <MarkSeries data={data} />
        </XYPlot>


      </div>
    );
  }
}

export default App;
