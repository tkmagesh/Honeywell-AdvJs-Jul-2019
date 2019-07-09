import './styles.css';


import { add } from './calculator';

import calc from './calculator';

console.log(calc);


var emp = {
	name : 'Magesh',
	whoAmI : function(){
		console.log(`i am ${this.name}`);
    }
}

window.addEventListener('load', function(){
	var btnWhoAmI = document.getElementById('btnWhoAmi');
	btnWhoAmI.addEventListener('click', emp.whoAmI);
});


/*let numbers = [3,1,2,5,4];
let double_numbers = numbers.map(no => no * 2);
console.log(double_numbers);

class Employee{
	constructor(id, name, salary){
		this.id = id;
		this.name = name;
		this.salary = salary;
	}
	display(){
		console.log(`id=${this.id}, name=${this.name}`);
	}
}

let emp = new Employee(100, 'Magesh', 10000);
emp.display();*/