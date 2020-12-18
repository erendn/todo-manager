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

/**
 * Appends the list on the page.
 */
List.prototype.appendDOM = function() {
   /* var html = `<div class="list" id="${this.id}">
      <div class="list-top">
        <label class="list-name">${this.name}</label><div>
        <input type="text" id="newTaskName-${this.id}" placeholder="New Task"></input>
        <button class="addTask" onclick="addNewTask('${this.id}')">Add New Task</button>
        <button type="button" onclick="removeList('${this.id}')">X</button>
      </div></div>`; */
          var html = `<div class="frame col-4" id="${this.id}" >
    <header>
    <button class="button button33" onclick="removeList('${this.id}')">Remove List</button>
        <h1 class="list-name">${this.name}</h1>
        <input class="w3-input input-mobile-todo" type="text" id="newTaskName-${this.id}" placeholder="New Task"></input>
        <button class="button button2" onclick="addNewTask('${this.id}')">Add New Task</button>
    </header>
    <form>
        <ul class="list">`; 

/*
      <div class="frame">
    <header>
        <h1 id="day">Today</h1>
        <h2 id="date">asdsada</h2>
    </header>
    <form>
        <ul class="list">
            <li class="list-li">
                <input class="list-input" id="item-0" type="checkbox">
                <label class="list-label" for="item-0">Create this list</label>
            </li>
            <li class="list-li">
                <input class="list-input" id="item-1" type="checkbox">
                <label class="list-label" for="item-1">Style it pretty</label>
            </li>
            <li class="list-li">
                <input class="list-input" id="item-2" type="checkbox">
                <label class="list-label" for="item-2">Check all the circles</label>
            </li>
            <li class="list-li">
                <input class="list-input" id="item-3" type="checkbox">
                <label class="list-label" for="item-3">Time for a drink</label>
        </ul>
    </form>
    
</div>
*/


    document.getElementById("lists").innerHTML += html;
    this.tasks.forEach(task => task.appendDOM());
}

/**
 * Removes the list from the page.
 */
List.prototype.remove = function () {
    document.getElementById(this.id).remove();
}

/**
 * Finds an empty index for list element.
 */
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

/**
 * Removes list element from the list and the page.
 * @param {number} id 
 */
List.prototype.removeTask = function (id) {
    for (var i = 0; i < this.tasks.length; ++i) {
        if (this.tasks[i].id == id) {
            this.tasks.splice(i, 1)[0].remove();
            break;
        }
    }
}

/**
 * Returns the list element with the given id.
 * @param {number} id 
 */
List.prototype.getTask = function (id) {
    for (var i = 0; i < this.tasks.length; ++i) {
        if (this.tasks[i].id == id) {
            return this.tasks[i];
        }
    }
    return null;
}