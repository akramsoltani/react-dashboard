import React from 'react';
import { VictoryChart, VictoryArea, VictoryAxis, VictoryTheme, VictoryLegend, VictoryLine } from 'victory';

const RandomTitle = () => ("This is a title")
const RandomData = () => ("3000")

function LinGraph(props) {
    
    return (
        <div>
        <VictoryChart 
        minDomain={{ y: 0 }}
        //width={320}
        height={180}
        theme={VictoryTheme.material}
        style={{
          background: {
            fill: "#061218"
          },
        }}>
            
            <VictoryLine style={{data: { stroke: "#1ECC82" }}} 
            data={props.customData}/>
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

  function AreaGraph(props) {
    
    return (
        <div>
        <VictoryChart 
        minDomain={{ y: 0 }}
        //width={320}
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
            data={props.customData}/>
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

  export {LinGraph, AreaGraph}