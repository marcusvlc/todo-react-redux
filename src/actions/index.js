export const addTask = (taskText) => {
    return {
        type: 'ADD_TASK',
        taskText: taskText
    }
}

export const deleteTask = (taskID) => {
    return {
        type: 'DELETE_TASK',
        taskID: taskID
    }
}