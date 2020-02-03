const Employee = require("./Employee")


class Engineer extends Employee {
    constructor (name, id, email, github){
        super(name, id, email);
        this.extra = github;
        this.title = "Engineer";
    }

    getGithub(){
        return this.extra
    }
}

module.exports = Engineer