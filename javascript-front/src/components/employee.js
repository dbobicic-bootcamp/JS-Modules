export default class Employee {
    constructor(
        id, 
        employee_name, 
        employee_salary, 
        employee_age, 
        profile_image
    ) {
        this.id = id;
        this.employee_name = employee_name;
        this.employee_salary = employee_salary;
        this.employee_age = employee_age;
        this.profile_image = profile_image;
        console.log(`Init employee - ${this.employee_name}`);
    }

    getEmployee() {
        return `<li>${this.employee_name}</li>`
    }
}