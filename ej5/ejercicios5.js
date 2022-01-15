function ejercicio_1(){

  let elementos = ["foo","alfa","ram"];
  
  let iniciales = elementos.map(function(primera_letra){
    return primera_letra[0]
  })

    console.log(iniciales.join(""));

}
  
function ejercicio_2(){
let saludo = ["hola", "mundo", "desde", "vscode"];

console.log(saludo[0] + ' - ' + saludo[1] + ',', saludo[2], saludo[3] + '.');
}



var nombres = [{nombre:"foo"},{nombre:"bar"},{nombre:"qux"},{nombre:"ram"}];

function ejercicio_3map(){
  nombres.map((horizontal, vertical ) => {
  console.log((vertical + 1) + '-', 'nombre:', horizontal["nombre"]);
}); 
}

function ejercicio_3for(){
  for (i=0;i<nombres.length;i++){
    console.log((i + 1) + '-', 'nombre:', nombres[i]["nombre"]);
  };
}

function ejercicio_3while(){
  let x = 0;
  let y = nombres.length;
  while (x<y){
      console.log((x + 1) + '-', 'nombre:', nombres[x]["nombre"]);
      x++;
  };
}

function ejercicio_4(){

  const productos = ["Tv", "tablet", "PC", "Desktop"];

  const precios = ["172$", "120$", "430$", "1000$"]

  var log = console.log
 
  log("Productos disponibles");

  for (let r = 0; r <= 3; r++)
  
  log(productos[r]," : ", precios[r]);

}




//ejercicio_1();
//ejercicio_2();
//ejercicio_3map();
//ejercicio_3for();
//jercicio_3while();
//ejercicio_4();
ejercicio_5();


