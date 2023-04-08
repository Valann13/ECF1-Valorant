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






function AppelAgent() {

  //Variable contenant l'url de l'API//
  let agenturl = "https://valorant-api.com/v1/agents"

  //envoi les requetes aux serveur//
  request = new XMLHttpRequest();

  // ouvre la connexion a l url de l'APi//
  request.open("GET", agenturl,);

  // definit le type de reponse//
  request.responseType = 'json';

  //Envoi de la requete//
  request.send();

  //création d'un fonction qui execucte la requete//
  request.onload = function () {

    //crée une variable qui va etre utilisé en reponse de ma requete//
    let agents = request.response;
    console.log(agents);

    //appel de class display none pour enlever l'animation de titre //
    $('.intro').css("display", "none")
    $('.intro2').css("display", "none")
    //appel de class display flex pour afficher les tableaux et info d'agent //
    $('.cadre').css("display", "flex")
    //appel d'un visuel d'agent chargé par l'api //
    $('.img0').css({ 'content': "url(" + agents.data[0].bustPortrait + ") " });
    //appel d'une image pour completer le visuel de l'agent //
    $('.fondimage').attr("src", "Image/GEKK.png");
    //appel du nom d'agent chargé par l'api //
    $('#div1').text(agents.data[0].displayName)
    //appel des capacité d'agent chargé par l'api //
    $("#message").text(agents.data[0].abilities[0].description)
    $("#message2").text(agents.data[0].abilities[1].description)
    $("#message3").text(agents.data[0].abilities[2].description)
    $("#message4").text(agents.data[0].abilities[3].description)
    //appel de la description d'agent chargé par l'api //
    $('#message6').text(agents.data[0].description)
    //appel du role d'agent chargé par l'api //
    $('#message5').text(agents.data[0].role.description)

  }
};

//creation d'une variable lier a mon bouton avec l'id//
let btn1 = document.getElementById("btnradio1")
//creation d'un evenement au click qui appel la fontion//
btn1.addEventListener('click', () => {

  AppelAgent()
});




function AppelAgent2() {

  agenturl = "https://valorant-api.com/v1/agents"

  request = new XMLHttpRequest();

  request.open("GET", agenturl,);

  request.responseType = 'json';

  request.send();

  request.onload = function () {

    agents = request.response;
    console.log(agents);

    $('.intro').css("display", "none")
    $('.intro2').css("display", "none")
    $('.cadre').css("display", "flex")
    $('.img0').css({ 'content': "url(" + agents.data[1].bustPortrait + ") " });
    $('.fondimage').attr("src", "Image/FADE.png");
    $('#div1').text(agents.data[1].displayName)
    $("#message").text(agents.data[1].abilities[0].description)
    $("#message2").text(agents.data[1].abilities[1].description)
    $("#message3").text(agents.data[1].abilities[2].description)
    $("#message4").text(agents.data[1].abilities[3].description)
    $('#message6').text(agents.data[1].description)
    $('#message5').text(agents.data[1].role.description)

  }
};

let btn2 = document.getElementById("btnradio2")

btn2.addEventListener('click', () => {

  AppelAgent2()
});


function AppelAgent3() {

  agenturl = "https://valorant-api.com/v1/agents"

  request = new XMLHttpRequest();

  request.open("GET", agenturl,);

  request.responseType = 'json';

  request.send();

  request.onload = function () {

    agents = request.response;
    console.log(agents);

    $('.intro').css("display", "none")
    $('.intro2').css("display", "none")
    $('.cadre').css("display", "flex")
    $('.img0').css({ 'content': "url(" + agents.data[2].bustPortrait + ") " });
    $('.fondimage').attr("src", "Image/BREACH.png");
    $('#div1').text(agents.data[2].displayName)
    $("#message").text(agents.data[2].abilities[0].description)
    $("#message2").text(agents.data[2].abilities[1].description)
    $("#message3").text(agents.data[2].abilities[2].description)
    $("#message4").text(agents.data[2].abilities[3].description)
    $('#message6').text(agents.data[2].description)
    $('#message5').text(agents.data[2].role.description)

  }
};


let btn3 = document.getElementById("btnradio3")

btn3.addEventListener('click', () => {

  AppelAgent3()
});


