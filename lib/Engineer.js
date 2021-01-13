// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer {
    constructor(name, Id, email, gitHub) {
        this.name = name;
        this.Id = Id;
        this.email = email;
        this.gitHub = gitHub;
    }
    
getName() {
    return this.name;
}

getID() {
    return this.Id;
}

getEmail() {
    return this.email;
}

getGithub() {
    return this.gitHub;
}

getRole () {
    return this.Engineer;
}

}