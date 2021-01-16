import React from 'react';
import { VictoryChart, VictoryArea, VictoryAxis, VictoryTheme, VictoryLegend } from 'victory';

const RandomTitle = () => ("This is a title")
const RandomData = () => ("This is a data")

export default function LinGraph(props) {
    
    return (
        <div>
        <VictoryChart 
        width={300} height={200}
        maxDomain={{ y: 7 }}
        theme={VictoryTheme.grayscale}
        style={{parent: {
            border: "1px solid #abb"
          },
          background: {
            fill: "gray"
          },
        }}>
            <VictoryLegend x={20} y={10}
                title= {RandomTitle}
                titleOrientation= "left"
                gutter={20}
                orientation="horizontal"
                style={{ title: {padding: 7 } }}
                data={[
                { name: (RandomData) , symbol: { fill: "gray" } },
                ]}
            />
            <VictoryArea data={props.customData}/>
            <VictoryAxis
            label="Label"
            style={{
              axisLabel: {padding: 30},
              grid: {
                stroke: "gold",
                strokeWidth: 0.5,
                
                },
            }} 
            theme={VictoryTheme.grayscale} tickValues={[1, 2, 3, 4, 5, 6]}/>  
            <VictoryAxis
            style={{
                grid: {
                  stroke: "gold",
                  strokeWidth: 0.5
                  },
            }} 
            theme={VictoryTheme.grayscale} dependentAxis tickValues={[2, 4, 6, 4]}/>
        </VictoryChart>
        </div>
    );
  }