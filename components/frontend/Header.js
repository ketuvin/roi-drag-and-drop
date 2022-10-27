import { useDispatch } from "react-redux";
import { Flex, Heading, Text, Button } from "@chakra-ui/react";
import { reset } from "../../redux/slices/barGraph.slice";

const Header = () => {
    const dispatch = useDispatch();

    const clear = (e) => {
        e.preventDefault();
        dispatch(reset());
    }

    return (
        <Flex py="4rem" flexDir="column" align="center">
            <Heading fontSize="3xl" fontWeight={600}>
                DRAG N DROP
            </Heading>
            <Text fontSize="20px" fontWeight={600} color="subtle-text">
                Kevin Fuentes
            </Text>
            <Button colorScheme='teal' mt={"50px"} onClick={clear}>
                RESET GRAPH
            </Button>
        </Flex>
    );
};

export default Header;
