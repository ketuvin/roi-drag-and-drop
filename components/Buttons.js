import { useSelector, useDispatch } from "react-redux";
import { Button, Stack } from '@chakra-ui/react';
import { updateGraph } from '../redux/actions/barGraph.action';

const Buttons = (props) => {
    const dispatch = useDispatch();

    const { isBarGraphEnabled } = useSelector((state) => state.barGraph);

    const addValues = (e) => {
        e.preventDefault();

        if (isBarGraphEnabled) {
            console.log("ADD!");
            dispatch(updateGraph('add'));
        }
    };

    const subtractValues = (e) => {
        e.preventDefault();

        if (isBarGraphEnabled) {
            console.log("SUBTRACT!");
            dispatch(updateGraph('subtract'));
        }
    };

    const multiplyValues = (e) => {
        e.preventDefault();

        if (isBarGraphEnabled) {
            console.log("MULTIPLY!");
            dispatch(updateGraph('multiply'));
        }
    };

    const divideValues = (e) => {
        e.preventDefault();

        if (isBarGraphEnabled) {
            console.log("DIVIDE!");
            dispatch(updateGraph('divide'));
        }
    };

    return (
        <Stack direction='row' spacing={4} align='center'>
            <Button colorScheme='teal' variant='outline' disabled={!props.isCustomizable} onClick={addValues}>
                ADD
            </Button>
            <Button colorScheme='teal' variant='outline' disabled={!props.isCustomizable} onClick={subtractValues}>
                SUBTRACT
            </Button>
            <Button colorScheme='teal' variant='outline' disabled={!props.isCustomizable} onClick={multiplyValues}>
                MULTIPLY
            </Button>
            <Button colorScheme='teal' variant='outline' disabled={!props.isCustomizable} onClick={divideValues}>
                DIVIDE
            </Button>
        </Stack>
    );
};
  
export default Buttons;