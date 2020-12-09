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
    var html = `<div class="task" id="${this.id}">
        <input type="checkbox" class="task-check" onchange="checkTask('${this.id}')" ${this.checked ? "checked" : ""}>
        <label class="task-name">${this.name}</label>
        <button type="button" onclick="removeTask('${this.id}')">X</button>
        </div>`;
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