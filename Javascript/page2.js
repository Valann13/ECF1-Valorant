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




function AppelMap() {
  //Variable contenant l'url de l'API//
  let mapurl = "https://valorant-api.com/v1/maps"

  //envoi les requetes aux serveur//
  let request = new XMLHttpRequest();

  // ouvre la connexion a l url de l'APi//
  request.open("GET", mapurl);

  // definit le type de reponse//
  request.responseType = 'json';

  //Envoi de la requete//
  request.send();


  //création d'un fonction qui execucte la requete//
  request.onload = function () {

    //crée une variable qui va etre utilisé en reponse de ma requete//
    let maps = request.response;

    console.log(maps);

    //appel de class display none pour enlever l'animation de titre //
    $('.intro').css("display", "none")
    $('.intro2').css("display", "none")
    //appel de class display  block et flex pour afficher les tableaux et info d'agent //
    $('.cadre').css("display", "flex")
    $('.map1').css("display", "block")
    //appel du nom de la map chargé par l'api //
    $('#div1').text(maps.data[0].displayName)
    //appel d'un visuel de la map chargé par l'api //
    $('.map1').css({ 'content': "url(" + maps.data[0].splash + ") " });
    $('.img0').css({ 'content': "url(" + maps.data[0].displayIcon + ") " });
    //appel d'un text //
    $('#message').text(`Ascent is Valorant's fourth map, added to the game's release during patch 1.00. It features 2 Spike spots separated by long hallways and an open central plaza. Some access may be restricted by iron curtains deployed by the defenders.
    The map highlights verticality; in favor of the Defenders on site A, in favor of the Attackers on site B.`)


  }
}
//creation d'une variable lier a mon bouton avec l'id//
let btn1 = document.getElementById("btnradio1")
//creation d'un evenement au click qui appel la fontion//
btn1.addEventListener('click', () => {

  AppelMap()
});

function AppelMap2() {

  let mapurl = "https://valorant-api.com/v1/maps"

  let request = new XMLHttpRequest();

  request.open("GET", mapurl);

  request.responseType = 'json';

  request.send();

  request.onload = function () {

    let maps = request.response;

    console.log(maps);
    $('.intro').css("display", "none")
    $('.intro2').css("display", "none")
    $('.cadre').css("display", "flex")
    $('.map1').css("display", "block")
    $('#div1').text(maps.data[1].displayName)
    $('.map1').css({ 'content': "url(" + maps.data[1].splash + ") " });
    $('.img0').css({ 'content': "url(" + maps.data[1].displayIcon + ") " });
    $('#message').text(`Split is a large map that has two Spike locations, quite far apart. It is certainly one of the most difficult to master at the moment, since it requires a good knowledge of the place to be spotted and trap its opponents.
      The defenders are put to the test on Split , since in the event of a bad choice or defeat on one of the spots, the rest of the team must make a long journey to hope to slow down the advance of the attackers. Fortunately for them, it remains difficult to break through the defenses at first, since the spaces of the map are conducive to holding back the assaults.`)


  }
}

let btn2 = document.getElementById("btnradio2")
btn2.addEventListener('click', () => {

  AppelMap2()
});

function AppelMap3() {

  let mapurl = "https://valorant-api.com/v1/maps"

  let request = new XMLHttpRequest();

  request.open("GET", mapurl);

  request.responseType = 'json';

  request.send();

  request.onload = function () {

    let maps = request.response;

    console.log(maps);
    $('.intro').css("display", "none")
    $('.intro2').css("display", "none")
    $('.cadre').css("display", "flex")
    $('.map1').css("display", "block")
    $('#div1').text(maps.data[2].displayName)
    $('.map1').css({ 'content': "url(" + maps.data[2].splash + ") " });
    $('.img0').css({ 'content': "url(" + maps.data[2].displayIcon + ") " });
    $('#message').text(`Fracture is Valorant's seventh map, added in Act 2 of Episode 3. It is an original map, where defenders are surrounded by attackers. Points A and B are particularly difficult to defend, due to the fact that attacks can come from all sides and that the sites offer neither cover nor an emergency exit.
        This map gives pride of place to short and medium range confrontations. Agents capable of locking down an area or an access are particularly effective there.`)


  }
}