function AppelAgent4() {

  agenturl = "https://valorant-api.com/v1/agents"

  request = new XMLHttpRequest();

  request.open("GET", agenturl,);

  request.responseType = 'json';

  request.send();

  request.onload = function () {

    agents = request.response;
    console.log(agents);


    $('.intro').css("display", "none")
    $('.intro2').css("display", "none")
    $('.cadre').css("display", "flex")
    $('.img0').css({ 'content': "url(" + agents.data[3].bustPortrait + ") " });

    $('.fondimage').attr("src", "Image/RAZE.png");
    $('#div1').text(agents.data[3].displayName)
    $("#message").text(agents.data[3].abilities[0].description)
    $("#message2").text(agents.data[3].abilities[1].description)
    $("#message3").text(agents.data[3].abilities[2].description)
    $("#message4").text(agents.data[3].abilities[3].description)
    $('#message6').text(agents.data[3].description)
    $('#message5').text(agents.data[3].role.description)

  }
};


let btn4 = document.getElementById("btnradio4")

btn4.addEventListener('click', () => {

  AppelAgent4()
});



function AppelAgent5() {

  agenturl = "https://valorant-api.com/v1/agents"

  request = new XMLHttpRequest();

  request.open("GET", agenturl,);

  request.responseType = 'json';

  request.send();

  request.onload = function () {

    agents = request.response;
    console.log(agents);


    $('.intro').css("display", "none")
    $('.intro2').css("display", "none")
    $('.cadre').css("display", "flex")
    $('.img0').css({ 'content': "url(" + agents.data[4].bustPortrait + ") " });
    $('.fondimage').attr("src", "Image/CHAMBER.png");
    $('#div1').text(agents.data[4].displayName)
    $("#message").text(agents.data[4].abilities[0].description)
    $("#message2").text(agents.data[4].abilities[1].description)
    $("#message3").text(agents.data[4].abilities[2].description)
    $("#message4").text(agents.data[4].abilities[3].description)
    $('#message6').text(agents.data[4].description)
    $('#message5').text(agents.data[4].role.description)

  }
};


let btn5 = document.getElementById("btnradio5")

btn5.addEventListener('click', () => {

  AppelAgent5()
});


function AppelAgent6() {

  agenturl = "https://valorant-api.com/v1/agents"

  request = new XMLHttpRequest();

  request.open("GET", agenturl,);

  request.responseType = 'json';

  request.send();

  request.onload = function () {

    agents = request.response;
    console.log(agents);


    $('.intro').css("display", "none")
    $('.intro2').css("display", "none")
    $('.cadre').css("display", "flex")
    $('.img0').css({ 'content': "url(" + agents.data[5].bustPortrait + ") " });
    $('.fondimage').attr("src", "Image/KAYO.png");
    $('#div1').text(agents.data[5].displayName)
    $("#message").text(agents.data[5].abilities[0].description)
    $("#message2").text(agents.data[5].abilities[1].description)
    $("#message3").text(agents.data[5].abilities[2].description)
    $("#message4").text(agents.data[5].abilities[3].description)
    $('#message6').text(agents.data[5].description)
    $('#message5').text(agents.data[5].role.description)

  }
};


let btn6 = document.getElementById("btnradio6")

btn6.addEventListener('click', () => {

  AppelAgent6()
});



function AppelAgent7() {

  agenturl = "https://valorant-api.com/v1/agents"

  request = new XMLHttpRequest();

  request.open("GET", agenturl,);

  request.responseType = 'json';

  request.send();

  request.onload = function () {

    agents = request.response;
    console.log(agents);


    $('.intro').css("display", "none")
    $('.intro2').css("display", "none")
    $('.cadre').css("display", "flex")
    $('.img0').css({ 'content': "url(" + agents.data[6].bustPortrait + ") " });
    $('.fondimage').attr("src", "Image/SKYE.png");
    $('#div1').text(agents.data[6].displayName)
    $("#message").text(agents.data[6].abilities[0].description)
    $("#message2").text(agents.data[6].abilities[1].description)
    $("#message3").text(agents.data[6].abilities[2].description)
    $("#message4").text(agents.data[6].abilities[3].description)
    $('#message6').text(agents.data[6].description)
    $('#message5').text(agents.data[6].role.description)

  }
};


