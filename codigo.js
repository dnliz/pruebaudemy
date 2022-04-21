 //Pagina inicio
//Funcion modo
function modo(){

var inicio = confirm('¿Desea ver esta pagina con skin Horda?')

if(inicio){
		var fondo = document.getElementById('cuerpo')
		var titulo = document.getElementsByTagName('h2')
		
		fondo.style.backgroundImage = 'url("imagenes/horda.png")';

		for (var i = 0; i<=titulo.length; i++) {
		titulo[i].style.textShadow = '2px 5px 10px #ed210e';
		titulo[i].style.color='#ff0004'	;
	} 
	} else {
		var fondo = document.body
		var titulo = document.getElementsByTagName('h2')	
		
		fondo.style.backgroundImage = 'url("imagenes/alianza.png")';
		
		for (var i = 0; i<=titulo.length; i++) {
		titulo[i].style.textShadow = '2px 5px 10px #161df0';
		titulo[i].style.color='white';
	}
}
}
//funcion info
function info(){

	var indice = document.getElementById('clases').value
	var imagen = document.getElementById('imagen_info')

	if (indice=='none'){
		imagen.style.backgroundImage = ""
		imagen.style.boxShadow= ""
		texto = ('Elige una clase')
	}
	
	if (indice=='cazador'){
		imagen.style.backgroundImage = 'url("imagenes/cazador.jpg")'
		imagen.style.boxShadow= '0px 0px 20px #00ff04'
		texto = ('Los cazadores luchan contra sus enemigos a distancia o de cerca y ordenan a sus mascotas que ataquen mientras preparan sus flechas, disparan sus armas de fuego o blanden sus armas de asta. Si bien sus armas son efectivas a corta y larga distancia, los cazadores son también extremadamente ágiles. Son capaces de evadir o entorpecer a sus enemigos para controlar el espacio de combate')
	}
	
	if (indice=='paladin'){
		imagen.style.backgroundImage = 'url("imagenes/paladin.jpg")'
		imagen.style.boxShadow= '0px 0px 20px #0714fa'
		texto = ('Los paladines se colocan justo delante de sus enemigos, confiando en su pesada armadura y la sanación para poder sobrevivir a una lluvia de ataques. Ya sea con enormes escudos o con aplastantes armas a dos manos, los paladines pueden aguantar zarpas y espadas de sus compañeros más débiles, pero deben usar la magia sanadora con cuidado para asegurarse de que se mantienen en pie.')
	}
	
	if (indice=='guerrero'){
		imagen.style.backgroundImage = 'url("imagenes/guerrero.jpg")'
		imagen.style.boxShadow= '0px 0px 20px #ff000d'
		texto = ('Los guerreros se equipan con cuidado para el combate y se enfrentan a sus enemigos de frente, dejando que los ataques resbalen contra su pesada armadura. Usan diversas tácticas de combate y una gran variedad de tipos de armas para proteger a los combatientes menos hábiles. Los guerreros deben controlar cuidadosamente su ira (el poder detrás de sus ataques más fuertes) para maximizar su efectividad en el combate.')
	}
	
	if(indice=='chaman'){
		imagen.style.backgroundImage = 'url("imagenes/chaman.jpg")'
		imagen.style.boxShadow= '0px 0px 20px #f2ff03'
		texto = ('Durante el combate, el chamán coloca totems de control y daño en el suelo para maximizar su efectividad y ponerle las cosas más difíciles a los enemigos Los chamanes son lo suficientemente versátiles para luchar contra los enemigos de cerca o a distancia, pero los chamanes sabios eligen su camino de ataque basado en los puntos fuertes y débiles de sus enemigos.')
	}
	
	alert(texto)
	}
//CONTROLADOR VIDEO//

var video = document.getElementById('video')
var play = document.getElementById('play')
var avanzar = document.getElementById('avanzar')
var retroceder = document.getElementById('retroceder')
var hola= hol
var dev = dev


function reproducir() {
	if (video.paused) {
		video.play()
		play.innerHTML= '<img src="icon/pause.svg">'
	} else {
		video.pause()
		play.innerHTML='<img src="icon/play.svg">'
	}
}

function stop() {
	video.pause()
	video.currentTime=0
	play.innerHTML='<img src="icon/play.svg">'
}

function mover(frame) {
	video.currentTime+=frame
}

function dibu1() {
  var canvas = document.getElementById('smile');
  if (canvas.getContext){
    var sonrisa = canvas.getContext('2d');

    sonrisa.beginPath()
    sonrisa.arc(75,75,50,0,Math.PI*2,true)
    sonrisa.moveTo(110,75)
    sonrisa.arc(75,75,35,0,Math.PI,false)
    sonrisa.moveTo(65,65)
    sonrisa.arc(60,65,5,0,Math.PI*2,true)
    sonrisa.moveTo(95,65)
    sonrisa.arc(90,65,5,0,Math.PI*2,true)
    sonrisa.strokeStyle ='yellow'
    sonrisa.lineWidth = 3
    sonrisa.stroke()

  }
}
/**
function dibu2() {
  var canvas = document.getElementById('sad');
  if (canvas.getContext){
    var triste = canvas.getContext('2d');

    triste.beginPath()
    triste.arc(75,75,50,0,Math.PI*2,true)
    triste.moveTo(110,100)
    triste.arc(75,110,35,0,Math.PI,true)
    triste.moveTo(65,65)
    triste.arc(60,65,5,0,Math.PI*2,true)
    triste.moveTo(95,65)
    triste.arc(90,65,5,0,Math.PI*2,true)
    triste.strokeStyle ='blue'
    triste.lineWidth = 3
    triste.stroke()
  }
}**/
window.addEventListener ('load', dibu1)
window.addEventListener ('load', dibu2)