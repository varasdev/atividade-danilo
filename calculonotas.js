let nota, media, conceito;

media= 0;

for(let i = 1; i < 3; i++){
    nota = parseFloat(prompt("informe a ${i}1° nota: "));
    media += nota;
}
    media /= 3;

    (media >= 9.5) ? conceito = "Excelente" :
     (media >= 8.5) ? conceito = "Ótimo" :
      (media >= 7.0) ? conceito = "Bom" :
       (media >= 5.0) ? conceito = "ANS" :
         conceito = "Insuficiente";
    
         console.log(`sua média foi ${media.toFixed(2)} e seu conceito foi ${conceito}.`);
     
    