let btn7 = document.getElementById("btnradio7")

btn7.addEventListener('click', () => {

  AppelAgent7()
});


function AppelAgent8() {

  agenturl = "https://valorant-api.com/v1/agents"

  request = new XMLHttpRequest();

  request.open("GET", agenturl,);

  request.responseType = 'json';

  request.send();

  request.onload = function () {

    agents = request.response;
    console.log(agents);

    $('.intro').css("display", "none")
    $('.intro2').css("display", "none")
    $('.cadre').css("display", "flex")
    $('.img0').css({ 'content': "url(" + agents.data[7].bustPortrait + ") " });
    $('.fondimage').attr("src", "Image/CYPHER.png");
    $('#div1').text(agents.data[7].displayName)
    $("#message").text(agents.data[7].abilities[0].description)
    $("#message2").text(agents.data[7].abilities[1].description)
    $("#message3").text(agents.data[7].abilities[2].description)
    $("#message4").text(agents.data[7].abilities[3].description)
    $('#message6').text(agents.data[7].description)
    $('#message5').text(agents.data[7].role.description)

  }
};


let btn8 = document.getElementById("btnradio8")

btn8.addEventListener('click', () => {

  AppelAgent8()
});


function AppelAgent9() {

  agenturl = "https://valorant-api.com/v1/agents"

  request = new XMLHttpRequest();

  request.open("GET", agenturl,);

  request.responseType = 'json';

  request.send();

  request.onload = function () {

    agents = request.response;
    console.log(agents);

    $('.intro').css("display", "none")
    $('.intro2').css("display", "none")
    $('.cadre').css("display", "flex")
    $('.img0').css({ 'content': "url(" + agents.data[9].bustPortrait + ") " });
    $('.fondimage').attr("src", "Image/SOVA.png");
    $('#div1').text(agents.data[8].displayName)
    $("#message").text(agents.data[8].abilities[0].description)
    $("#message2").text(agents.data[8].abilities[1].description)
    $("#message3").text(agents.data[8].abilities[2].description)
    $("#message4").text(agents.data[8].abilities[3].description)
    $('#message6').text(agents.data[8].description)
    $('#message5').text(agents.data[9].role.description)

  }
};


let btn9 = document.getElementById("btnradio9")

btn9.addEventListener('click', () => {

  AppelAgent9()
});

function AppelAgent10() {

  agenturl = "https://valorant-api.com/v1/agents"

  request = new XMLHttpRequest();

  request.open("GET", agenturl,);

  request.responseType = 'json';

  request.send();

  request.onload = function () {

    agents = request.response;
    console.log(agents);

    $('.intro').css("display", "none")
    $('.intro2').css("display", "none")
    $('.cadre').css("display", "flex")
    $('.img0').css({ 'content': "url(" + agents.data[10].bustPortrait + ") " });
    $('.fondimage').attr("src", "Image/KILLJOY.png");
    $('#div1').text(agents.data[10].displayName)
    $("#message").text(agents.data[10].abilities[0].description)
    $("#message2").text(agents.data[10].abilities[1].description)
    $("#message3").text(agents.data[10].abilities[2].description)
    $("#message4").text(agents.data[10].abilities[3].description)
    $('#message6').text(agents.data[10].description)
    $('#message5').text(agents.data[10].role.description)

  }
};


let btn10 = document.getElementById("btnradio10")

btn10.addEventListener('click', () => {

  AppelAgent10()
});

function AppelAgent11() {

  agenturl = "https://valorant-api.com/v1/agents"

  request = new XMLHttpRequest();

  request.open("GET", agenturl,);

  request.responseType = 'json';

  request.send();

  request.onload = function () {

    agents = request.response;
    console.log(agents);

    $('.intro').css("display", "none")
    $('.intro2').css("display", "none")
    $('.cadre').css("display", "flex")
    $('.img0').css({ 'content': "url(" + agents.data[11].bustPortrait + ") " });
    $('.fondimage').attr("src", "Image/HARBOR.png");
    $('#div1').text(agents.data[11].displayName)
    $("#message").text(agents.data[11].abilities[0].description)
    $("#message2").text(agents.data[11].abilities[1].description)
    $("#message3").text(agents.data[11].abilities[2].description)
    $("#message4").text(agents.data[11].abilities[3].description)
    $('#message6').text(agents.data[11].description)
    $('#message5').text(agents.data[11].role.description)

  }
};


