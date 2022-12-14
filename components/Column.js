import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import BarGraph from "./BarGraph";
import Buttons from "./Buttons";
import FormInputs from "./FormInputs";

const Column = ({ column, tasks }) => {
  return (
    <Flex rounded="3px" bg="column-bg" w={column.title == "LAYOUT" ? "full" : "600px"} h="full" flexDir="column">
        <Flex
            align="center"
            justifyContent={"center"}
            h="60px"
            bg="column-header-bg"
            rounded="3px 3px 0 0"
            px="1.5rem"
            mb="1.5rem"
        >
            <Text fontSize="17px" fontWeight={600} color="subtle-text">
                {column.title}
            </Text>
        </Flex>

        <Droppable droppableId={column.id}>
            {(droppableProvided, droppableSnapshot) => (
                <Flex
                    px="1.5rem"
                    align={"center"}
                    flex={1}
                    flexDir="column"
                    ref={droppableProvided.innerRef}
                    {...droppableProvided.droppableProps}
                >
                    {tasks.map((task, index) => (
                        <Draggable key={task.id} draggableId={`${task.id}`} index={index}>
                            {(draggableProvided, draggableSnapshot) => (
                                <Flex
                                    mb="1rem"
                                    h={task.height ?? "72px"}
                                    bg="card-bg"
                                    rounded="3px"
                                    p="1.5rem"
                                    outline="2px solid"
                                    outlineColor={
                                        draggableSnapshot.isDragging
                                            ? "card-border"
                                            : "transparent"
                                    }
                                    boxShadow={
                                        draggableSnapshot.isDragging
                                            ? "0 5px 10px rgba(0, 0, 0, 0.6)"
                                            : "unset"
                                    }
                                    ref={draggableProvided.innerRef}
                                    {...draggableProvided.draggableProps}
                                    {...draggableProvided.dragHandleProps}
                                >
                                    {task.content == 'bargraph' && <BarGraph isCustomizable={column.title == "LAYOUT" ? true : false}/>}
                                    {task.content == 'buttons' && <Buttons isCustomizable={column.title == "LAYOUT" ? true : false}/>}
                                    {task.content == 'inputs' && <FormInputs isCustomizable={column.title == "LAYOUT" ? true : false}/>}
                                </Flex>
                            )}
                        </Draggable>
                    ))}
                    {droppableProvided.placeholder}
                </Flex>
            )}
        </Droppable>
    </Flex>
  );
};

export default Column;