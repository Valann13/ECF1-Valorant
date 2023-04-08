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

  // enleve la class navWrapper active pour supprimer mon wrapper //
  navWrapper.classList.remove("active")
  // place la position de navlateral  //   
  navLateral.style.left = "-100% ";
}


// evenement au click sur mes constante avec fonction  // 
openbtn.addEventListener("click", openNav)
closebtn.addEventListener("click", closeNav)
navWrapper.addEventListener("click", closeNav)


// Animation Image//

//image1//

// passe l'image en block pour l'afficher // 
$('.image1').css("display", "block")
// l'animation  rend l'opacité de l'image // 
$(".image1").animate({
  opacity: 1
  //le .queue permet de mettre une fonction en attente et des s'executer apres //
}, 200).queue(function (next) {
  //repasse l'image en display none ce qui permet de ne plus l'afficher //
  $('.image1').css("display", "none")
  next();

});

//image2//

$('.image2').delay(230)
$('.image2').css("display", "block")
$(".image2").animate({
  opacity: 1
}, 230).queue(function (next) {

  $('.image2').css("display", "none")
  next();

});

//image3//

$('.image3').delay(460)
$('.image3').css("display", "block")
$(".image3").animate({
  opacity: 1
}, 230).queue(function (next) {

  $('.image3').css("display", "none")
  next();

});

//image4//

$('.image4').delay(690)
$('.image4').css("display", "block")
$(".image4").animate({
  opacity: 1
}, 200).queue(function (next) {

  $('.image4').css("display", "none")
  next();

});

//image5//

$('.image5').delay(920)
$('.image5').css("display", "block")
$(".image5").animate({
  opacity: 1
}, 230).queue(function (next) {

  $('.image5').css("display", "none")
  next();

});

//image6//

$('.image6').delay(1150)
$('.image6').css("display", "block")
$(".image6").animate({
  opacity: 1
}, 230).queue(function (next) {

  $('.image6').css("display", "none")
  next();

});

//image7//

$('.image7').delay(1380)
$('.image7').css("display", "block")
$(".image7").animate({
  opacity: 1
}, 230).queue(function (next) {

  $('.image7').css("display", "none")
  next();

});

//image8//

$('.image8').delay(1610)
$('.image8').css("display", "block")
$(".image8").animate({
  opacity: 1
}, 230).queue(function (next) {

  $('.image8').css("display", "none")
  next();

});
//image9//

$('.image9').delay(1840)
$('.image9').css("display", "block")
$(".image9").animate({
  opacity: 1
}, 230).queue(function (next) {

  $('.image9').css("display", "none")
  next();

});

//image10//

$('.image10').delay(2070)
$('.image10').css("display", "block")
$(".image10").animate({
  opacity: 1
}, 230).queue(function (next) {

  $('.image10').css("display", "none")
  next();

});

//image11//

$('.image11').delay(2300)
$('.image11').css("display", "block")
$(".image11").animate({
  opacity: 1
}, 230).queue(function (next) {

  $('.image11').css("display", "none")
  next();

});
//image12//

$('.image12').delay(2530)
$('.image12').css("display", "block")
$(".image12").animate({
  opacity: 1
}, 230).queue(function (next) {

  $('.image12').css("display", "none")
  next();

});

//image13//

$('.image13').delay(2760)
$('.image13').css("display", "block")
$(".image13").animate({
  opacity: 1
}, 230).queue(function (next) {

  $('.image13').css("display", "none")
  next();

});

//image14//

$('.image14').delay(2990)
$('.image14').css("display", "block")
$(".image14").animate({
  opacity: 1
}, 230).queue(function (next) {

  $('.image14').css("display", "none")
  next();

});

//image15//

$('.image15').delay(3220)
$('.image15').css("display", "block")
$(".image15").animate({
  opacity: 1
}, 230).queue(function (next) {

  $('.image15').css("display", "none")

  next();

});

//image16//

$('.image16').delay(3450)
$('.image16').css("display", "block")
$(".image16").animate({
  opacity: 1
}, 230).queue(function (next) {

  $('.image16').css("display", "none")

  next();

});

//image17//

$('.image17').delay(3680)
$('.image17').css("display", "block")
$(".image17").animate({
  opacity: 1
}, 230).queue(function (next) {

  $('.image17').css("display", "none")

  next();

});
//image18//

$('.image18').delay(3910)
$('.image18').css("display", "block")
$(".image18").animate({
  opacity: 1
}, 230).queue(function (next) {

  $('.image18').css("display", "none")
  //appel du background//
  $('body').css('background-image', "url('Image/4890914.jpg') ");
  next();

});



//introduction slide titre//

//definit la position en dehors de mon ecran//
$('#intro').css('left', '-10000px');
//animation repositionnant la div //
$('#intro').animate(
  { 'left': '50px' }, 6000);

$('#intro2').css('right', '-10000px');
$('#intro2').animate(
  { 'right': '320px' }, 6000);

$('#intro3').css('bottom', '-10000px');
$('#intro3').animate(
  { 'bottom': '100px' }, 6000);





