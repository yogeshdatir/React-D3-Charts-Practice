import { FC, useEffect, useRef } from "react";
import { select } from "d3-selection";

const BarChart: FC = () => {
  const chartRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    // console.log(select(chartRef.current));

    const svg = select(chartRef.current).style("outline", "thin solid red");

    svg
      .append("rect")
      .attr("width", "20")
      .attr("height", "20")
      .attr("fill", "none")
      .attr("stroke", "blue")
      .attr("x", 20)
      .attr("y", 20);
  }, []);
  return (
    <div>
      <svg ref={chartRef}></svg>
    </div>
  );
};

export default BarChart;
