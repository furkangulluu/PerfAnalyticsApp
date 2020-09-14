import React,{useContext, useEffect} from 'react'
import Chart from '../Chart/Chart'

const Dashboard = () => {
    return (
        <div className="container col-md-12">
            <h1 className="text-center mt-3 mb-5">DATA CHARTS OF THE PERFORMANCE</h1>
            <div className="row justify-content-center mb-4">
              <div className="col-8">
                <Chart />
              </div>
            </div>
        </div>
    )
}

export default Dashboard;
