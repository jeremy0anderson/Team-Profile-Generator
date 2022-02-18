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