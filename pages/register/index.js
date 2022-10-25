import {register} from "/scripts/api.js"
const registerButton = document.getElementById("registerButton");

const enableButton = ()=>{	
	let inputsStatus = [false,false,false,false];
	const inputs = document.querySelectorAll("input");
	inputs.forEach((input,index)=>{
		input.addEventListener("keyup",(event)=>{
			// document.getElementById("inputPassword").classList.remove("alert");
			// document.getElementById("incorrectPassword").classList.add("none");
			if(event.target.value){
				inputsStatus[index] = true;
			} else{
				inputsStatus[index] = false;
			}
			if(inputsStatus[0] && inputsStatus[1] && inputsStatus[2] && inputsStatus[3]){
				registerButton.removeAttribute("disabled");
			} else{
				registerButton.setAttribute("disabled",true);
			}
		});
	});		
}
enableButton();

const eventRegister = ()=>{
	const form = document.querySelector("form")
	form.addEventListener("submit",(element)=>{
		element.preventDefault();
		registerButton.innerText="";
        registerButton.insertAdjacentHTML("afterbegin",`<img src="/assets/img/spinner.png" alt="loading" class="loading">`);
		let user = {};
		user.username = form.elements[0].value;
		user.email = form.elements[1].value;
		user.password = form.elements[3].value;
		user.avatar = form.elements[2].value;
		register(user);
	})
}
eventRegister();