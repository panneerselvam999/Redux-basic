import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    tasksList: [
        {
            id: 1,
            title: "Demo ",
            des: "Data"
        }
    ],
    selectedTask: {},
};

const taskSlice = createSlice({
    name: "taskSliceName",
    initialState,
    reducers: {
        addTaskToList: (state, action) => {
            const id = uuidv4();
            let task = { ...action.payload, id };
            state.tasksList.push(task);
        },
        removeTaskFromList: (state, action) => {
            state.tasksList = state.tasksList.filter(
                (task) => task.id !== action.payload.id
            );
        },
        updateTaskInList: (state, action) => {
            state.tasksList = state.tasksList.map((task) =>
                task.id === action.payload.id ? action.payload : task
            );
        },
        setSelectedTask: (state, action) => {
            state.selectedTask = action.payload;
        },
    },
});

export const {
    addTaskToList,
    removeTaskFromList,
    updateTaskInList,
    setSelectedTask,
} = taskSlice.actions;

export default taskSlice.reducer;