let btn11 = document.getElementById("btnradio11")

btn11.addEventListener('click', () => {

  AppelAgent11()
});

function AppelAgent12() {

  agenturl = "https://valorant-api.com/v1/agents"

  request = new XMLHttpRequest();

  request.open("GET", agenturl,);

  request.responseType = 'json';

  request.send();

  request.onload = function () {

    agents = request.response;
    console.log(agents);

    $('.intro').css("display", "none")
    $('.intro2').css("display", "none")
    $('.cadre').css("display", "flex")
    $('.img0').css({ 'content': "url(" + agents.data[12].bustPortrait + ") " });
    $('.fondimage').attr("src", "Image/VIPER.png");
    $('#div1').text(agents.data[12].displayName)
    $("#message").text(agents.data[12].abilities[0].description)
    $("#message2").text(agents.data[12].abilities[1].description)
    $("#message3").text(agents.data[12].abilities[2].description)
    $("#message4").text(agents.data[12].abilities[3].description)
    $('#message6').text(agents.data[12].description)
    $('#message5').text(agents.data[12].role.description)

  }
};


let btn12 = document.getElementById("btnradio12")

btn12.addEventListener('click', () => {

  AppelAgent12()
});

function AppelAgent13() {

  agenturl = "https://valorant-api.com/v1/agents"

  request = new XMLHttpRequest();

  request.open("GET", agenturl,);

  request.responseType = 'json';

  request.send();

  request.onload = function () {

    agents = request.response;
    console.log(agents);

    $('.intro').css("display", "none")
    $('.intro2').css("display", "none")
    $('.cadre').css("display", "flex")
    $('.img0').css({ 'content': "url(" + agents.data[13].bustPortrait + ") " });
    $('.fondimage').attr("src", "Image/PHOENIX.png");
    $('#div1').text(agents.data[13].displayName)
    $("#message").text(agents.data[13].abilities[0].description)
    $("#message2").text(agents.data[13].abilities[1].description)
    $("#message3").text(agents.data[13].abilities[2].description)
    $("#message4").text(agents.data[13].abilities[3].description)
    $('#message6').text(agents.data[13].description)
    $('#message5').text(agents.data[13].role.description)

  }
};


let btn13 = document.getElementById("btnradio13")

btn13.addEventListener('click', () => {

  AppelAgent13()
});

function AppelAgent14() {

  agenturl = "https://valorant-api.com/v1/agents"

  request = new XMLHttpRequest();

  request.open("GET", agenturl,);

  request.responseType = 'json';

  request.send();

  request.onload = function () {

    agents = request.response;
    console.log(agents);

    $('.intro').css("display", "none")
    $('.intro2').css("display", "none")
    $('.cadre').css("display", "flex")
    $('.img0').css({ 'content': "url(" + agents.data[14].bustPortrait + ") " });
    $('.fondimage').attr("src", "Image/ASTRA.png");
    $('#div1').text(agents.data[14].displayName)
    $("#message").text(agents.data[14].abilities[0].description)
    $("#message2").text(agents.data[14].abilities[1].description)
    $("#message3").text(agents.data[14].abilities[2].description)
    $("#message4").text(agents.data[14].abilities[3].description)
    $('#message6').text(agents.data[14].description)
    $('#message5').text(agents.data[14].role.description)

  }
};


let btn14 = document.getElementById("btnradio14")

btn14.addEventListener('click', () => {

  AppelAgent14()
});


function AppelAgent15() {

  agenturl = "https://valorant-api.com/v1/agents"

  request = new XMLHttpRequest();

  request.open("GET", agenturl,);

  request.responseType = 'json';

  request.send();

  request.onload = function () {

    agents = request.response;
    console.log(agents);

    $('.intro').css("display", "none")
    $('.intro2').css("display", "none")
    $('.cadre').css("display", "flex")
    $('.img0').css({ 'content': "url(" + agents.data[15].bustPortrait + ") " });
    $('.fondimage').attr("src", "Image/BRINSTONE.png");
    $('#div1').text(agents.data[15].displayName)
    $("#message").text(agents.data[15].abilities[0].description)
    $("#message2").text(agents.data[15].abilities[1].description)
    $("#message3").text(agents.data[15].abilities[2].description)
    $("#message4").text(agents.data[15].abilities[3].description)
    $('#message6').text(agents.data[15].description)
    $('#message5').text(agents.data[15].role.description)

  }
};


