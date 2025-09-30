// This has the completed code we go through in class;
// we're attaching this so that you have a point of reference
// in case you get a bit lost, but we encourage you
// to follow what we do in class!

// We've included a bit about adding it to a todoList
// array that keeps track of each todo; we won't cover this
// in class, but it'll be helpful for HW6 if
// you want to incorporate a deletion or filtration process!

// List of todo elements:
// Each has a name (name), an element it's tied back to (elem),
// and whether it's completed (completed):
const todoList = [];

// This creates the element we render in the DOM:
const addElement = (todoName) => {
    // Get the element where we hold all todo elements:
    const todoList = document.getElementById("todo");

    // Create an element for our item
    const newTodo = document.createElement("div");

    newTodo.className = "item";
    newTodo.innerHTML = `
    <div class="item">
        <input type="checkbox" />
        ${todoName}
    </div>
    `;

    // Add our todo to our list:
    todoList.appendChild(newTodo);

    // Return the element we made
    return newTodo;
}

const addTodo = () => {
    const name = document.getElementById("todo-name").value;

    // Add an element to our todo list
    const elem = addElement(name);

    // Now add it to our array:
    todoList.push({
        name,
        elem,
        todo: false
    });
}

// Listen for when we press add-elem to add to our todo list:
document.getElementById("add-elem").addEventListener("click", () => {
    // Add it to the todo list!
    addTodo();
});
document.getElementById("todo-name").addEventListener("keydown", (evt) => {
    if(evt.key == "Enter") {
        addTodo();
    }
});