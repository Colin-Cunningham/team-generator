class Employee {
    constructor(name, id, email, title){
        this.name = name;
        this.id = id;
        this.title = title || "Employee";
        this.email = email;
    }

    getName(){
        return this.name
    }

    getId(){
        return this.id
    }

    getEmail(){
        return this.email
    }

    getRole(){
        return this.title
    }
}


const Employees = [];
const newEmployee = new Employee("Colin", 213, "colin.199643@gmail.com" , "Intern")

console.log(newEmployee.getRole())


module.exports = Employee;
