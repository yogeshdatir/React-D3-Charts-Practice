import { FC, useEffect, useRef, useState } from "react";
import { select, Selection } from "d3-selection";
import * as d3 from "d3";

const ScatterPlot: FC = () => {
  const chartRef = useRef(null);
  const [selection, setSelection] = useState<null | Selection<
    null,
    unknown,
    null,
    undefined
  >>(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Get Data
    const fetchData = async () => {
      const dataFromAPI = await d3.json("../../assets/data.json");
      setData(dataFromAPI);
    };
    fetchData();

    if (!selection) {
      setSelection(select(chartRef.current));
    } else {
      // Set Chart Dimentions
      let dimentions = {
        height: 800,
        width: 800
      };

      // Draw Image
      selection
        .append("svg")
        .attr("width", dimentions.width)
        .attr("height", dimentions.height)
        .style("outline", "thin solid red");
    }
  }, [selection]);

  return <div ref={chartRef}></div>;
};

export default ScatterPlot;
