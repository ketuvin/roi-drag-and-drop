import { Flex, Heading, Text } from "@chakra-ui/react";

function Header() {
    return (
        <Flex py="4rem" flexDir="column" align="center">
            <Heading fontSize="3xl" fontWeight={600}>
                DRAG N DROP
            </Heading>
            <Text fontSize="20px" fontWeight={600} color="subtle-text">
                Kevin Fuentes
            </Text>
        </Flex>
    );
}

export default Header;
