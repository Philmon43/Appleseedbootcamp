let todoItems = [];
const found = (task) => todoItems.filter(a => a.task === task)

const addItem = (task) => {
    if (!found(task).length > 0) return todoItems.push({
        id: todoItems.length + 1,
        task,
        isCompleted: false
    })
    throw ("there  is an item already");
}

const deleteItem = (taskToremove) => {
    if (found(taskToremove).length > 0) return todoItems = todoItems.filter(a => a.task !== taskToremove);
    throw ("no items to remove")
}

const markComplete = (task) => {
    if (found(task).length > 0) {
        for (let i = 0; i < todoItems.length; i++) {
            if (found(task)[0].id === todoItems[i].id) {
                todoItems[i].isCompleted = true
            }
        }
    }
}

const markUnComplete = (task) => {
    if (found(task).length > 0) {
        for (let i = 0; i < todoItems.length; i++) {
            if (found(task)[0].id === todoItems[i].id) {
                todoItems[i].isCompleted = false
            }
        }
    }
}


addItem("9 am study") //
addItem("todo app") //
addItem("do crud with UI") //
markComplete("todo app") //
markUnComplete("9 am study") //
deleteItem("9 am study") //
console.log("after---", todoItems)