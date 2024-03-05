
function verif (nu) {
    return new Promise ((resolve, reject) => {
        if (nu % 2=== 0){
            resolve("Par")
        }else {
            reject("Erro: impar")
        }
      
    })
    
}
verif(6).then(res => {
    console.log(res);
}).catch(erro => {
    console.error(erro);
});


verif(7).then(res => {
    console.log(res);
}).catch(erro => {
    console.error(erro);
});

