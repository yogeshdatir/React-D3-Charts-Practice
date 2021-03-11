import { FC, useEffect, useRef, useState } from "react";
import { select, Selection } from "d3-selection";

const data = [
  {
    date: 1493922600000,
    units: 320
  },
  {
    date: 1494009000000,
    units: 552
  },
  {
    date: 1494095400000,
    units: 342
  },
  {
    date: 1494181800000,
    units: 431
  },
  {
    date: 1494268200000,
    units: 251
  },
  {
    date: 1494354600000,
    units: 445
  }
];

const ScatterPlot: FC = () => {
  const chartRef = useRef(null);
  const [selection, setSelection] = useState<null | Selection<
    null,
    unknown,
    null,
    undefined
  >>(null);

  useEffect(() => {
    if (!selection) {
      setSelection(
        select(chartRef.current)
          .attr("width", "100hw")
          .attr("height", "100vh")
          .style("outline", "thin solid red")
      );
    } else {
    }
  }, [selection]);

  return (
    <div>
      <svg ref={chartRef}></svg>
    </div>
  );
};

export default ScatterPlot;
