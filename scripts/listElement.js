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
    var html = `
            <li class="listElement" id="${this.id}">
                <input class="listCheckbox" type="checkbox" onchange="checkTask('${this.id}')" ${this.checked ? "checked" : ""}>
                <label class="listLabel"> ${this.name}</label>
                <button class="button removeButton removeTaskButton" onclick="removeTask('${this.id}')">X</button>
            </li>`;
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