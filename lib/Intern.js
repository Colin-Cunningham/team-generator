const Employee = require("./Employee")


class Intern extends Employee {
    constructor (name, id, email, school){
        super(name, id, email);
        this.extra = school;
        this.title = "Intern";
    }

    getSchool(){
        return this.extra
    }
}

const newEmployee = new Intern("Colin", 213, "colin.199643@gmail.com","Muhlenberg")

module.exports = Intern