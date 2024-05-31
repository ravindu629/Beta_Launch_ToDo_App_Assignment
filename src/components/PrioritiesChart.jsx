import React, { useEffect, useRef, useState } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale);

const PrioritiesChart = () => {
  const [tasks, setTasks] = useState([]);
  const [chartData, setChartData] = useState({});
  const chartRef = useRef(null);

  useEffect(() => {
    // Fetch the tasks from the API
    const fetchTasks = async () => {
      try {
        const response = await fetch(
          "https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do"
        );
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  useEffect(() => {
    if (tasks.length === 0) return;

    // Calculate the count of tasks by priority
    const priorityCounts = tasks.reduce((acc, task) => {
      const priority = task.priority;
      if (!acc[priority]) {
        acc[priority] = 0;
      }
      acc[priority]++;
      return acc;
    }, {});

    // Prepare data for the chart
    const data = {
      labels: Object.keys(priorityCounts),
      datasets: [
        {
          data: Object.values(priorityCounts),
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        },
      ],
    };

    setChartData(data);

    return () => {
      // Cleanup logic to destroy the chart instance if it exists
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [tasks]);

  return (
    <div>
      {chartData.labels ? (
        <div style={{ padding: "30px" }}>
          <Doughnut
            ref={(el) => {
              if (el) {
                chartRef.current = el.chartInstance;
              }
            }}
            data={chartData}
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PrioritiesChart;
