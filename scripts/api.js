import { toltip } from "./toltip.js";
const baseUrl = "http://localhost:3333/";

async function login(body){
    try{        
        const response = await fetch(baseUrl + "login",{
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(body)
        });
        const token = await response.json();
        if(response.status===200){            
            localStorage.setItem("token",JSON.stringify(token));
            window.location.replace("/pages/home/index.html");
        } else if(response.status===401){
            if(token.message==="A senha está incorreta"){
                document.getElementById("inputPassword").classList.add("alert")
                document.getElementById("incorrectPassword").classList.remove("none");
                acessButton.innerHTML = "";
                acessButton.innerText = "Ver perfil do GitHub";
                toltip("fail","Senha incorreta");                
            } else{
                acessButton.innerHTML = "";
                acessButton.innerText = "Ver perfil do GitHub";
                toltip("fail","Usuário não encontrado")
            }
        }        
    } catch(err){
        console.log(err);
    }
}

async function register(body){
    try{
        const response = await fetch(baseUrl + "users/create",{
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(body)
        })
        registerButton.innerHTML = "";
        registerButton.innerText = "Ver perfil do GitHub";
        toltip("sucess","Sua conta foi criada com sucesso!",`Agora você pode acessar os conteúdos utilizando seu usuário e senha na página de login: <a href="/pages/login/index.html" class="link">Acessar página de login</a>`);
        return console.log(response);
    } catch(err){
        console.log(err);
    }
}




export {login,register};