import React from 'react';
import { VictoryChart, VictoryAxis, VictoryTheme, VictoryLine } from 'victory';

const arrayToData = (data) => data.map((y, x) => ({x: x, y: y}))

export default function LineGraph({data}) {
    
    return (
        <div>     
        <VictoryChart 
        minDomain={{ y: 0 }}
        height={195}
        theme={VictoryTheme.material}
        style={{
          background: {
            fill: "#061218"
          },
        }}>
            
          <VictoryLine style={{data: { stroke: "#1ECC82" }}} 
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