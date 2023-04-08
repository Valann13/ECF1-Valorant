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



function AppelWeapon() {


  //Variable contenant l'url de l'API//
  let weaponurl = "https://valorant-api.com/v1/weapons";

  //envoi les requetes aux serveur//
  let request = new XMLHttpRequest();

  // ouvre la connexion a l url de l'APi//
  request.open("GET", weaponurl,);

  // definit le type de reponse//
  request.responseType = 'json';

  //Envoi de la requete//
  request.send();

  //création d'un fonction qui execucte la requete//
  request.onload = function () {

    let weapons = request.response;
    console.log(weapons);

    //appel de class display none pour enlever l'animation de titre //
    $('.intro').css("display", "none")
    $('.intro2').css("display", "none")
    //appel de class display flex pour afficher les tableaux et info de l arme //
    $('.cadre').css("display", "flex")
    //appel d'un visuel d'arme chargé par l'api //
    $('.img1').css({ 'content': "url(" + weapons.data[0].displayIcon + ") " });
    //appel d'une image pour completer le visuel de l'arme //
    $('.fondimage').attr("src", "Image/ODIN.png");
    //appel du nom d'arme chargé par l'api //
    $('#div1').text(weapons.data[0].displayName)
    //appel de text et image supplementaire//
    $('#message').text(`The Odin is a high-cost machine gun. When using Primary Fire, the Odin's fire rate will increase over the duration the weapon is fired to a maximum amount, but using Alternate Fire will allow the user to shoot at that maximum fire rate immediately..`)
    $('.stat1').attr("src", "Image/odinstat.png");
    $('.damage1').attr("src", "Image/odindamage.png");
    $('#message12').text(`Suppressive, high damage fire with surprising stability. Spray enemies at short range and use alt. fire to make yourself a living turret.`)

  }

};

//creation d'une variable lier a mon bouton avec l'id//
let btn1 = document.getElementById("btnradio1")
//creation d'un evenement au click qui appel la fontion//
btn1.addEventListener('click', () => {

  AppelWeapon()
});





function AppelWeapon2() {

  weaponurl = "https://valorant-api.com/v1/weapons";

  request = new XMLHttpRequest();

  request.open("GET", weaponurl,);

  request.responseType = 'json';

  request.send();



  request.onload = function () {

    weapons = request.response;
    console.log(weapons);


    $('.intro').css("display", "none")
    $('.intro2').css("display", "none")
    $('.cadre').css("display", "flex")
    $('.fondimage').attr("src", "Image/ARES.png");
    $('.img1').css({ 'content': "url(" + weapons.data[1].displayIcon + ") " });
    $('#div1').text(weapons.data[1].displayName)
    $('#message').text(`The Ares is a medium-cost machine gun. Unlike most other guns that gets less accurate as you continuously fire more bullets from them, the Ares is the only gun in the game that gets more accurate as it is continuously fired. `)
    $('.stat1').attr("src", "Image/aresstat.png");
    $('.damage1').attr("src", "Image/aresdamage.png");
    $('#message12').text(`The Ares’ large magazine means it excels at suppressive fire or dealing heavy damage to clustered groups.`)

  }

};

let btn2 = document.getElementById("btnradio2")
btn2.addEventListener('click', () => {

  AppelWeapon2()
});


function AppelWeapon3() {

  weaponurl = "https://valorant-api.com/v1/weapons";

  request = new XMLHttpRequest();

  request.open("GET", weaponurl,);

  request.responseType = 'json';

  request.send();



  request.onload = function () {

    weapons = request.response;
    console.log(weapons);


    $('.intro').css("display", "none")
    $('.intro2').css("display", "none")
    $('.cadre').css("display", "flex")
    $('.fondimage').attr("src", "Image/VANDAL.png");
    $('.img1').css({ 'content': "url(" + weapons.data[2].displayIcon + ") " });
    $('#div1').text(weapons.data[2].displayName)
    $('#message').text(`The Vandal is a high-cost automatic rifle. One of VALORANT's best general-purpose weapons, it is most effective at picking off individual targets at longer ranges due to having no falloff, allowing it to kill any enemy with a single headshot at all ranges. `)
    $('.stat1').attr("src", "Image/vandalstat.png");
    $('.damage1').attr("src", "Image/vandaldamage.png");
    $('#message12').text(`Extended fire results in less stability, however. The Vandal retains high damage over distance and rewards those who focus single shots at a target’s head.`)

  }

};

let btn3 = document.getElementById("btnradio3")
btn3.addEventListener('click', () => {

  AppelWeapon3()
});


