import React,{ createContext, useState} from 'react'
import axios from 'axios'

export const DashboardContext = createContext();

const DashboardContextProvider = ({children}) => {

  const [chartData, setChartData] = useState({});

  async function chart (){
    let loadTimes = [];
    let createdTimes = [];

    await axios
    .post("https://perfanalyticapi.herokuapp.com/datas",{
      ttfb:window.performance.timing.responseStart - window.performance.timing.fetchStart,
      createdTime: new Date().toLocaleString('tr-TR')
    })

    await axios
        .get("https://perfanalyticapi.herokuapp.com/datas")
        .then(res => {
          res.data.filter(x=>{
            loadTimes.push(x.ttfb)
            createdTimes.push(x.createdTime)
          })

          setChartData({
            labels: createdTimes,
            datasets: [
              {
                label: "TTFB",
                data: loadTimes,
                borderColor:'rgba(81, 194, 232)'
              }
            ]
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