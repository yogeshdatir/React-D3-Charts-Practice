import React, { useEffect, useRef } from 'react'
import { select } from "d3"

interface IProps {
  data: any
}

// Dimensions
const dimensions = {
  width: 800,
  height: 400
}

const BarChart = (props: IProps) => {
  const svgRef = useRef(null)

  useEffect(() => {
    //  Draw Image
    const svg = select(svgRef.current)
      .attr('width', dimensions.width)
      .attr('height', dimensions.height)
    console.log(svg)
    addAxes(svg);
    addBars(svg);
    addText(svg);
  }, [])

  const addAxes = (svg: any) => {
  }

  const addBars = (svg: any) => {
  }

  const addText = (svg: any) => {
  }

  // const xscale

  // const yscale

  return (
    <div className="canvas">
      <svg
        ref={svgRef}
      >
      </svg>
    </div>
  )
}

export default BarChart
