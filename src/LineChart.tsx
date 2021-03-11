import React, { useEffect } from 'react'
import * as d3 from 'd3'

import './styles.css'

const LineChart = (props) => {
  const { data, width, height } = props

  useEffect(() => {
    drawChart()
  }, [data])

  const drawChart = () => {

  }

  return <div id="container" />

}