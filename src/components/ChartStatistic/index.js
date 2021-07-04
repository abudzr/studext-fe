import React from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ReferenceLine,
    ResponsiveContainer,
} from 'recharts';
import { Data } from './data.js'
import '../../assets/css/statistic.css'



function Statistic() {
    return (
        <div className="statistic">
            <div className="d-flex justify-content-between">
                <h1>Statistic</h1>
                <div className="dropdown">
                    <button className="btn btn-month dropdown-toggle" type="button" >
                        Month
                    </button>
                </div>
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <BarChart
                    width={500}
                    height={300}
                    data={Data}
                    stackOffset="sign"
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <ReferenceLine y={0} stroke="#000" />
                    <Bar dataKey="pv" fill="#008FFF" stackId="stack" />
                    <Bar dataKey="uv" fill="#DB0038" stackId="stack" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Statistic
