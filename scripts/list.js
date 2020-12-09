/**
 * Creates a new instance of List.
 * @param {string} id 
 * @param {string} name 
 */
function List(id, name) {
    this.id = "l" + id;
    this.name = name;
    this.tasks = [];
    this.appendDOM();
}

List.prototype.appendDOM = function() {
    var html = `<div class="list" id="${this.id}">
      <div class="list-top">
        <label class="list-name">${this.name}</label><div>
        <input type="text" id="newTaskName-${this.id}" placeholder="New Task"></input>
        <button class="addTask" onclick="addNewTask('${this.id}')">Add New Task</button>
        <button type="button" onclick="removeList('${this.id}')">X</button>
      </div></div>`;
    document.getElementById("lists").innerHTML += html;
    this.tasks.forEach(task => task.appendDOM());
}

List.prototype.remove = function () {
    document.getElementById(this.id).remove();
}

List.prototype.findId = function () {
    for (var i = 0; i <= this.tasks.length; ++i) {
        var exists = false;
        for (var j = 0; !exists && j < this.tasks.length; ++j)
            if (this.tasks[j].id.split("e")[1] == i)
                exists = true;
        if (!exists)
            return i;
    }
    return -1;
}

List.prototype.removeTask = function (id) {
    for (var i = 0; i < this.tasks.length; ++i) {
        if (this.tasks[i].id == id) {
            this.tasks.splice(i, 1)[0].remove();
            break;
        }
    }
}

List.prototype.getTask = function (id) {
    for (var i = 0; i < this.tasks.length; ++i) {
        if (this.tasks[i].id == id) {
            return this.tasks[i];
        }
    }
    return null;
}