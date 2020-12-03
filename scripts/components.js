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

function List() {
    this.elements = [];
}

function ListElement(text) {
    this.text = text;
}