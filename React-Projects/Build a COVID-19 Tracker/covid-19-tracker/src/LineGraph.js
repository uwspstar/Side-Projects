import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import axios from 'axios';
import { API } from './api'
import numeral from 'numeral'
import './LineGraph.css'

const options = {
    Legend: { display: false },
    elements: {
        point: {
            radius: 0
        }
    },
    maintainAspectRation: false,
    tooltips: {
        mode: "index",
        intersect: false,
        callbacks: {
            label: function (tooltipItem, data) {
                return numeral(tooltipItem.value).format("+0,0")
            },
        },
    },
    scales: {
        xAxes: [
            {
                type: "time",
                time: {
                    format: "MM/DD/YY",
                    tooltipFormat: "ll"
                },
            },
        ],
        yAxes: [
            {
                gridLines: {
                    display: false,

                },
                ticks: {
                    callback: function (value, index) {
                        return numeral(value).format("0a");
                    },
                },
            },
        ],
    }
}
function LineGraph({ casesType }) {
    const [data, setData] = useState({});

    useEffect(async () => {
        const response = await axios.get(API.HISTORY_LAST_120);
        const data = await response.data;
        const charData = buildChartData(data, casesType);
        setData(charData);
    }, [casesType]);

    const buildChartData = (data, casesType = 'cases') => {
        const chartData = [];
        let lastDataPoint;
        for (let date in data.cases) {
            if (lastDataPoint) {
                const newDataPoint = {
                    x: date,
                    y: data[casesType][date] - lastDataPoint
                }
                chartData.push(newDataPoint);
            }
            lastDataPoint = data[casesType][date];
        }
        return chartData;
    }

    return (
        <div className='lineGraph'>
            {data?.length > 0 && (
                <Line
                    options={options}
                    data={{
                        datasets: [
                            {
                                backgroundColor: "rgba(204,16, 52,0.5)",
                                borderColor: "#CC1034",
                                data: data
                            },
                        ],
                    }}
                />
            )}
        </div>
    )
}

export default LineGraph
