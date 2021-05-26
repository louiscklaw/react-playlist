import React from 'react'

import HeatMap from 'react-heatmap-grid'

const xLabels = new Array(24).fill(0).map((_, i) => `${i}`)

// Display only even labels
const xLabelsVisibility = new Array(24).fill(0).map((_, i) => (i % 2 === 0 ? true : false))

const yLabels = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
]
const data = new Array(yLabels.length)
  .fill(0)
  .map(() => new Array(xLabels.length).fill(0).map(() => Math.floor(Math.random() * 100)))

function HeatMapDemo() {
  return (
    <HeatMap
      xLabels={xLabels}
      yLabels={yLabels}
      xLabelsLocation={'bottom'}
      xLabelsVisibility={xLabelsVisibility}
      xLabelWidth={50}
      data={data}
      squares
      onClick={(x, y) => alert(`Clicked ${x}, ${y}`)}
      cellStyle={(background, value, min, max, data, x, y) => ({
        background: `rgb(12, 160, 244, ${1 - (max - value) / (max - min)})`,
        fontSize: '11px',
        fontFamily: 'Arial',
      })}
      // cellRender={value => value}
      title={(value, unit) => `title ? ${value}`}
    />
  )
}

export default HeatMapDemo
