class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return "Employee";
    }
}
module.exports = Employee;
class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole(){
        return "Manager";
    }
}

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name,id,email);
        this.github = github;
    }
    getGithub(){
        return this.github;
    }
    getRole(){
        return "Engineer"
    }
}

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return "Intern"
    }
}

function generateEmployee(data){
    if (data.role)
   // [${},${},${},${},${},${},${},${},${}]
    return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
    <title>JS Quiz</title>
</head>
<body>
    <div class="row">
        <div class="column" id="employee1">
            <h3>${data.name}</h3>
        </div>
        <div class="column">
        
        </div>
        <div class="column">
           
        </div>
        <div class="column">
        
        </div>  
    </div>

</body>
</html>
    
    `
}
module.exports = {generateEmployee, Employee, Manager, Engineer, Intern};