import {Employees} from '../components';

export class Dashboard {
    constructor() {
        console.log(Employees);
        const app = document.getElementById('app');
        app.innerHTML = `<div id="dashboard"><h1>Dasboard</h1></div>`;
        const employees = new Employees();

        console.log('Init dashboard');
    }
}


