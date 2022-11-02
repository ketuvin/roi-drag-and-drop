import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }],
    currentLabelId: null,
    currentNumValue: null,
    isBarGraphEnabled: false
};

const barGraphSlice = createSlice({
    name: "barGraph",
    initialState: initialState,
    reducers: {
        setLabel: (state, action) => {
            return { ...state, currentLabelId: parseInt(action.payload) };
        },
        setNumValue: (state, action) => {
            return { ...state, currentNumValue: parseInt(action.payload) };
        },
        setIsBarGraphEnabled: (state, action) => {
            return { ...state, isBarGraphEnabled: action.payload };
        },
        updateDataset: (state, action) => {
            return { ...state, datasets: action.payload };
        },
        reset: (state, action) => {
            return {
                ...initialState,
            };
        },
    },
});

export const { setLabel, setNumValue, setIsBarGraphEnabled, updateDataset, reset } = barGraphSlice.actions;
export default barGraphSlice;