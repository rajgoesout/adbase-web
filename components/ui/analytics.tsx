import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface AnalyticsProps {
  frameName: string;
  frameLink: string;
  onClose: () => void;
}

const Analytics: React.FC<AnalyticsProps> = ({ frameName, frameLink, onClose }) => {
  // Mock data - replace with actual data fetching logic
  const casts = 6;
  const buttonTaps = 20;
  const uniqueFids = 13;
  const inFrameSales = 1;
  const shopifyStoreSales = 1;
  const chartData = {
    // labels: ['Sat 22', '06:00', '12:00', '18:00', 'Jun 23', '06:00'],
    labels: ['Jun 24', 'Jun 25', 'Jun 26', 'Jun 27', 'Jun 28', 'Jun 29'],
    datasets: [
      {
        label: 'Casts',
        data: [0, 1, 0, 2, 0, 3],
        borderColor: 'rgb(75, 255, 192)',
        tension: 0.1
      },
      {
        label: 'Clicks',
        data: [0, 2, 4, 7, 2, 5],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      {
        label: 'Unique User Interactions',
        data: [0, 1, 2, 5, 2, 3],
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1
      },
      {
        label: 'In-frame Sales',
        data: [0, 0, 0, 1, 0, 1],
        borderColor: 'rgb(99, 99, 132)',
        tension: 0.1
      },
      {
        label: 'Shopify Store Sales',
        data: [0, 0, 0, 0, 1, 0],
        borderColor: 'rgb(99, 132, 99)',
        tension: 0.1
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 10,
        ticks: {
          stepSize: 1
        }
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-11/12 shadow-lg rounded-md bg-white">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Analytics for {frameName}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>
        
        <div className="flex space-x-4 mb-6">
        <div className="bg-gray-100 p-4 rounded-lg flex-1">
            <h4 className="text-sm text-gray-500">Casts</h4>
            <p className="text-3xl font-bold">{casts}</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg flex-1">
            <h4 className="text-sm text-gray-500">Clicks</h4>
            <p className="text-3xl font-bold">{buttonTaps}</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg flex-1">
            <h4 className="text-sm text-gray-500">Unique User Interactions</h4>
            <p className="text-3xl font-bold">{uniqueFids}</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg flex-1">
            <h4 className="text-sm text-gray-500">In-frame Sales</h4>
            <p className="text-3xl font-bold">{inFrameSales}</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg flex-1">
            <h4 className="text-sm text-gray-500">Shopify Store Sales</h4>
            <p className="text-3xl font-bold">{shopifyStoreSales}</p>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2">Clicks (1wk)</h4>
          <Line data={chartData} options={chartOptions} />
        </div>

        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <span>{frameLink}</span>
          <button className="p-1 bg-gray-200 rounded">
            📋
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;