// Menu de Navigation

// création de mes variables pour le menu dynamique//

let openbtn = document.getElementById("nav-open")
let closebtn = document.getElementById("nav-close")
let navWrapper = document.getElementById("nav-wrapper")
let navLateral = document.getElementById("nav-latteral")

// création de deux constante avec ajout de fonction ouvrir fermer//
const openNav = () => {
  // appel de la class navWrapper active pour afficfer mon wrapper //
  navWrapper.classList.add("active")
  // place la position de navlateral  // 
  navLateral.style.left = 0;
}

const closeNav = () => {
  navWrapper.classList.remove("active")
  navLateral.style.left = "-100% ";
}


// evenement au click sur mes constante avec fonction  //
openbtn.addEventListener("click", openNav)
closebtn.addEventListener("click", closeNav)
navWrapper.addEventListener("click", closeNav)


// appel de class pour afficher le background du site  //
$('body').css('background-image', "url('Image/4890914.jpg') ");


//introduction slide titre//

//definit la position en dehors de mon ecran//
$('#intro').css('left', '-10000px');
//animation repositionnant la div //
$('#intro').animate(
  { 'left': '200px' }, 2000);

$('#intro2').css('right', '-10000px');
$('#intro2').animate(
  //le .queue permet de mettre une fonction en attente et des s'executer apres //
  { 'right': '450px' }, 2000).delay(1000).queue(function (next) {

    //appel de class display none pour enlever l'animation de titre //    
    $('.intro').css("display", "none")
    $('.intro2').css("display", "none")
    //appel de class display flex pour afficher les tableaux et info de contact //   
    $('.cadre').css("display", "flex")
    $('.cadre').css("flex-direction", "column")
    next();
  });
