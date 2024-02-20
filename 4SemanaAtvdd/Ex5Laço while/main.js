
let contador = 1;
let Ruim = 0;

while (contador <= 4) {
    let resposta =Number (window.prompt("Sobre o seriado Stranger Things\n1(Ruim)\n2(Bom) \n3(Exelente)"));

    switch (resposta) {
        case 1: 
            Ruim += 1; 
            break;
        case 2:
            Bom;
            break;
            case 3: 
            Exelente;
            break;
        default:
            break;
        }
        contador ++
    }
    console.log(`Notas Ruins ${Ruim}`);
  