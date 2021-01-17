import React from 'react';
import { VictoryChart, VictoryArea, VictoryAxis, VictoryTheme, VictoryLegend } from 'victory';

const RandomTitle = () => ("This is a title")
const RandomData = () => ("3000")

export default function LinGraph(props) {
    
    return (
        <div>
        <VictoryChart 
        width={400} height={300}
        maxDomain={{ y: 7 }}
        theme={VictoryTheme.grayscale}
        style={{
          background: {
            fill: "gray"
          },
        }}>
            
            <VictoryArea data={props.customData}/>
            <VictoryAxis
            label= {RandomData}
            style={{
              tickLabels: {fontFamily: 'Roboto', padding: 5},
              axisLabel: {padding: 30, fontFamily: 'Roboto'},
              grid: {
                stroke: "gold",
                strokeWidth: 0.5,
                
                },
            }} 
            theme={VictoryTheme.grayscale} tickValues={[1, 2, 3, 4, 5, 6]}/>  
            <VictoryAxis
            style={{
                tickLabels: {fontFamily: 'Roboto', padding: 8},
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

  /*<VictoryLegend x={45} y={10}
                title= {RandomTitle}
                titleOrientation= "left"
                gutter={20}
                orientation="horizontal"
                data={[
                  { name: (RandomData) , symbol: { fill: "gray" }  },
                  ]}
                style={{ title: {padding: 7, fontFamily: 'Roboto'},
                          data: {fontFamily: 'Roboto'} }}
                
            />*/