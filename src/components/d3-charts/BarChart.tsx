import React, { useEffect, useRef } from 'react'
import { select } from "d3"

interface IProps {
  data: any
}

// Dimensions
const dimensions = {
  width: 800,
  height: 400,
  margin: {
    top: 50,
    right: 50,
    bottom: 50,
    left: 50
  }
}

const BarChart = (props: IProps) => {
  const svgRef = useRef(null)

  useEffect(() => {
    //  Draw Image
    const svg = select(svgRef.current)
      .attr('width', dimensions.width)
      .attr('height', dimensions.height)

    // To apply margin, we append g with transform-translate attribute
    const container = svg.append('g')
      .attr('transform', `translate(${dimensions.margin.left}, ${dimensions.margin.top})`)

    container.append('circle')
      .attr('r', 15)

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
