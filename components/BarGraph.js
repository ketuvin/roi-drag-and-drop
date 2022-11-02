import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Bar } from "react-chartjs-2";
import "chart.js/auto"; // ADD THIS
import { setIsBarGraphEnabled } from "../redux/slices/barGraph.slice";

const BarGraph = (props) => {
    const dispatch = useDispatch();

    const barGraphData = useSelector((state) => state.barGraph);

    useEffect(() => {
        dispatch(setIsBarGraphEnabled(props.isCustomizable));
    }, [dispatch, props.isCustomizable]);

    return <Bar data={barGraphData} width={400} height={200} options={{ maintainAspectRatio: false }} />;
};

export default BarGraph;