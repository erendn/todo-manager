function Session() {
    this.user = null;
}

function User(username, password, name, birthDate, gender) {
    this.username = username;
    this.password = password;
    this.name = name;
    this.birthDate = birthDate;
    this.gender = gender;
    this.lists = [];
}

function List(name) {
    this.name = name;
    this.elements = [];
}

List.prototype.changeName = function (name) {
    this.name = name;
}

List.prototype.addElement = function (element) {
    this.elements.push(element);
}

function ListElement(text) {
    this.checked = false;
    this.text = text;
}

ListElement.prototype.check = function (checked) {
    this.checked = checked;
}