function AppelWeapon4() {

  weaponurl = "https://valorant-api.com/v1/weapons";

  request = new XMLHttpRequest();

  request.open("GET", weaponurl,);

  request.responseType = 'json';

  request.send();



  request.onload = function () {

    weapons = request.response;
    console.log(weapons);


    $('.intro').css("display", "none")
    $('.intro2').css("display", "none")
    $('.cadre').css("display", "flex")
    $('.fondimage').attr("src", "Image/BOOLDOG.png");
    $('.img1').css({ 'content': "url(" + weapons.data[3].displayIcon + ") " });
    $('#div1').text(weapons.data[3].displayName)
    $('#message').text(`The Bulldog is a moderately-priced rifle. It has two firing modes, a standard automatic single-bullet primary fire and a semi-automatic burst-mode alternate fire that fires three bullets in an accurate burst at around a fifth of its usual fire rate.`)
    $('.stat1').attr("src", "Image/bulldogstat.png");
    $('.damage1').attr("src", "Image/bulldodamage.png");
    $('#message12').text(`A surefire beast when you can pick your shots. Alt. fire let’s you ADS and spew accurate, short bursts at anyone who tries you from medium to long-range.`)

  }

};

let btn4 = document.getElementById("btnradio4")
btn4.addEventListener('click', () => {

  AppelWeapon4()
});


function AppelWeapon5() {

  weaponurl = "https://valorant-api.com/v1/weapons";

  request = new XMLHttpRequest();

  request.open("GET", weaponurl,);

  request.responseType = 'json';

  request.send();



  request.onload = function () {

    weapons = request.response;
    console.log(weapons);


    $('.intro').css("display", "none")
    $('.intro2').css("display", "none")
    $('.cadre').css("display", "flex")
    $('.fondimage').attr("src", "Image/PHANTOM.png");
    $('.img1').css({ 'content': "url(" + weapons.data[4].displayIcon + ") " });
    $('#div1').text(weapons.data[4].displayName)
    $('#message').text(`The Phantom is a high-cost automatic rifle. One of VALORANT's best general-purpose weapons, it is most effective at short to medium range where it is able to spray down multiple enemies at once due to its high rate of fire. It also comes equipped with a silencer, allowing it to be used to spam through vision blockers without much risk to the player's ammo count or positioning.`)
    $('.stat1').attr("src", "Image/phantomstat.png");
    $('.damage1').attr("src", "Image/phantomdamage.png");
    $('#message12').text(`Go full auto for anyone who tests you up close and short controlled bursts scramble enemies from anywhere. Best when fired while stationary.`)
  }

};

let btn5 = document.getElementById("btnradio5")
btn5.addEventListener('click', () => {

  AppelWeapon5()
});

function AppelWeapon6() {

  weaponurl = "https://valorant-api.com/v1/weapons";

  request = new XMLHttpRequest();

  request.open("GET", weaponurl,);

  request.responseType = 'json';

  request.send();



  request.onload = function () {

    weapons = request.response;
    console.log(weapons);


    $('.intro').css("display", "none")
    $('.intro2').css("display", "none")
    $('.cadre').css("display", "flex")
    $('.fondimage').attr("src", "Image/JUDGE.png");
    $('.img1').css({ 'content': "url(" + weapons.data[5].displayIcon + ") " });
    $('#div1').text(weapons.data[5].displayName)
    $('#message').text(`The Judge is a moderately-priced automatic shotgun. It is best used in situations that put the user in close range against multiple enemies, being able to wipe them out quickly should they risk not clearing such small areas beforehand. As with all shotguns, the Judge has pellet spread that can be reduced by crouching, though the spread still makes it effectively useless at long ranges no matter what. Unlike the other shotguns however, the Judge does not have a distance cap on its pellets and can hit enemies beyond 50 meters.`)
    $('.stat1').attr("src", "Image/judgestat.png");
    $('.damage1').attr("src", "Image/judgadamage.png");
    $('#message12').text(`The Judge is stable at the stand but volatile when fired rapidly. Primary fire hammers short range targets and you’ll need to be steady to nail anything beyond an arm's-length.`)
  }

};

let btn6 = document.getElementById("btnradio6")
btn6.addEventListener('click', () => {

  AppelWeapon6()
});

