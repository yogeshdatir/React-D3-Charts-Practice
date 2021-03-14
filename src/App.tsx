import "./styles.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import BarChart from "./components/d3-charts/BarChart";

export default function App() {
  const [data, setData] = useState([]);

  // Get Data
  const fetchData = async () => {
    const dataFromAPI = await axios.get("https://canvasjs.com/services/data/datapoints.php?xstart=1&ystart=10&length=100&type=json").then(res => {
      return res.data
    }).catch(e => console.log(e))
    // console.log(JSON.parse(dataFromAPI))
    setData(dataFromAPI);
  };

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      <h2>Start editing to see some magic happen!</h2>
      <BarChart data={data} />
    </div>
  );
}