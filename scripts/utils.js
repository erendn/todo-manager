/**
 * Creates a new session if none exists in the session storage.
 */
function initSession() {
    if (sessionStorage.getItem("session") == null) {
        var session = new Session();
        sessionStorage.setItem("session", JSON.stringify(session));
    }
}

/**
* Creates a new user with the given username and password. Returns true
* if the process was successful. Otherwise, returns false.
* @param {string} username 
* @param {string} password 
* @param {string} name 
* @param {Date} birthDate 
* @param {boolean} gender 
*/
function register(username, password, email, birthDate, gender) {
    if (localStorage.getItem(username) != null)
        return false;
    var user = new User(username, password, email, birthDate, gender);
    updateUser(user);
    return true;
}

/**
 * Logs a user in the session. If there is no user with the given username,
 * returns null; if the given password is incorrect, returns false; else returns
 * true.
 * @param {string} username 
 * @param {string} password 
 */
function login(username, password) {
    var user = localStorage.getItem(username);
    if (user == null)
        return null;
    user = JSON.parse(user);
    if (user.password != password)
        return false;
    var session = JSON.parse(sessionStorage.getItem("session"));
    session.user = username;
    updateSession(session);
    return true;
}

/**
 * Logs a user out of the session.
 */
function logout() {
    var session = JSON.parse(sessionStorage.getItem("session"));
    session.user = null;
    updateSession(session);
}

/**
 * Updates session information in the session stroage.
 * @param {Session} session 
 */
function updateSession(session) {
    sessionStorage.setItem("session", JSON.stringify(session));
}

/**
 * Updates user information in the local storage.
 * @param {User} user 
 */
function updateUser(user) {
    localStorage.setItem(user.username, JSON.stringify(user));
}

/**
 * Loads all lists of the user.
 */
function init() {
    var username = JSON.parse(sessionStorage.getItem("session")).user;
    USER = Object.setPrototypeOf(JSON.parse(localStorage.getItem(username)), User.prototype);
    for (var i = 0; i < USER.lists.length; ++i) {
        Object.setPrototypeOf(USER.lists[i], List.prototype);
        for (var j = 0; j < USER.lists[i].tasks.length; ++j) {
            Object.setPrototypeOf(USER.lists[i].tasks[j], ListElement.prototype);
        }
    }
    USER.appendDOM();
}

/**
 * Adds a new list for the user.
 */
function addNewList() {
    var name = document.getElementById("newListName").value;
    if (name.length != 0) {
        var id = USER.findId();
        var list = new List(id, document.getElementById("newListName").value);
        USER.lists.push(list);
        updateUser(USER);
    } else
        alert("List name cannot be empty.");
}

/**
 * Removes the list with the given id from the page and storage.
 * @param {string} id 
 */
function removeList(id) {
    USER.removeList(id);
    updateUser(USER);
}

/**
 * Adds a new task to the list with the given id.
 * @param {string} id 
 */
function addNewTask(id) {
    var name = document.getElementById("newTaskName-" + id).value;
    if (name.length != 0) {
        var list = USER.getList(id);
        list.tasks.push(new ListElement(list, list.findId(), name));
        updateUser(USER);
    } else
        alert("Task name cannot be empty.");
}

/**
 * Removes the task with the given id from the page.
 * @param {string} id 
 */
function removeTask(id) {
    USER.getList(id.split("e")[0]).removeTask(id);
    updateUser(USER);
}

/**
 * Updates the task.
 * @param {string} id 
 */
function checkTask(id) {
    USER.getList(id.split("e")[0]).getTask(id).check();
    updateUser(USER);
}

var USER = null;