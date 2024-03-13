const { app, BrowserWindow, ipcMain ,dialog} = require('electron');
const path = require('path');
let iniciado=false;
let a0,a1,a2,a3,a4,a5,a6,a7;


var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
iniciado=true;
let valoresPin=[]
  for (let i=2;i<14;i++){
var pin = new five.Pin(i);
valoresPin[i]=0;
five.Pin.read(pin, function(error, value) {
if (value!=valoresPin[i]){
  valoresPin[i]=value;
  //console.log("Ha cambiado el pin: "+i);
  let pinLeido={};
  pinLeido.pin=i;
  pinLeido.valor=value;
  win.webContents.send("valorCambiado",pinLeido);
}
});
  }
   a0=new five.Sensor("A0");
  a0.on("change",function(){
    let a={"pin":0,"valor":this.value}
    win.webContents.send("lecturaAnalogica",a);
  })

   a1=new five.Sensor("A1");
  a1.on("change",function(){
    let a={"pin":1,"valor":this.value}
    win.webContents.send("lecturaAnalogica",a);
  })

   a2=new five.Sensor("A2");
  a2.on("change",function(){
    let a={"pin":2,"valor":this.value}
    win.webContents.send("lecturaAnalogica",a);
  })

   a3=new five.Sensor("A3");
  a3.on("change",function(){
    let a={"pin":3,"valor":this.value}
    win.webContents.send("lecturaAnalogica",a);
  })

   a4=new five.Sensor("A4");
  a4.on("change",function(){
    let a={"pin":4,"valor":this.value}
    win.webContents.send("lecturaAnalogica",a);
  })

   a5=new five.Sensor("A5");
  a5.on("change",function(){
    let a={"pin":5,"valor":this.value}
    win.webContents.send("lecturaAnalogica",a);
  })

   a6=new five.Sensor("A6");
  a6.on("change",function(){
    let a={"pin":6,"valor":this.value}
    win.webContents.send("lecturaAnalogica",a);
  })

   a7=new five.Sensor("A7");
  a7.on("change",function(){
    let a={"pin":7,"valor":this.value}
    win.webContents.send("lecturaAnalogica",a);
  })

});

let win
const createWindow = () => {

    win = new BrowserWindow({
     width: 800,
  
     height: 600,
     autoHideMenuBar: true,
     webPreferences: {
      preload: path.join(__dirname, '/js/preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    }
   });
  
   win.loadFile('./www/index.html');
   win.maximize();
  };
  
  app.whenReady().then(() => {
  
   createWindow();
  
   app.on('activate', () => {
  
     if (BrowserWindow.getAllWindows().length === 0) {
  
       createWindow();
  
     }
  
   });
  
  });
  
  app.on('window-all-closed', () => {
  
   if (process.platform !== 'darwin') {
  if (iniciado){
    a0.disable();
    a1.disable();
    a2.disable();
    a3.disable();
    a4.disable();
    a5.disable();
    a6.disable();
    a7.disable();


  }
     app.quit();
  
   }
  
  });

  ipcMain.on("encender",function (event,pin){
    if (iniciado){
    var led=new five.Led(pin);
    led.on();
   // let miPrueba=setTimeout(contesta,pin*1000)
    }
  })
  ipcMain.on("apagar",function (event,pin){
    if (iniciado){
    var led=new five.Led(pin);
    led.off();
   // let miPrueba=setTimeout(contesta,pin*1000)
    }
  })
ipcMain.on("escribeAnalogico",function(event,analog){
  if (iniciado){
    var led=new five.Led(analog.pin);
    led.write(analog.valor);

  }
})