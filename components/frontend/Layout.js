import { Flex } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Header from "./Header";

const Column = dynamic(() => import("../Column"), { ssr: false });

const reorderColumnList = (sourceCol, startIndex, endIndex) => {
    const newTaskIds = Array.from(sourceCol.taskIds);
    const [removed] = newTaskIds.splice(startIndex, 1);
    newTaskIds.splice(endIndex, 0, removed);

    const newColumn = {
        ...sourceCol,
        taskIds: newTaskIds,
    };

    return newColumn;
};

const Layout = () => {
    const [state, setState] = useState(initialData);

    const onDragEnd = (result) => {
        const { destination, source } = result;

        // If user tries to drop in an unknown destination
        if (!destination) return;

        // if the user drags and drops back in the same position
        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        // If the user drops within the same column but in a different positoin
        const sourceCol = state.columns[source.droppableId];
        const destinationCol = state.columns[destination.droppableId];

        if (sourceCol.id === destinationCol.id) {
            const newColumn = reorderColumnList(
                sourceCol,
                source.index,
                destination.index
            );

            const newState = {
                ...state,
                columns: {
                    ...state.columns,
                    [newColumn.id]: newColumn,
                },
            };
            setState(newState);
            return;
        }

        // If the user moves from one column to another
        const startTaskIds = Array.from(sourceCol.taskIds);
        const [removed] = startTaskIds.splice(source.index, 1);
        const newStartCol = {
            ...sourceCol,
            taskIds: startTaskIds,
        };

        const endTaskIds = Array.from(destinationCol.taskIds);
        endTaskIds.splice(destination.index, 0, removed);
        const newEndCol = {
            ...destinationCol,
            taskIds: endTaskIds,
        };

        const newState = {
            ...state,
            columns: {
                ...state.columns,
                [newStartCol.id]: newStartCol,
                [newEndCol.id]: newEndCol,
            },
        };

        setState(newState);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Flex
                flexDir="column"
                bg="main-bg"
                minH="100vh"
                w="full"
                color="white-text"
                pb="2rem"
            >
                <Header />

                <Flex px="4rem">
                    {state.columnOrder.map((columnId) => {
                        const column = state.columns[columnId];
                        const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);

                        return <Column key={column.id} column={column} tasks={tasks} />;
                    })}
                </Flex>
            </Flex>
        </DragDropContext>
    );
};

export default Layout;

const initialData = {
  tasks: {
    1: { id: 1, height: "300px", content: 'bargraph' },
    2: { id: 2, height: "30%", content: 'buttons' },
    3: { id: 3, height: "30%", content: 'inputs' },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "TOOLS",
      taskIds: [1, 2, 3],
    },
    "column-2": {
      id: "column-2",
      title: "LAYOUT",
      taskIds: [],
    }
  },
  // Facilitate reordering of the columns
  columnOrder: ["column-1", "column-2"],
};