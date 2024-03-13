const principal=document.getElementById('principal');
const botones=document.getElementById("botones");
const encender=document.createElement("button");
const escrituraAnalogica=document.getElementById("escrituraAnalogica");
const lecturaAnalogica=document.getElementById("lecturaAnalogica");
const pines=[];
const estados=[];
const selectPuerto=document.getElementById("puerto")
for (let i=2;i<14;i++){
    pines[i]=document.createElement("Button");
    pines[i].innerHTML="Pin "+i+" apagado";
    estados[i]=false;
    botones.appendChild(pines[i]);
    pines[i].addEventListener('click',()=>{
        if (estados[i]){
        window.api.enviar("apagar",i);
        pines[i].innerHTML="Pin "+i+" apagado";

        }else{
            window.api.enviar("encender",i);
            pines[i].innerHTML="Pin "+i+" encendido";

        }
        estados[i]=!estados[i];
    })
}
window.api.recibir("valorCambiado",(pin)=>{
   // console.log("Pin: "+pin.pin);
   // console.log("Valor: "+pin.valor);
    if (pin.valor==0){
        pines[pin.pin].innerHTML="Pin "+pin.pin+" apagado"

    }else{
        pines[pin.pin].innerHTML="Pin "+pin.pin+" encendido"

    }
})
const tabla=document.createElement("table");
escrituraAnalogica.appendChild(tabla);
const fila1=document.createElement("tr");
tabla.appendChild(fila1);
const col1=document.createElement("td")
col1.style.border = "1px solid #000"
col1.innerHTML="Pin 3: 0";
fila1.appendChild(col1);
const col2=document.createElement("td")
col2.innerHTML="Pin 5: 0";
col2.style.border = "1px solid #000"
fila1.appendChild(col2);
const col3=document.createElement("td")
col3.innerHTML="Pin 6: 0";
col3.style.border = "1px solid #000"
fila1.appendChild(col3);
const col4=document.createElement("td")
col4.style.border = "1px solid #000"
col4.innerHTML="Pin 9: 0";
fila1.appendChild(col4);
const col5=document.createElement("td")
col5.style.border = "1px solid #000"
col5.innerHTML="Pin 10: 0";
fila1.appendChild(col5);
const col6=document.createElement("td")
col6.innerHTML="Pin 11: 0";
col6.style.border = "1px solid #000"
fila1.appendChild(col6);
const fila2=document.createElement("tr");
tabla.appendChild(fila2);
const sl1=document.createElement("td");
sl1.style.border="1px solid #000"
fila2.appendChild(sl1);
const slider1=document.createElement("input");
slider1.type="range"
slider1.min=0;
slider1.max=255;
slider1.value=0;
slider1.addEventListener('change',()=>{
   // console.log("Slider: "+slider1.value);
    let analog={};
    analog.pin=3;
    analog.valor=slider1.value;
    window.api.enviar("escribeAnalogico",analog);
    col1.innerHTML="Pin 3: "+slider1.value;
})
sl1.appendChild(slider1);

const sl2=document.createElement("td");
sl2.style.border="1px solid #000"
fila2.appendChild(sl2);
const slider2=document.createElement("input");
slider2.type="range"
slider2.min=0;
slider2.max=255;
slider2.value=0;

slider2.addEventListener('change',()=>{
    //console.log("Slider: "+slider2.value);
    col2.innerHTML="Pin 5: "+slider2.value;

    let analog={};
    analog.pin=5;
    analog.valor=slider2.value;
    window.api.enviar("escribeAnalogico",analog);
})
sl2.appendChild(slider2);

const sl3=document.createElement("td");
sl3.style.border="1px solid #000"
fila2.appendChild(sl3);
const slider3=document.createElement("input");
slider3.type="range"
slider3.min=0;
slider3.max=255;
slider3.value=0;

slider3.addEventListener('change',()=>{
    //console.log("Slider: "+slider3.value);
    col3.innerHTML="Pin 6: "+slider3.value;

    let analog={};
    analog.pin=6;
    analog.valor=slider3.value;
    window.api.enviar("escribeAnalogico",analog);
})
sl3.appendChild(slider3);

const sl4=document.createElement("td");
sl4.style.border="1px solid #000"
fila2.appendChild(sl4);
const slider4=document.createElement("input");
slider4.type="range"
slider4.min=0;
slider4.max=255;
slider4.value=0;

slider4.addEventListener('change',()=>{
    //console.log("Slider: "+slider4.value);
    col4.innerHTML="Pin 9: "+slider4.value;

    let analog={};
    analog.pin=9;
    analog.valor=slider4.value;
    window.api.enviar("escribeAnalogico",analog);
})
sl4.appendChild(slider4);

const sl5=document.createElement("td");
sl5.style.border="1px solid #000"
fila2.appendChild(sl5);
const slider5=document.createElement("input");
slider5.type="range"
slider5.min=0;
slider5.max=255;
slider5.value=0;