let btn15 = document.getElementById("btnradio15")

btn15.addEventListener('click', () => {

  AppelAgent15()
});

function AppelAgent16() {

  agenturl = "https://valorant-api.com/v1/agents"

  request = new XMLHttpRequest();

  request.open("GET", agenturl,);

  request.responseType = 'json';

  request.send();

  request.onload = function () {

    agents = request.response;
    console.log(agents);

    $('.intro').css("display", "none")
    $('.intro2').css("display", "none")
    $('.cadre').css("display", "flex")
    $('.img0').css({ 'content': "url(" + agents.data[16].bustPortrait + ") " });
    $('.fondimage').attr("src", "Image/NEON.png");
    $('#div1').text(agents.data[16].displayName)
    $("#message").text(agents.data[16].abilities[0].description)
    $("#message2").text(agents.data[16].abilities[1].description)
    $("#message3").text(agents.data[16].abilities[2].description)
    $("#message4").text(agents.data[16].abilities[3].description)
    $('#message6').text(agents.data[16].description)
    $('#message5').text(agents.data[16].role.description)

  }
};


let btn16 = document.getElementById("btnradio16")

btn16.addEventListener('click', () => {

  AppelAgent16()
});

function AppelAgent17() {

  agenturl = "https://valorant-api.com/v1/agents"

  request = new XMLHttpRequest();

  request.open("GET", agenturl,);

  request.responseType = 'json';

  request.send();

  request.onload = function () {

    agents = request.response;
    console.log(agents);

    $('.intro').css("display", "none")
    $('.intro2').css("display", "none")
    $('.cadre').css("display", "flex")
    $('.img0').css({ 'content': "url(" + agents.data[17].bustPortrait + ") " });
    $('.fondimage').attr("src", "Image/YOURU.png");
    $('#div1').text(agents.data[17].displayName)
    $("#message").text(agents.data[17].abilities[0].description)
    $("#message2").text(agents.data[17].abilities[1].description)
    $("#message3").text(agents.data[17].abilities[2].description)
    $("#message4").text(agents.data[17].abilities[3].description)
    $('#message6').text(agents.data[17].description)
    $('#message5').text(agents.data[17].role.description)

  }
};


let btn17 = document.getElementById("btnradio17")

btn17.addEventListener('click', () => {

  AppelAgent17()
});

function AppelAgent18() {

  agenturl = "https://valorant-api.com/v1/agents"

  request = new XMLHttpRequest();

  request.open("GET", agenturl,);

  request.responseType = 'json';

  request.send();

  request.onload = function () {

    agents = request.response;
    console.log(agents);

    $('.intro').css("display", "none")
    $('.intro2').css("display", "none")
    $('.cadre').css("display", "flex")
    $('.img0').css({ 'content': "url(" + agents.data[18].bustPortrait + ") " });
    $('.fondimage').attr("src", "Image/SAGE.png");
    $('#div1').text(agents.data[18].displayName)
    $("#message").text(agents.data[18].abilities[0].description)
    $("#message2").text(agents.data[18].abilities[1].description)
    $("#message3").text(agents.data[18].abilities[2].description)
    $("#message4").text(agents.data[18].abilities[3].description)
    $('#message6').text(agents.data[18].description)
    $('#message5').text(agents.data[18].role.description)

  }
};


let btn18 = document.getElementById("btnradio18")

btn18.addEventListener('click', () => {

  AppelAgent18()
});