function AppelWeapon7() {

  weaponurl = "https://valorant-api.com/v1/weapons";

  request = new XMLHttpRequest();

  request.open("GET", weaponurl,);

  request.responseType = 'json';

  request.send();



  request.onload = function () {

    weapons = request.response;
    console.log(weapons);


    $('.intro').css("display", "none")
    $('.intro2').css("display", "none")
    $('.cadre').css("display", "flex")
    $('.fondimage').attr("src", "Image/BUCKY.png");
    $('.img1').css({ 'content': "url(" + weapons.data[6].displayIcon + ") " });
    $('#div1').text(weapons.data[6].displayName)
    $('#message').text(`The Bucky is a low-cost shotgun and the cheapest primary weapon in the game. It has two firing modes, a standard single-shell primary fire and a canister alternate fire that allows the shell to travel a short distance before spraying its pellets instead of immediately spraying from the barrel of the gun, allowing the user to deal some damage to targets at medium range. Shells shot using Alternate Fire only produce a reduced amount of pellets however, and enemies hit by the canister before it reaches the required distance to explode will only take 1 pellet worth of damage.`)
    $('.stat1').attr("src", "Image/buckystat.png");
    $('.damage1').attr("src", "Image/buckydamage.png");
    $('#message12').text(`Heavy but stable, Bucky’s primary fire is for holding tight corners or charging close quarters. Alternate fire strikes targets at medium range.`)
  }

};

let btn7 = document.getElementById("btnradio7")
btn7.addEventListener('click', () => {

  AppelWeapon7()
});


function AppelWeapon10() {

  weaponurl = "https://valorant-api.com/v1/weapons";

  request = new XMLHttpRequest();

  request.open("GET", weaponurl,);

  request.responseType = 'json';

  request.send();



  request.onload = function () {

    weapons = request.response;
    console.log(weapons);


    $('.intro').css("display", "none")
    $('.intro2').css("display", "none")
    $('.cadre').css("display", "flex")
    $('.fondimage').attr("src", "Image/GHOST.png");
    $('.img1').css({ 'content': "url(" + weapons.data[9].displayIcon + ") " });
    $('#div1').text(weapons.data[9].displayName)
    $('#message').text(`The Ghost is a low-cost semi-automatic pistol. Equipped with a large magazine and a silencer, it can be used to spam through vision blockers without much risk to the player's ammo count or positioning.`)
    $('.stat1').attr("src", "Image/ghoststat.png");
    $('.damage1').attr("src", "Image/ghostdamage.png");
    $('#message12').text(`The Ghost is accurate and carries a large magazine if you miss. Distant targets require a controlled fire rate. Quickly tap the trigger when you can see the whites of their eyes.`)

  }

};

let btn10 = document.getElementById("btnradio10")
btn10.addEventListener('click', () => {

  AppelWeapon10()
});

function AppelWeapon11() {

  weaponurl = "https://valorant-api.com/v1/weapons";

  request = new XMLHttpRequest();

  request.open("GET", weaponurl,);

  request.responseType = 'json';

  request.send();



  request.onload = function () {

    weapons = request.response;
    console.log(weapons);


    $('.intro').css("display", "none")
    $('.intro2').css("display", "none")
    $('.cadre').css("display", "flex")
    $('.fondimage').attr("src", "Image/SHERIFF.png");
    $('.img1').css({ 'content': "url(" + weapons.data[10].displayIcon + ") " });
    $('#div1').text(weapons.data[10].displayName)
    $('#message').text(`The Sheriff is a semi-automatic revolver and the most expensive sidearm in the game. Able to kill enemies with a single bullet to the head at most ranges and health totals, it can be used to challenge even enemies who have full-bought. It's high penetration and extra reserve magazine also makes it useful for spamming for wallbangs during pistol or eco rounds. With a low-capacity magazine and low fire rate however, even one missed shot can end up being punishing. The Sheriff's high recoil and spread also promotes exceptional control and precision in order to use it when fighting multiple enemies.`)
    $('.stat1').attr("src", "Image/sheriffstat.png");
    $('.damage1').attr("src", "Image/sheriffdamage.png");
    $('#message12').text(`It’s high-impact rounds pack a ton of recoil and require true grit to master. Wield the Sheriff right, and your enemies will know they were expendable.`)

  }

};

let btn11 = document.getElementById("btnradio11")
btn11.addEventListener('click', () => {

  AppelWeapon11()
});

