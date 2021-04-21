// function addTask() {
//     let formDay = document.getElementById("newDate");
//     let formTask = document.getElementById("newTask");

//     createTask(formDay, formTask);
// }

let eventArray = [];

// Local storage 
function prepareLocalStorage() {
    if (getLocalStorage() == null)
        setLocalStorage(new Array());
}

function getLocalStorage() {
    return JSON.parse(localStorage.getItem("taskArray")) || [];
}

function setLocalStorage(info) {
    localStorage.setItem("taskArray", JSON.stringify(info));
}


tr.complete > td: nth - child(-n + 4) {
    text - decoration: line - through;
}

function listTasks(listData) {
    const resultsTable = document.getElementById("tableValues");
    // clear table first
    resultsTable.innerHTML = "";

    for (let i = 0; i < listData.length; i++) {
        const taskRow = document.importNode(template.content, true);
        // apply items into array based on objects we refer to
        taskRow.getElementById("title").textContent = listData[i].title;
        taskRow.getElementById("created").textContent = listData[i].created;
        taskRow.getElementById("dueDate").textContent = listData[i].dueDate;
        taskRow.getElementById("secretId").textContent = listData[i].secretId;
        taskRow.getElementById("completed").textContent = listData[i].completed;

        tableValues.appendChild(taskRow);
    }
}



// Table
function createTask(formDay, formTask) {
    let tasks = getLocalStorage();

    let task = {
        secretId: generateId(),
        created: new Date(),
        completed: false,
        title: formDay.value,
        dueDate: new Date(`${formTask.value} 00:00`)
    }
    tasks.push(task);
    setLocalStorage(tasks);
    listTasks();
}

// Generate id for task
function generateId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// Save Tasks
function saveTask() {
    let taskForm = JSON.parse(localStorage.getItem("taskArray")) || taskArray;
    let obj = {};
    obj["id"] = document.getElementById("newtask").value;
    obj["title"] = document.getElementById("newtask").value;
    obj["completed"] = document.getElementById(false);
    obj["created"] = new Date(document.getElementById("newDate").value).toLocaleDateString();
    obj["dueDate"] = new Date(document.getElementById("newDate").value).toLocaleDateString();
    taskForm.push(obj);
    localStorage.setItem("taskArray", JSON.stringify(taskForm));

    displayData(taskForm);
}

function displayData() {

}



// on load function to retrieve data
function retrieveTask() {
    let current = getLocalStorage();
    displayData(current);
}