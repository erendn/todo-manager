/**
 * Creates a new instance of Session.
 */
function Session() {
    this.user = null;
}

/**
 * Creates a new instance of user.
 * @param {string} username 
 * @param {string} password 
 * @param {string} name 
 * @param {Date} birthDate 
 * @param {string} gender 
 */
function User(username, password, name, birthDate, gender) {
    this.username = username;
    this.password = password;
    this.name = name;
    this.birthDate = birthDate;
    this.gender = gender;
    this.lists = [];
}

/**
 * Finds an empty id slot for List.
 */
User.prototype.findId = function () {
    for (var i = 0; i <= this.lists.length; ++i) {
        var exists = false;
        for (var j = 0; !exists && j < this.lists.length; ++j)
            if (this.lists[j].id.substr(1) == i)
                exists = true;
        if (!exists)
            return i;
    }
    return -1;
}

/**
 * Removes the List with the given id from the lists.
 * @param {string} id 
 */
User.prototype.removeList = function (id) {
    for (var i = 0; i < this.lists.length; ++i)
        if (this.lists[i].id == id) {
            this.lists.splice(i, 1);
            break;
        }
}

/**
 * Returns the List with the given id from the lists.
 * @param {string} id 
 */
User.prototype.getList = function (id) {
    for (var i = 0; i < this.lists.length; ++i)
        if (this.lists[i].id == id)
            return this.lists[i];
    return null;
}

/**
 * Creates a new instance of List.
 * @param {string} name 
 */
function List(id, name = "New List") {
    this.id = "l" + id;
    this.name = name;
    this.elements = [];
}

/**
 * Returns an empty id slot for ListElement.
 */
List.prototype.findId = function () {
    for (var i = 0; i <= this.elements.length; ++i) {
        var exists = false;
        for (var j = 0; !exists && j < this.elements.length; ++j)
            if (this.elements[j].id.substr(1) == i)
                exists = true;
        if (!exists)
            return i;
    }
    return -1;
}

/**
 * Changes the name of a list.
 * @param {string} name 
 */
List.prototype.changeName = function (name) {
    this.name = name;
}

/**
 * Returns the ListElement with the given id.
 * @param {string} id 
 */
List.prototype.getElement = function (id) {
    for (var i = 0; i < this.elements.length; ++i) {
        if (this.elements[i].id == id)
            return this.elements[i];
    }
    return null;
}

/**
 * Removes the ListElement with the given id from the list.
 * @param {string} id 
 */
List.prototype.removeListElement = function (id) {
    for (var i = 0; i < this.elements.length; ++i) {
        if (this.elements[i].id == id) {
            this.elements.splice(i, 1);
            break;
        }
    }
}

/**
 * Creates a new instance of ListElement.
 * @param {string} text 
 */
function ListElement(id, checked = false, text = "Task") {
    this.id = "e" + id;
    this.checked = checked;
    this.text = text;
}