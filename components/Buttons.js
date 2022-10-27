import { useSelector, useDispatch } from "react-redux";
import { Button, Stack } from '@chakra-ui/react';
import { updateGraph } from '../redux/actions/barGraph.action';

const Buttons = () => {
    const dispatch = useDispatch();

    const addValues = (e) => {
        e.preventDefault();
        console.log("ADD!");
        dispatch(updateGraph('add'));
    };

    const subtractValues = (e) => {
        e.preventDefault();
        console.log("SUBTRACT!");
        dispatch(updateGraph('subtract'));
    };

    const multiplyValues = (e) => {
        e.preventDefault();
        console.log("MULTIPLY!");
        dispatch(updateGraph('multiply'));
    };

    const divideValues = (e) => {
        e.preventDefault();
        console.log("DIVIDE!");
        dispatch(updateGraph('divide'));
    };

    return (
        <Stack direction='row' spacing={4} align='center'>
            <Button colorScheme='teal' variant='outline' onClick={addValues}>
                ADD
            </Button>
            <Button colorScheme='teal' variant='outline' onClick={subtractValues}>
                SUBTRACT
            </Button>
            <Button colorScheme='teal' variant='outline' onClick={multiplyValues}>
                MULTIPLY
            </Button>
            <Button colorScheme='teal' variant='outline' onClick={divideValues}>
                DIVIDE
            </Button>
        </Stack>
    );
};
  
export default Buttons;