import React, { useEffect, useContext} from "react";
import { Line } from "react-chartjs-2";
import { DashboardContext } from '../../DashboardContext'

const DashboardChart = () => {

  const { chartData,  chart } = useContext(DashboardContext)

  useEffect(() => {
    chart();
  }, []);

  return (
    <div>
      <Line data={chartData}/>
    </div>
  );
};

export default DashboardChart;
