const toltip = (type,title,message)=>{
    const body = document.querySelector("body");
    if(type==="sucess" && !message){
        body.insertAdjacentHTML("afterbegin",`
        <div class="toltip">
            <div>
                <div class="bg-sucess100"><img src="/assets/img/${type}.png" alt="Sucesso"></div>
                <h2 class="font-4-bold sucess100">${title}</h2>
            </div> 
        `)        
    }
    
    else if(type==="sucess" && message){
        body.insertAdjacentHTML("afterbegin",`
        <div class="toltip">
            <div>
                <div class="bg-sucess100"><img src="/assets/img/${type}.png" alt="Sucesso"></div>
                <h2 class="font-4-bold sucess100">${title}</h2>
            </div>
            <p class="font-5-small grey200">${message}</p> 
        `)        
    }
    
    else if(type==="fail"){
        body.insertAdjacentHTML("afterbegin",`
        <div class="toltip">
            <div>
                <div class="bg-alert100"><img src="/assets/img/${type}.png" alt="Falha"></div>
                <h2 class="font-4-bold alert100">${title}</h2>
            </div> 
        `) 
    }
    
    // body.insertAdjacentHTML("afterbegin",`
    // <div class="toltip">
    //     <div>
    //         <div><img src="/assets/img/check.png" alt="Sucesso"></div>
    //         <h class="font-4-bold sucess100">${title}</h class="font-4-bold sucess100"2>
    //     </div>
    //     <p class="font-5-small grey200">${message}<a href="/pages/login/index.html" class="link">Acessar página de login</a></p>
    // </div>    
    // `)
}

export {toltip};