function AppelWeapon12() {

  weaponurl = "https://valorant-api.com/v1/weapons";

  request = new XMLHttpRequest();

  request.open("GET", weaponurl,);

  request.responseType = 'json';

  request.send();



  request.onload = function () {

    weapons = request.response;
    console.log(weapons);


    $('.intro').css("display", "none")
    $('.intro2').css("display", "none")
    $('.cadre').css("display", "flex")
    $('.fondimage').attr("src", "Image/SHORTY.png");
    $('.img1').css({ 'content': "url(" + weapons.data[11].displayIcon + ") " });
    $('#div1').text(weapons.data[11].displayName)
    $('#message').text(`The Shorty is the cheapest purchasable weapon in the game. As a sidearm equivalent of a shotgun, it is most effective at short range to instantly take an enemy by surprise. With good damage and functionality despite its low price tag, it can even be used to catch out a fully-bought enemy in eco rounds, allowing the player to gain a powerful weapon upgrade for very little investment.`)
    $('.stat1').attr("src", "Image/shortystat.png");
    $('.damage1').attr("src", "Image/shortydamage.png");
    $('#message12').text(`A nimble, short barrel shotgun that is deadly at close range but can only fire twice before needing to reload. Pairs well with long range weapons.`)

  }

};

let btn12 = document.getElementById("btnradio12")
btn12.addEventListener('click', () => {

  AppelWeapon12()
});




function AppelWeapon13() {

  weaponurl = "https://valorant-api.com/v1/weapons";

  request = new XMLHttpRequest();

  request.open("GET", weaponurl,);

  request.responseType = 'json';

  request.send();



  request.onload = function () {

    weapons = request.response;
    console.log(weapons);


    $('.intro').css("display", "none")
    $('.intro2').css("display", "none")
    $('.cadre').css("display", "flex")
    $('.fondimage').attr("src", "Image/OPERATOR.png");
    $('.img1').css({ 'content': "url(" + weapons.data[12].displayIcon + ") " });
    $('#div1').text(weapons.data[12].displayName)
    $('#message').text(`The Operator is a high-cost sniper rifle and the most expensive gun in the game. As a sniper, it has a scope with two zoom settings on its Alternate Fire mode that has perfect accuracy when standing still. The Operator's Primary Fire accuracy on the other hand is extremely inaccurate.`)
    $('.stat1').attr("src", "Image/operatorstat.png");
    $('.damage1').attr("src", "Image/operatordamage.png");
    $('#message12').text(`A fierce bolt-action sniper rifle with high-powered dual zoom. Extremely immobile but fires an incredibly powerful round that can devastate a team with one shot`)

  }

};

let btn13 = document.getElementById("btnradio13")
btn13.addEventListener('click', () => {

  AppelWeapon13()
});

function AppelWeapon14() {

  weaponurl = "https://valorant-api.com/v1/weapons";

  request = new XMLHttpRequest();

  request.open("GET", weaponurl,);

  request.responseType = 'json';

  request.send();



  request.onload = function () {

    weapons = request.response;
    console.log(weapons);


    $('.intro').css("display", "none")
    $('.intro2').css("display", "none")
    $('.cadre').css("display", "flex")
    $('.fondimage').attr("src", "Image/GUARDIAN.png");
    $('.img1').css({ 'content': "url(" + weapons.data[13].displayIcon + ") " });
    $('#div1').text(weapons.data[13].displayName)
    $('#message').text(`The Guardian is a moderately-priced semi-automatic rifle. It is most effective in long-range fights in the hands of players who are confident in their ability to hit headshots at such distances, being more accurate than a Vandal. The Guardian's high penetration also makes it useful for getting wallbang kills. In short to medium range fights however, the Guardian cannot compete with the Phantom or Vandal due to their higher rates of fire.`)
    $('.stat1').attr("src", "Image/guardianstat.png");
    $('.damage1').attr("src", "Image/guardiandamage.png");
    $('#message12').text(`The designated marksman rifle. Heavier and less mobile relative to other rifles but precise and powerful. Headhunt when enemies appear at medium to long distances.`)

  }

};

let btn14 = document.getElementById("btnradio14")
btn14.addEventListener('click', () => {

  AppelWeapon14()
});

