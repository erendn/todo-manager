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
function register(username, password, name, birthDate, gender) {
    if (localStorage.getItem(username) != null)
        return false;
    var user = new User(username, password, name, birthDate, gender);
    localStorage.setItem(username, user);
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
    if (user.password != password)
        return false;
    var session = JSON.parse(sessionStorage.getItem("session"));
    session.user = username;
    session.setItem("session", JSON.stringify(session));
    return true;
}