// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager {
    constructor(name, Id, email, officeNumber) {
        this.name = name;
        this.Id = Id;
        this.email = email;
        this.officeNumber = officeNumber;
    }

getName () {
    return this.name;
}

getId () {
    return this.Id;
}

getEmail () {
    return this.email;
}

getOfficeNumber () {
    return this.officeNumber;
}

getRole () {
    return this.Manager;
}

}

module.exports = Manager;