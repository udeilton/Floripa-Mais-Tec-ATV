function getUserInfo(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let user ={
                nome: "jhod",
                idade: 31,
                email: "deilton_black@hotmail.com"
            };

            resolve(user);
        }, 2000);
    });
}

async function playGetUser(){
    let retorno = await getUserInfo();
    console.log(retorno);    
}


playGetUser();