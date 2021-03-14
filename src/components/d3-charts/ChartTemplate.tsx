import React, { useEffect, useRef } from 'react'
import { select } from "d3"

interface IProps {
    data: any
}

const BarChart = (props: IProps) => {
    const svgRef = useRef(null)

    useEffect(() => {
        const svg = select(svgRef.current)
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
                viewBox={`0 0 990 660`}
                preserveAspectRatio="xMinYMin"
                width="100%"
                height="100%"
                style={{ backgroundColor: "white" }}
                ref={svgRef}
            >
            </svg>
        </div>
    )
}

export default BarChart
