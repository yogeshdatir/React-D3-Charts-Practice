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
      setSelection(
        select(chartRef.current)
          .attr("width", "100hw")
          .attr("height", "100vh")
          .style("outline", "thin solid red")
      );
    } else {
      const rects = selection
        .selectAll("rect")
        .data(data)
        // join add or removes elements to match the number of data elements
        // .join("rect")
        // we can customize enter, update and exit by ourselves as well
        .join(
          (enter) => {
            return enter.append("rect").attr("fill", "red");
          },
          (update) => {
            return update.attr("fill", "yellow");
          },
          (exit) => {
            return exit.remove();
          }
        )
        // .attr("fill", "blue")
        .attr("width", 20)
        .attr("height", 20)
        .attr("x", (_, index) => index * 22);

      console.log(rects);
    }
  }, [selection]);
  return (
    <div>
      <svg ref={chartRef}>
        <rect />
        <rect />
      </svg>
    </div>
  );
};

export default BarChart;