let btn3 = document.getElementById("btnradio3")
btn3.addEventListener('click', () => {

  AppelMap3()
});

function AppelMap4() {

  let mapurl = "https://valorant-api.com/v1/maps"

  let request = new XMLHttpRequest();

  request.open("GET", mapurl);

  request.responseType = 'json';

  request.send();

  request.onload = function () {

    let maps = request.response;

    console.log(maps);
    $('.intro').css("display", "none")
    $('.intro2').css("display", "none")
    $('.cadre').css("display", "flex")
    $('.map1').css("display", "block")
    $('#div1').text(maps.data[3].displayName)
    $('.map1').css({ 'content': "url(" + maps.data[3].splash + ") " });
    $('.img0').css({ 'content': "url(" + maps.data[3].displayIcon + ") " });
    $('#message').text(`Bind is a map that has two Spike sites. The first, in A, is an open area, protected by many wooden boxes and a high window, suitable for sniper defense. The second, at B, is located under a metal tunnel, which is difficult to access.
          Its particularity lies in its teleporters, which allow you to cross the map up and down and try to take your opponent by surprise. However, they are very loud and it is easy to get punished when they come out, whether you came to attack or defend.`)


  }
}

let btn4 = document.getElementById("btnradio4")
btn4.addEventListener('click', () => {

  AppelMap4()
});

function AppelMap5() {

  let mapurl = "https://valorant-api.com/v1/maps"

  let request = new XMLHttpRequest();

  request.open("GET", mapurl);

  request.responseType = 'json';

  request.send();

  request.onload = function () {

    let maps = request.response;

    console.log(maps);
    $('.intro').css("display", "none")
    $('.intro2').css("display", "none")
    $('.cadre').css("display", "flex")
    $('.map1').css("display", "block")
    $('#div1').text(maps.data[4].displayName)
    $('.map1').css({ 'content': "url(" + maps.data[4].splash + ") " });
    $('.img0').css({ 'content': "url(" + maps.data[4].displayIcon + ") " });
    $('#message').text(`Breeze is Valorant's sixth map, added in Act 3 of Episode 2. It is a map with multiple open areas, with many branches in its corridors.
            It has two Spike sites: one is slightly elevated, the other is slightly lower. Both sites offer relatively little cover for combat, so Agents will have to use their skills to navigate their way from one location to another.`)


  }
}

let btn5 = document.getElementById("btnradio5")
btn5.addEventListener('click', () => {

  AppelMap5()
});


function AppelMap6() {

  let mapurl = "https://valorant-api.com/v1/maps"

  let request = new XMLHttpRequest();

  request.open("GET", mapurl);

  request.responseType = 'json';

  request.send();

  request.onload = function () {

    let maps = request.response;

    console.log(maps);
    $('.intro').css("display", "none")
    $('.intro2').css("display", "none")
    $('.cadre').css("display", "flex")
    $('.map1').css("display", "block")
    $('#div1').text(maps.data[5].displayName)
    $('.map1').css({ 'content': "url(" + maps.data[5].splash + ") " });
    $('.img0').css({ 'content': "url(" + maps.data[5].displayIcon + ") " });
    $('#message').text(`Lotus is the ninth map of Valorant. It takes place in the mountains of India, in a place where lotuses grow in abundance, hence its name. These ruins would be linked to the Guardians, these mysterious entities on which Astra and Harbor are investigating.
              Just like Haven before it, Lotus features 3 Spike landing sites. The map also has destructible walls to clear paths to important points. We also discover very slow rotating doors which also give new access to the map, at the cost of an obvious lack of discretion. Lotus is a very narrow map with few obstacles to hide in the corridors. It will rather be necessary to play with its angles and the corners of the walls.
              `)


  }
}

let btn6 = document.getElementById("btnradio6")
btn6.addEventListener('click', () => {

  AppelMap6()
});


