import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const D3LineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Sample data
    const data = [
      { month: 'January', value: 65 },
      { month: 'February', value: 59 },
      { month: 'March', value: 80 },
      { month: 'April', value: 81 },
      { month: 'May', value: 56 },
    ];

    // Chart dimensions
    const width = 400;
    const height = 200;

    // Create SVG container
    const svg = d3
      .select(chartRef.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    // X and Y scales
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.month))
      .range([0, width])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .range([height, 0]);

    // Create line function
    const line = d3
      .line()
      .x((d) => xScale(d.month) + xScale.bandwidth() / 2)
      .y((d) => yScale(d.value));

    // Draw the line
    svg
      .append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 2)
      .attr('d', line);

    // Draw the X axis
    svg
      .append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(xScale));

    // Draw the Y axis
    svg.append('g').call(d3.axisLeft(yScale));
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return <div ref={chartRef}></div>;
};

export default D3LineChart;
