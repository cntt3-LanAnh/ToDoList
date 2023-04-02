import { Chart } from "react-google-charts";

export const GChart = ({ chartType, data, options, width, height, minWidth = 320 }) => {
  return <Chart
    chartType={chartType}
    data={data}
    options={options}
    style={{ minWidth }}
    width={width}
    height={height}
  />
}
