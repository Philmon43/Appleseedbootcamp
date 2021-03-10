let todoItems = [];
const found = (task) => todoItems.filter(a => a.task === task)

const addItem = (task) => {
    if (!found(task).length > 0){
        const todo = {id: todoItems.length + 1,task,isCompleted: false} 
        todoItems.push(todo)
        return todo
    }
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
        return todoItems
    }else{
        return false
    }
}

const markUnComplete = (task) => {
    if (found(task).length > 0) {
        for (let i = 0; i < todoItems.length; i++) {
            if (found(task)[0].id === todoItems[i].id) {
                todoItems[i].isCompleted = false
            }
        }
        return todoItems
    }else{
        return false
    }
}


addItem("9 am study") //
addItem("todo app") //
addItem("do crud with UI") //
markComplete("todo app") //
markUnComplete("9 am study") //
deleteItem("9 am study") //

module.exports = {addItem, deleteItem, markComplete, markUnComplete, todoItems}