function AppelWeapon15() {

  weaponurl = "https://valorant-api.com/v1/weapons";

  request = new XMLHttpRequest();

  request.open("GET", weaponurl,);

  request.responseType = 'json';

  request.send();



  request.onload = function () {

    weapons = request.response;
    console.log(weapons);


    $('.intro').css("display", "none")
    $('.intro2').css("display", "none")
    $('.cadre').css("display", "flex")
    $('.fondimage').attr("src", "Image/MARSHALL.png");
    $('.img1').css({ 'content': "url(" + weapons.data[14].displayIcon + ") " });
    $('#div1').text(weapons.data[14].displayName)
    $('#message').text(`The Marshall is a low cost sniper rifle. As a sniper, it has a scope with a single zoom setting on its Alternate Fire mode that has perfect accuracy when standing still. Despite sniper rifles usually being extremely inaccurate when used in Primary Fire mode, the Marshal is surprisingly accurate in this case, meaning it can be used to take on multiple enemies at once so long as the user can hit their shots.`)
    $('.stat1').attr("src", "Image/marshalstat.png");
    $('.damage1').attr("src", "Image/marshaldamage.png");
    $('#message12').text(`A nimble lever-action sniper rifle with a single zoom that can keep bullish enemies at bay. A slow rate of fire means you have to either hit the mark or leave yourself open to attacks.`)

  }

};

let btn15 = document.getElementById("btnradio15")
btn15.addEventListener('click', () => {

  AppelWeapon15()
});

function AppelWeapon16() {

  weaponurl = "https://valorant-api.com/v1/weapons";

  request = new XMLHttpRequest();

  request.open("GET", weaponurl,);

  request.responseType = 'json';

  request.send();



  request.onload = function () {

    weapons = request.response;
    console.log(weapons);


    $('.intro').css("display", "none")
    $('.intro2').css("display", "none")
    $('.cadre').css("display", "flex")
    $('.fondimage').attr("src", "Image/SPECTRE.png");
    $('.img1').css({ 'content': "url(" + weapons.data[15].displayIcon + ") " });
    $('#div1').text(weapons.data[15].displayName)
    $('#message').text(`The Spectre is a moderately-priced SMG. Equipped with a large magazine and a silencer, it can be used to spam through vision blockers without much risk to the player's ammo count or positioning.`)
    $('.stat1').attr("src", "Image/spectrestat.png");
    $('.damage1').attr("src", "Image/spectredamage.png");
    $('#message12').text(`A jack-of-all-trades weapon with a great balance of damage, fire rate, and accuracy—at both short and mid range. It haunts the corners of every map and requires only steady aim to drop foes at long distance.`)

  }

};

let btn16 = document.getElementById("btnradio16")
btn16.addEventListener('click', () => {

  AppelWeapon16()
});


function AppelWeapon17() {

  weaponurl = "https://valorant-api.com/v1/weapons";

  request = new XMLHttpRequest();

  request.open("GET", weaponurl,);

  request.responseType = 'json';

  request.send();



  request.onload = function () {

    weapons = request.response;
    console.log(weapons);


    $('.intro').css("display", "none")
    $('.intro2').css("display", "none")
    $('.cadre').css("display", "flex")
    $('.fondimage').attr("src", "Image/STINGER.png");
    $('.img1').css({ 'content': "url(" + weapons.data[16].displayIcon + ") " });
    $('#div1').text(weapons.data[15].displayName)
    $('#message').text(`The Stinger is a low-cost SMG. It has two firing modes, a standard automatic single-bullet primary fire and a semi-automatic burst-mode alternate fire that fires four bullets in a burst at around an eighth of its usual fire rate. Alternate fire also increases the distance that falloff damage begins to occur at.`)
    $('.stat1').attr("src", "Image/stingerstat.png");
    $('.damage1').attr("src", "Image/stingerdamage.png");

    
    $('#message12').text(`This SMG is more potent at medium to long range than its counterparts, but at the cost of firing rate and mobility. The 20-round mag gets wasted in recoil-filled sprays, but lands lethal blows at medium distances with ADS and controlled fire.`)


  }

};

let btn17 = document.getElementById("btnradio17")
btn17.addEventListener('click', () => {

  AppelWeapon17()
});

//creation d'une fontion de slide dans le tableaux et rotation des boutons//

function affichage() {
  //Appel de la fonction au click sur ma div//
  $("#revealMessage").click(function () {
    //donne un slide et affiche ma 2ieme div //
    $("#message").slideToggle("slow");
    //toggle class permet de basculer sur 2 classe css  la premiere indiqué puis sur la deuxieme avec l'evenement au click //
    $("#ir8").toggleClass("down");

  });

  $("#revealMessage2").click(function () {
    $("#message2").slideToggle("slow");
    $("#ir9").toggleClass("down");
  });
  $("#revealMessage3").click(function () {
    $("#message3").slideToggle("slow");
    $("#ir10").toggleClass("down");
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
  { 'left': '200px' }, 1500);

$('#intro2').css('right', '-10000px');
$('#intro2').animate(
  { 'right': '300px' }, 1500);
