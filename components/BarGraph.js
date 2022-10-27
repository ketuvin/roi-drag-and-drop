import React from "react";
import { useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";
import "chart.js/auto"; // ADD THIS

const BarGraph = () => {
    const barGraphData = useSelector((state) => state.barGraph);

    return <Bar data={barGraphData} width={400} height={200} options={{ maintainAspectRatio: false }} />;
};

export default BarGraph;