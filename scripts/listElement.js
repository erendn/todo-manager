/**
 * Creates a new instance of ListElement.
 * @param {List} list 
 * @param {string} id 
 * @param {string} name 
 */
function ListElement(list, id, name) {
    this.id = list.id + "e" + id;
    this.name = name;
    this.checked = false;
    this.appendDOM();
}

/**
 * Appends the object to the DOM.
 */
ListElement.prototype.appendDOM = function () {
     /*   var html = `<div class="task" id="${this.id}">
        <input type="checkbox" class="task-check" onchange="checkTask('${this.id}')" ${this.checked ? "checked" : ""}>
        <label class="task-name">${this.name}</label>
        <button type="button" onclick="removeTask('${this.id}')">X</button>
        </div>`; */
        var html = `
            <li class="list-li" id="${this.id}">
            
            
                <input class="list-input" type="checkbox" onchange="checkTask('${this.id}')" ${this.checked ? "checked" : ""}>
                <label class="list-label"> ${this.name}</label>
                <button class="button button3" onclick="removeTask('${this.id}')">X</button>
            </li>`;

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

    document.getElementById(this.id.split("e")[0]).innerHTML += html;
}

/**
 * Removes the object from the DOM.
 */
ListElement.prototype.remove = function () {
    document.getElementById(this.id).remove();
}

/**
 * Updates check attribute according to the checkbox of the object.
 */
ListElement.prototype.check = function () {
    this.checked = document.getElementById(this.id).firstChild.nextSibling.checked;
}