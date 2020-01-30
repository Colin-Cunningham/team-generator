const Employee = require("./Employee")


class Intern extends Employee {
    constructor (name, id, email, school){
        super(name, id, email);
        this.school = school;
        this.title = "Intern";
    }

    getSchool(){
        return this.school
    }
}

const newEmployee = new Intern("Colin", 213, "colin.199643@gmail.com","Muhlenberg")


console.log(newEmployee.getSchool())


module.exports = Intern