function AppelMap7() {

  let mapurl = "https://valorant-api.com/v1/maps"

  let request = new XMLHttpRequest();

  request.open("GET", mapurl);

  request.responseType = 'json';

  request.send();

  request.onload = function () {

    let maps = request.response;

    console.log(maps);
    $('.intro').css("display", "none")
    $('.intro2').css("display", "none")
    $('.cadre').css("display", "flex")
    $('.map1').css("display", "block")
    $('#div1').text(maps.data[6].displayName)
    $('.map1').css({ 'content': "url(" + maps.data[6].splash + ") " });
    $('.img0').css({ 'content': "url(" + maps.data[6].displayIcon + ") " });
    $('#message').text(`Pearl is the eighth map in Valorant, added with Act 1 of Episode 5: Dimension. It brings a novelty compared to the other maps of the game, since it is located in the seabed, under a dome infused with Radianite. It has 2 sites to plant the Spike, separated by an extremely complex mid. This one is made up of a multitude of corridors and nooks, which will undoubtedly appeal to lurkers. Pearl is also characterized by uneven ground: slope, stairs, sewers and heights are thus present.
                In addition, this new map offers one of the clearest lines in Valorant, near site B. This straight corridor without branching will delight fans of the Marshal or the Operator. `)
  }
}

let btn7 = document.getElementById("btnradio7")
btn7.addEventListener('click', () => {

  AppelMap7()
});

function AppelMap8() {

  let mapurl = "https://valorant-api.com/v1/maps"

  let request = new XMLHttpRequest();

  request.open("GET", mapurl);

  request.responseType = 'json';

  request.send();

  request.onload = function () {

    let maps = request.response;

    console.log(maps);
    $('.intro').css("display", "none")
    $('.intro2').css("display", "none")
    $('.cadre').css("display", "flex")
    $('.map1').css("display", "block")
    $('#div1').text(maps.data[7].displayName)
    $('.map1').css({ 'content': "url(" + maps.data[7].splash + ") " });
    $('.img0').css({ 'content': "url(" + maps.data[7].displayIcon + ") " });
    $('#message').text(`Icebox is the fifth Valorant map, added at the launch of Act 3 of Episode 1. It is a very open and vertical map, where long-range combat is king.
    It has two Spike sites with radically opposed styles. Site A is indoors and quite claustrophobic while Site B is open and outdoors.`)
  }
}

let btn8 = document.getElementById("btnradio8")
btn8.addEventListener('click', () => {

  AppelMap8()
});

function AppelMap10() {

  let mapurl = "https://valorant-api.com/v1/maps"

  let request = new XMLHttpRequest();

  request.open("GET", mapurl);

  request.responseType = 'json';

  request.send();

  request.onload = function () {

    let maps = request.response;

    console.log(maps);
    $('.intro').css("display", "none")
    $('.intro2').css("display", "none")
    $('.cadre').css("display", "flex")
    $('.map1').css("display", "block")
    $('#div1').text(maps.data[9].displayName)
    $('.map1').css({ 'content': "url(" + maps.data[9].splash + ") " });
    $('.img0').css({ 'content': "url(" + maps.data[9].displayIcon + ") " });
    $('#message').text(`Haven is a very special map, since it has 3 sites for the spike: A, B and C.
    Defenders then have many strategic points to cover against attackers, and must intelligently distribute resources across the field.
    With many corners and gateways to the sites, Haven is a perfect map to learn to control your movements and create innovative strategies.`)
  }
}
let btn10 = document.getElementById("btnradio9")
btn10.addEventListener('click', () => {

  AppelMap10()
});


//creation d'une fontion de slide dans le tableaux et rotation des boutons//
function affichage() {

  //Appel de la fonction au click sur ma div//
  $("#revealMessage").click(function () {
    //donne un slide et affiche ma 2ieme div //
    $("#message").slideToggle("slow");
    //toggle class permet de basculer sur 2 classe css  la premiere indiqué puis sur la deuxieme avec l'evenement au click //
    $("#ir1").toggleClass("down");


  });

}
$(document).ready(affichage)

//fait apparaitre mon groupe de bouton avec une opacité //
$("#buttongroup").delay(1000).animate({
  opacity: 1
}, 2000);


//introduction slide titre//

//definit la position en dehors de mon ecran//
$('#intro').css('left', '-10000px');
//animation repositionnant la div //
$('#intro').animate(
  { 'left': '300px' }, 1500);

$('#intro2').css('right', '-10000px');
$('#intro2').animate(
  { 'right': '450px' }, 1500);
