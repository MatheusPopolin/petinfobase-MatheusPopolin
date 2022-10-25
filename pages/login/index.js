import {login} from "/scripts/api.js"
const acessButton = document.getElementById("acessButton");

const enableButton = ()=>{	
	let inputsStatus = [false,false];
	const inputs = document.querySelectorAll("input");
	inputs.forEach((input,index)=>{
		input.addEventListener("keyup",(event)=>{
			document.getElementById("inputPassword").classList.remove("alert");
			document.getElementById("incorrectPassword").classList.add("none");
			if(event.target.value){
				inputsStatus[index] = true;
			} else{
				inputsStatus[index] = false;
			}
			if(inputsStatus[0] && inputsStatus[1]){
				acessButton.removeAttribute("disabled");
			} else{
				acessButton.setAttribute("disabled",true);
			}
		});
	});		
}
enableButton();

const eventLogin = ()=>{
	const form = document.querySelector("form");
	form.addEventListener("submit",(element)=>{
		element.preventDefault();
		acessButton.innerText="";
        acessButton.insertAdjacentHTML("afterbegin",`<img src="/assets/img/spinner.png" alt="loading" class="loading">`);
		let body = {};
		body.email = form.elements[0].value;
		body.password = form.elements[1].value;
		login(body);
	})
}
eventLogin();



