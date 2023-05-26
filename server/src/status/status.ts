const taskStatus = {
    todo: "to-do",
    doing: "doing",
    completed: "completed"
}

function checkTaskStatus(statusType: String) {
    return (statusType == taskStatus.todo || statusType == taskStatus.doing || 
        statusType == taskStatus.completed);
}

export { taskStatus, checkTaskStatus }