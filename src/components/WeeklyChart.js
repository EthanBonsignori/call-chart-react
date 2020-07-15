import React from 'react';
import { Bar } from 'react-chartjs-2';
import { weeklyOptions } from '../config/chartOptions';
import { generateChartLabels } from '../utils/chartUtils';

const WeeklyChart = props => {
  const data = {
    labels: generateChartLabels(7),
    datasets: [
      {
        label: 'Unanswered Calls',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        data: props.unansweredData,
      },
      {
        label: 'Answered Calls',
        backgroundColor: 'rgba(99, 255, 124, 0.2)',
        borderColor: 'rgba(99, 255, 124, 1)',
        borderWidth: 1,
        data: props.answeredData,
      },
    ],
  };
  return (
    <Bar
      data={data}
      options={weeklyOptions}
    />
  );
};

export default WeeklyChart;
