import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    Flex,
    Select,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react'
import { setLabel, setNumValue, reset } from "../redux/slices/barGraph.slice";

const FormInputs = () => {
    const dispatch = useDispatch();

    const barGraphData = useSelector((state) => state.barGraph);
    const { labels } = barGraphData;

    const handleSelectChange = () => (event) => {
        console.log(event.target.value);
        dispatch(setLabel(event.target.value));
    };

    const handleNumChange = (value) => {
        console.log(value);
        dispatch(setNumValue(value));
    };

    return (
        <Flex>
            <Select bg='black' onChange={handleSelectChange()}>
                {labels.map((item, index) => (
                    <option style={{ backgroundColor: 'black' }} key={index} value={index}>{item}</option>
                ))}
            </Select>
            <NumberInput onChange={handleNumChange}>
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
        </Flex>
    )
};

export default FormInputs;