// Como podemos rodar isso em um arquivo .ts sem causar erros? 

//let employee = {};
//employee.code = 10;
//employee.name = "John";

// Resolução utilizando interface
interface Employee { 
    code: number, 
    name: string
}

const funcionario: Employee = {
    code: 10,
    name: 'John'
}

// adicionando outra forma de resolver utilizando interface
const funcionario2 = {} as Employee;
funcionario2.code = 10;
funcionario2.name = "John";





//Resolução utilizando classe
class Employee2 {
    codeEmployee: number; 
    nameEmployee: string;
    constructor(n: number, name: string) {
        this.codeEmployee = n;
        this.nameEmployee = name;
    }
}

const emp = new Employee2(10, 'Jhon');