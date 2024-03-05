function userInfo(){
    const userIn = {
        nome: prompt("Digite seu nome:"),
        idade: prompt("Digite sua idade:"),
        email: prompt("Digite seu email:")
    };

    localStorage.setItem("user", JSON.stringify(userIn));

}

userInfo();