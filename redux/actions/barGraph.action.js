import { updateDataset } from "../slices/barGraph.slice";

export const updateGraph = (operation = null) => {
    return (dispatch, getState) => {
        const {currentLabelId, currentNumValue, datasets } = getState().barGraph;

        let dataInitialValues = [
            parseInt(datasets[0].data[0]), 
            parseInt(datasets[0].data[1]), 
            parseInt(datasets[0].data[2]), 
            parseInt(datasets[0].data[3]), 
            parseInt(datasets[0].data[4])
        ];

        if (currentLabelId && currentNumValue) {
            if (operation === 'add') {
                dataInitialValues[currentLabelId] += currentNumValue;
            } else if (operation === 'subtract') {
                dataInitialValues[currentLabelId] -= currentNumValue;
            } else if (operation === 'multiply') {
                dataInitialValues[currentLabelId] *= currentNumValue;
            } else {
                dataInitialValues[currentLabelId] /= currentNumValue;
            }

            let newDataSets = [{
                label: datasets[0].label,
                data: dataInitialValues,
                backgroundColor: datasets[0].backgroundColor,
                borderColor: datasets[0].borderColor,
                borderWidth: datasets[0].borderWidth
            }];

            dispatch(updateDataset(newDataSets));
        }
    }
};