function AppelAgent19() {

  agenturl = "https://valorant-api.com/v1/agents"

  request = new XMLHttpRequest();

  request.open("GET", agenturl,);

  request.responseType = 'json';

  request.send();

  request.onload = function () {

    agents = request.response;
    console.log(agents);

    $('.intro').css("display", "none")
    $('.intro2').css("display", "none")
    $('.cadre').css("display", "flex")
    $('.img0').css({ 'content': "url(" + agents.data[19].bustPortrait + ") " });
    $('.fondimage').attr("src", "Image/REYNA.png");
    $('#div1').text(agents.data[19].displayName)
    $("#message").text(agents.data[19].abilities[0].description)
    $("#message2").text(agents.data[19].abilities[1].description)
    $("#message3").text(agents.data[19].abilities[2].description)
    $("#message4").text(agents.data[19].abilities[3].description)
    $('#message6').text(agents.data[19].description)
    $('#message5').text(agents.data[19].role.description)

  }
};


let btn19 = document.getElementById("btnradio19")

btn19.addEventListener('click', () => {

  AppelAgent19()
});


function AppelAgent20() {

  agenturl = "https://valorant-api.com/v1/agents"

  request = new XMLHttpRequest();

  request.open("GET", agenturl,);

  request.responseType = 'json';

  request.send();

  request.onload = function () {

    agents = request.response;
    console.log(agents);

    $('.intro').css("display", "none")
    $('.intro2').css("display", "none")
    $('.cadre').css("display", "flex")
    $('.img0').css({ 'content': "url(" + agents.data[20].bustPortrait + ") " });
    $('.fondimage').attr("src", "Image/OMEN.png");

    $('#div1').text(agents.data[20].displayName)
    $("#message").text(agents.data[20].abilities[0].description)
    $("#message2").text(agents.data[20].abilities[1].description)
    $("#message3").text(agents.data[20].abilities[2].description)
    $("#message4").text(agents.data[20].abilities[3].description)
    $('#message6').text(agents.data[20].description)
    $('#message5').text(agents.data[20].role.description)

  }
};


let btn20 = document.getElementById("btnradio20")

btn20.addEventListener('click', () => {

  AppelAgent20()
});


function AppelAgent21() {

  agenturl = "https://valorant-api.com/v1/agents"

  request = new XMLHttpRequest();

  request.open("GET", agenturl,);

  request.responseType = 'json';

  request.send();

  request.onload = function () {

    agents = request.response;
    console.log(agents);

    $('.intro').css("display", "none")
    $('.intro2').css("display", "none")
    $('.cadre').css("display", "flex")
    $('.img0').css({ 'content': "url(" + agents.data[21].bustPortrait + ") " });
    $('.fondimage').attr("src", "Image/JETT.png");
    $('#div1').text(agents.data[21].displayName)
    $("#message").text(agents.data[21].abilities[0].description)
    $("#message2").text(agents.data[21].abilities[2].description)
    $("#message4").text(agents.data[21].abilities[3].description)
    $('#message6').text(agents.data[21].description)
    $('#message5').text(agents.data[21].role.description)

  }
};


let btn21 = document.getElementById("btnradio21")

btn21.addEventListener('click', () => {

  AppelAgent21()
});

//creation d'une fontion de slide dans le tableaux et rotation des boutons//
function affichage() {

  //Appel de la fonction au click sur ma div//
  $("#devoilerMessage").click(function () {
    //donne un slide et affiche ma 2ieme div //
    $("#message").slideToggle("slow");
    //toggle class permet de basculer sur 2 classe css  la premiere indiqué puis sur la deuxieme avec l'evenement au click //
    $("#ir4").toggleClass("down");
  });

  $("#devoilerMessage2").click(function () {
    $("#message2").slideToggle("slow");
    $("#ir5").toggleClass("down");
  });

  $("#devoilerMessage3").click(function () {
    $("#message3").slideToggle("slow");
    $("#ir6").toggleClass("down");
  });

  $("#devoilerMessage4").click(function () {
    $("#message4").slideToggle("slow");
    $("#ir7").toggleClass("down");
  });

  $("#devoilerMessage5").click(function () {
    $("#message5").slideToggle("slow");
    $("#ir3").toggleClass("down");
  });

  $("#devoilerMessage6").click(function () {
    $("#message6").slideToggle("slow");
    $("#ir2").toggleClass("down");
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
  { 'left': '250px' }, 1500);

$('#intro2').css('right', '-10000px');
$('#intro2').animate(
  { 'right': '420px' }, 1500);












