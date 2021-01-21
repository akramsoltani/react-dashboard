import React from 'react';
import { VictoryChart, VictoryArea, VictoryAxis, VictoryTheme } from 'victory';

const arrayToData = (data) => data.map((y, x) => ({x: x, y: y}))

export default function AreaGraph({data}) {
  
  return (
      <div>
      <VictoryChart 
      minDomain={{ y: 0 }}
      height={180}
      theme={VictoryTheme.material}
      style={{
        background: {
          fill: "#061218"
        },
      }}>
          
          <VictoryArea style={{
          data: {
          fill: '#0A2634',
          stroke: "#C8A007" },
          }} 
          data={arrayToData(data)}/>
          <VictoryAxis
          style={{
            grid: {
              strokeWidth: 0
              },
              axis: {stroke: "transparent"}, 
          ticks: {stroke: "transparent"},
          tickLabels: { fill:"transparent"}
          }}/>  
          <VictoryAxis
          style={{
              grid: {
                strokeWidth: 0
                },
                axis: {stroke: "transparent"}, 
            ticks: {stroke: "transparent"},
            tickLabels: { fill:"transparent"}
          }} 
          />
      </VictoryChart>
      </div>
  );
}