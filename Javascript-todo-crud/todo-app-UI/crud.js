const selectors = {
    btnAdd: document.querySelector(".btn"),
    addInput: document.querySelector(".addInput"),
    listConatiner: document.querySelector(".my_list"),
    modal: document.querySelector(".modal"),
    update_modal: document.querySelector(".update_modal"),
    modal_input: document.querySelector(".modal_input")
}

class Todo {
    constructor(task) {
        this.id = 0;
        this.task = task
        this.isCompleted = false
        this.timeCreated = Date.now()
    }
}
class TodoList {
    constructor() {
        this.arr = JSON.parse(localStorage.getItem("data")) || [];
    }
    addNew(task) {
        try {
            if (task === "") throw ("error")
            let newTask = new Todo(task)
            newTask.id = this.arr.length + 1
            this.arr.push(newTask)
            this.sync()
        } catch (e) {
            return e
        }
    }
    remove(id) {
        this.arr = this.arr.filter(a => a.id !== id);
        this.sync()
    }
    update(id, task) {
        if (task === "") return
        this.arr = this.arr.filter(a => {
            if (id === a.id) {
                return a.task = task
            }
            return a
        });
        this.sync()
    }
    getItem(id) {
        return this.arr.filter(a => a.id === id)
    }
    sync() {
        localStorage.setItem("data", JSON.stringify(this.arr));
    }
}
const todo = new TodoList()

const render = () => {
    try {
        const data = JSON.parse(localStorage.getItem("data"))
        selectors.listConatiner.innerText = "";
        data.forEach(data => {
            let div = document.createElement("div");
            let detail = document.createElement("div")
            let task = document.createElement("h2");
            let time = document.createElement("p")
            let del = document.createElement("button");
            let update = document.createElement("button");
            detail.appendChild(task)
            detail.appendChild(time)
            div.appendChild(detail)
            div.appendChild(update)
            div.appendChild(del)
            del.innerText = "Delete"
            update.innerText = "Update"
            task.innerText = data.task
            time.textContent = "Created: " + new Date(data.timeCreated).toTimeString();
            del.classList.add("del");
            update.classList.add("update");
            del.setAttribute("data-id", data.id);
            update.setAttribute("data-id", data.id);
            div.classList.add("box");
            detail.classList.add("detail");
            selectors.listConatiner.appendChild(div)
        });
    } catch (e) {
        return e
    }
}
render()

//show modal
const showModal = (id) => {
    const todToUpdate = todo.getItem(parseInt(id))
    selectors.modal_input.value = todToUpdate[0].task
    selectors.update_modal.setAttribute("data-id", todToUpdate[0].id)
    selectors.modal.style.display = "flex"
}

//hide modal
const hideModal = () => selectors.modal.style.display = "none"


//add new todo
const addNewTodo = () => {
    const task = selectors.addInput.value;
    todo.addNew(task)
    render()
}
//removeTodo
const removeTodo = (id) => {
    const todoToRemove = todo.getItem(parseInt(id))
    const allow = confirm("Are sure you want to delete " + ` '${todoToRemove[0].task} '`);
    if (allow) {
        todo.remove(parseInt(id))
        render()
    }
}

//update todo
const updateTodo = (id) => {
    todo.update(parseInt(id), selectors.modal_input.value)
    hideModal()
    render()
}

//listen addnewitem click
selectors.btnAdd.addEventListener("click", addNewTodo);

//listen delete update click
selectors.listConatiner.addEventListener("click", (e) => {
    if (e.target.classList[0] === "del") {
        removeTodo(e.target.getAttribute("data-id"))
    } else if (e.target.classList[0] === "update") {
        showModal(e.target.getAttribute("data-id"))
    }
});

//listen modal click
selectors.update_modal.addEventListener("click", (e) => updateTodo(e.target.getAttribute("data-id")));