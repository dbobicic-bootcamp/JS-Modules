
import Employee from './employee';

export class Employees {
    constructor() {
        this.setDiv();
        this.getEmployees();
        this.initInputValues();
    }

    initInputValues(){
        this.inputValues = {
            name:'',
            salary:'',
            age:''
        };
    }

    setDiv() {
        const dashboard = document.getElementById('dashboard');
        dashboard.innerHTML += '<div id="employees"></div>';
        dashboard.innerHTML += 
        `<div id="add-employee">
            <input type="text" id="name" placeholder="name" /> <br/>
            <input type="number" id="salary" placeholder="salary" /><br/>
            <input type="number" id="age" placeholder="age" /><br/>
            <button id="add">Add</button>
        </div>`;

        this.eventHandlers();
        
    }
    
    getEmployees() {
        fetch('http://dummy.restapiexample.com/api/v1/employees')
            .then(response => response.json())
            .then(json => {
                this.setEmployees(json.slice(-10));
                console.log(json);
            }
            );
    }
    setEmployees(employees) {
        let html = '<ul>';
        employees.forEach(employee => {
            let item = new Employee(employee.id, employee.employee_name, employee.employee_salary, employee.employee_age, employee.profile_image);
            html += item.getEmployee();
        });
        html += '</ul>';
        console.log('Init employees');
        const content = document.getElementById('employees');
        content.innerHTML = '';
        content.innerHTML = html;
    }
    eventHandlers(){
        document.getElementById('name').addEventListener('input', (ev)=>{
            // console.log(ev.target.value);
            this.inputValues.name = ev.target.value;
        });
        document.getElementById('salary').addEventListener('input', (ev)=>{
            // console.log(ev.target.value);
            this.inputValues.salary = ev.target.value;
        });
        document.getElementById('age').addEventListener('input', (ev)=>{
            // console.log(ev.target.value);
            this.inputValues.age = ev.target.value;
        });

        document.querySelector('#add').addEventListener('click', () => {
            console.log(this.inputValues);
            this.addEmployee();
            

        });
    }
    addEmployee(){
        fetch('http://dummy.restapiexample.com/api/v1/create',
        {
            method: 'POST',
            body : JSON.stringify(this.inputValues)
        }).then(response => response.json())
        .then(json => {
            console.log(json);
            this.getEmployees();
        }
        );
        this.initInputValues();
    }

}