slider5.addEventListener('change',()=>{
    //console.log("Slider: "+slider5.value);
    col5.innerHTML="Pin 10: "+slider5.value;

    let analog={};
    analog.pin=10;
    analog.valor=slider5.value;
    window.api.enviar("escribeAnalogico",analog);
})
sl5.appendChild(slider5);

const sl6=document.createElement("td");
sl6.style.border="1px solid #000"
fila2.appendChild(sl6);
const slider6=document.createElement("input");
slider6.type="range"
slider6.min=0;
slider6.max=255;
slider6.value=0;
slider6.addEventListener('change',()=>{
    //console.log("Slider: "+slider6.value);
    col6.innerHTML="Pin 11: "+slider6.value;

    let analog={};
    analog.pin=11;
    analog.valor=slider6.value;
    window.api.enviar("escribeAnalogico",analog);
})
sl6.appendChild(slider6);
const tabla2=document.createElement("table");
tabla2.style.alignSelf="center";
lecturaAnalogica.appendChild(tabla2);
const fila3=document.createElement("tr");
tabla2.appendChild(fila3);
const colu1=document.createElement("td")

colu1.style.border = "1px solid #000"
colu1.innerHTML="A0: 0";
fila3.appendChild(colu1);
const colu2=document.createElement("td")
colu2.innerHTML="A1: 0";
colu2.style.border = "1px solid #000"
fila3.appendChild(colu2);
const colu3=document.createElement("td")
colu3.innerHTML="A2: 0";
colu3.style.border = "1px solid #000"
fila3.appendChild(colu3);
const colu4=document.createElement("td")
colu4.style.border = "1px solid #000"
colu4.innerHTML="A3: 0";
fila3.appendChild(colu4);
const colu5=document.createElement("td")
colu5.style.border = "1px solid #000"
colu5.innerHTML="A4: 0";
fila3.appendChild(colu5);
const colu6=document.createElement("td")
colu6.innerHTML="A5: 0";
colu6.style.border = "1px solid #000"
fila3.appendChild(colu6);
const colu7=document.createElement("td")
colu7.innerHTML="A6: 0";
colu7.style.border = "1px solid #000"
fila3.appendChild(colu7);
const colu8=document.createElement("td")
colu8.innerHTML="A7: 0";
colu8.style.border = "1px solid #000"
fila3.appendChild(colu8);

let analogicasActivadas=[false,false,false,false,false,false,false,false]
colu1.addEventListener('click',()=>{
    analogicasActivadas[0]=!analogicasActivadas[0];
})
colu2.addEventListener('click',()=>{
    analogicasActivadas[1]=!analogicasActivadas[1];
})
colu3.addEventListener('click',()=>{
    analogicasActivadas[2]=!analogicasActivadas[2];
})
colu4.addEventListener('click',()=>{
    analogicasActivadas[3]=!analogicasActivadas[3];
})
colu5.addEventListener('click',()=>{
    analogicasActivadas[4]=!analogicasActivadas[4];
})
colu6.addEventListener('click',()=>{
    analogicasActivadas[5]=!analogicasActivadas[5];
})
colu7.addEventListener('click',()=>{
    analogicasActivadas[6]=!analogicasActivadas[6];
})
colu8.addEventListener('click',()=>{
    analogicasActivadas[7]=!analogicasActivadas[7];
})
window.api.recibir("lecturaAnalogica",(pin)=>{
    switch (pin.pin){
        case 0:
            if (analogicasActivadas[0])  colu1.innerHTML="A0: "+pin.valor;
        break;
        case 1:
            if (analogicasActivadas[1]) colu2.innerHTML="A1: "+pin.valor;
        break;
        case 2:
            if (analogicasActivadas[2]) colu3.innerHTML="A2: "+pin.valor;
        break;
        case 3:
            if (analogicasActivadas[3])  colu4.innerHTML="A3: "+pin.valor;
        break;
        case 4:
            if (analogicasActivadas[4])  colu5.innerHTML="A4: "+pin.valor;
        break;
        case 5:
            if (analogicasActivadas[5])   colu6.innerHTML="A5: "+pin.valor;
        break;
        case 6:
            if (analogicasActivadas[6])  colu7.innerHTML="A6: "+pin.valor;
        break;
        case 7:
            if (analogicasActivadas[7])    colu8.innerHTML="A7: "+pin.valor;
        break;
    }
})
window.api.recibir("tomaPuertos",(puertos)=>{
    console.log("recibo puertos");
    puertos.forEach((puerto) => {
        var el = document.createElement("option");
        el.textContent = puerto;
        el.value = puerto;
        selectPuerto.appendChild(el);
      });
      selectPuerto.addEventListener('change',()=>{
  
        let puertoElegido=selectPuerto.options[selectPuerto.selectedIndex].value;
        console.log("Enviando "+puertoElegido);
        window.api.enviar("conecta",puertoElegido);

      })
    })