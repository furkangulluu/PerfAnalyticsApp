import React,{ createContext, useState} from 'react'
import { enums } from '../enums'
import axios from 'axios'

export const DashboardContext = createContext();

const DashboardContextProvider = ({children}) => {

  const [chartData, setChartData] = useState({});

  async function chart (){
    let loadTimes = [];
    let createdTimes = [];

    await axios
    .post(enums.url,{
      ttfb:window.performance.timing.responseStart - window.performance.timing.fetchStart,
    })

    await axios
        .get(enums.url)
        .then(res => {
          res.data.filter(x=>{
            loadTimes.push(x.ttfb)
            createdTimes.push(x.createdTime)
          })

          setChartData({
            labels: createdTimes,
            datasets: [{
                label: 'TTFB',
                data: loadTimes,
                borderColor:'rgba(81, 194, 232)'
              }]
          });
        })
        .catch(err => {
          console.log(err);
        });
    }

    return (
        <DashboardContext.Provider value={{chartData, chart}}>
            {children}
        </DashboardContext.Provider>
    )
}

export default DashboardContextProvider;