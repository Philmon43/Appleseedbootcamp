const {addItem, deleteItem, markComplete, markUnComplete} = require("./todo-app");

test("addItem need to create new todo Object ", () => {
    expect(addItem("studying").task).toBe("studying");
})

test("will remove element from data", () => {
    expect(deleteItem("studying").filter(a => a.task === "studying").length > 0).toBe(false)
});

test("markcomplete will mark true tif there is a todo with a task name  === todolist :)", () => {
    expect(markComplete("gfggvgvssx")).toBe(false);
});

test("markUnComplete will mark false tif there is a todo with a task name === todolist", () => {
    expect(markUnComplete("gmhjnrvnrnvfrnv")).toBe(false);
});