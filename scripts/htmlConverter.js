/**
 * Converts a List instance to HTML code.
 * @param {List} list 
 */
function fromList(list) {
    var html = `<div class="list" id="${list.id}">
      <div class="list-top">
        <textarea class="list-name" rows="1" cols="20" onfocusout="saveLists()">${list.name}</textarea>
        <button id="addTask" onclick="addNewTask('${list.id}')">Add New Task</button>
        <button type="button" onclick="removeList('${list.id}')">X</button>
      </div>`;
    for (var i = 0; i < list.elements.length; ++i) {
        html += fromListElement(list.elements[i], list.id);
    }
    html += `</div>`;
    return html;
}

/**
 * Converts an HTML code to List instance.
 * @param {string} html 
 */
function toList(html) {
    var list = new List(html.id.substr(1), html.firstChild.nextSibling.firstChild.nextSibling.value);
    var elements = html.getElementsByClassName("task");
    for (var j = 0; j < elements.length; ++j) {
        list.elements.push(toListElement(elements[j]));
    }
    return list;
}

/**
 * Converts a ListElement instance to HTML code.
 * @param {ListElement} element 
 * @param {string} listId 
 */
function fromListElement(element, listId) {
    return `<div class="task" id="${element.id}">
        <input type="checkbox" class="task-check" onchange="saveLists()" ${element.checked ? "checked" : ""}>
        <textarea class="task-name" rows="1" cols="50" onfocusout="saveLists()">${element.text}</textarea>
        <button type="button" onclick="removeListElement('${listId}', '${element.id}')">X</button>
        </div>`;
}

/**
 * Converts an HTML code to ListElement instance.
 * @param {string} html 
 */
function toListElement(html) {
    return new ListElement(html.id.substr(1), html.firstChild.nextSibling.checked, html.firstChild.nextSibling.nextSibling.nextSibling.value);
}

/**
 * Adds a new list to the page and the user's lists ad updates the page.
 */
function addNewList() {
    var user = getUser();
    var list = new List(user.findId());
    var html = fromList(list);
    document.getElementById("lists").innerHTML += html;
    saveLists(user);
}

/**
 * Removes a list from the page and the user's lists and updates the page.
 * @param {string} listId 
 */
function removeList(listId) {
    var user = getUser();
    user.removeList(listId);
    document.getElementById(listId).remove();
    updateUser(user);
}

/**
 * Adds a new task to the list and updates the page.
 * @param {string} id 
 */
function addNewTask(id) {
    var user = getUser();
    var list = user.getList(id);
    var element = new ListElement(list.findId());
    document.getElementById(id).innerHTML += fromListElement(element, id);
    saveLists(user);
}

/**
 * Removes the task from the list and updates the page.
 * @param {string} listId 
 * @param {string} elementId 
 */
function removeListElement(listId, elementId) {
    var user = getUser();
    var list = user.getList(listId);
    list.removeListElement(elementId);
    var tasks = document.getElementById(listId).getElementsByClassName("task");
    for (var i = 0; i < tasks.length; ++i)
        if (tasks[i].id == elementId)
            tasks[i].remove();
    updateUser(user);
}

/**
 * Saves the lists to the user's storage.
 * @param {User} user 
 */
function saveLists(user) {
    if (user == undefined)
        user = getUser();
    user.lists = [];
    var lists = document.getElementsByClassName("list");
    for (var i = 0; i < lists.length; ++i) {
        var list = toList(lists[i]);
        user.lists.push(list);
    }
    updateUser(user);
}

/**
 * Loads lists of the user logged in and updates the page.
 */
function loadLists() {
    var user = getUser();
    for (var i = 0; i < user.lists.length; ++i) {
        var html = fromList(user.lists[i]);
        document.getElementById("lists").innerHTML += html;
    }
}