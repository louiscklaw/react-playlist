import React from 'react';
import HeatMap from 'react-heatmap-grid'

const xLabels = new Array(24).fill(0).map((_, i) => `${i}`);
const yLabels = ['Sun', 'Mon', 'Tue','Wed','Thu','Fri','Sat'];

const xLabelsVisibility = new Array(24)
  .fill(0)
  .map((_, i) => (i % 2 === 0 ? true : false));

const data = new Array(yLabels.length)
  .fill(0)
  .map(() => new Array(xLabels.length).fill(0).map(() => Math.floor(Math.random() * 100)));

  function HeatMapTest(){
  return(

    <>
      <HeatMap
        xLabels={xLabels}
        yLabels={yLabels}
        xLabelsLocation={"bottom"}
        xLabelsVisibility={xLabelsVisibility}

        xLabelWidth={50}

        data={data}

        squares

        onClick={(x, y) => alert(`Clicked ${x}, ${y}`)}

        cellStyle={(background, value, min, max, data, x, y) => ({
          background: `rgba(66, 86, 244, ${1 - (max - value) / (max - min)})`,
          fontSize: "11px",
        })}
        cellRender={value => value && `${value}% and this is a very long paragraph`}
        title={(value, unit) => `${value}`}
      />
      {JSON.stringify(data)}
    </>
  )
}

export default HeatMapTest