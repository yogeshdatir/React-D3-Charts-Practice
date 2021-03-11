import { FC, useEffect, useRef, useState } from "react";
import { select, Selection } from "d3-selection";

const data = [{ width: 200, height: 200, color: "blue" }];

const BarChart: FC = () => {
  const chartRef = useRef(null);
  const [selection, setSelection] = useState<null | Selection<
    null,
    unknown,
    null,
    undefined
  >>(null);

  useEffect(() => {
    // console.log(select(chartRef.current));

    if (!selection) {
      setSelection(select(chartRef.current).style("outline", "thin solid red"));
    } else {
      selection
        .data(data)
        .append("rect")
        .attr("width", (d) => d.width)
        .attr("height", (d) => d.height)
        .attr("fill", (d) => d.color);
    }
  }, [selection]);
  return (
    <div>
      <svg ref={chartRef}></svg>
    </div>
  );
};

export default BarChart;
