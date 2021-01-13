// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern {
    constructor(name, Id, email, school) {
        this.name = name;
        this.Id = Id;
        this.email = email;
        this.school = school;
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

getSchool () {
    return this.school;
}

getRole () {
    return this.Intern;
}

}