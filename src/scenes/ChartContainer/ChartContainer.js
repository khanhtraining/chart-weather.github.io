import React, { useEffect, useState } from 'react'
import * as d3 from 'd3'
import TideChart from './TideChart'
import SunsetChart from './SunsetChart'
import SunriseChart from './SunriseChart'
import PeriodChart from './PeriodChart'
import './chart.scss'
import '../../App.scss'

const ChartContainer = (props) => {
    const { chartData } = props
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)

    useEffect(() => {
        const currentWidth = parseInt(d3.select('.svgchart').style('width'), 10)
        const currentHeight = parseInt(d3.select('.svgchart').style('height'), 10)
        setWidth(currentWidth * 6)
        setHeight(currentHeight)
    }, [width, height])

    return (
        <div className='layout__container-chart'>
            <div className='svgchart'>
                <svg width={width} height={height}>
                    <TideChart width={width} height={height} data={chartData} />
                    <SunsetChart width={width} height={height} data={chartData} />
                    <PeriodChart width={width} height={height} data={chartData} />
                    <SunriseChart width={width} height={height} data={chartData} />
                </svg>
            </div>
            <div className='layout__container-chart--title'>
                <span className='blue-title'>Tide •</span>
                <span className='orange-title'>Sunrise &amp; Sunset</span>
            </div>
        </div>
    )
}

export default ChartContainer
