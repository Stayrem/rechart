import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const container = document.querySelector(`.graph`);
const containerSizes = {
  WIDTH: container.offsetWidth,
  HEIGHT: container.offsetHeight
}

const data = [
  {
    date: '00:00', value: 1000, session: 21801280, capacity: 40650.0,
  },
  {
    date: '02:30', value: 2000, session: 218012, capacity: 40250.0,
  },
  {
    date: '05:00', value: 1200, session: 2180, capacity: 20650.0,
  },
  {
    date: '07:30', value: 600, session: 21801280, capacity: 30650.0,
  },
  {
    date: '09:00', value: 1800, session: 218012345, capacity: 47650.0,
  },
  {
    date: '12:30', value: 1700, session: 21805480, capacity: 106500.0,
  },
  {
    date: '15:00', value: 2200, session: 21854280, capacity: 40650.0,
  },
];

export default class Example extends PureComponent {

  render() {
    return (
      <LineChart
        width={100%}
        height={containerSizes.HEIGHT - 30}
        data={data}
       
      >
        <CartesianGrid vertical={false}/>
        <XAxis style={{ fontFamily: 'Roboto, sans-serif' }} stroke="transparent" dataKey="date" tick={{ fill: '#969ca4'}} dx={15}/>
        <YAxis style={{ fontFamily: 'Roboto, sans-serif' }} stroke="transparent"r tick={{ fill: '#969ca4' }} dy={-15} />
        <Tooltip />
        
        <Line strokeWidth={3} type="monotone" dataKey="value" stroke="#0077db" activeDot={{ r: 8 }} />
      </LineChart>
    );
  }
}