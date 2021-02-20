console.log(
  "Developed by Luís Conceição: https://www.linkedin.com/in/lu%C3%ADs-c-619364108/"
);

var lastScrollTop = 0;

// Scroll Direction Detector
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function () {
  var st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop) {
    // auto-scroll down
    pageScroll(1);
  } else {
    // auto-scroll up
    pageScroll(-1);
  }
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);

var scrollActive = false;

function pageScroll(direction) {
  const queryString = window.location.search;
  const hashString = window.location.hash;
  /* console.log(hashString); */
  if ((queryString.replace("?", "") !== "info") && hashString !== '#readme' && !isMobile()) {
    if (localStorage.getItem('auto-scroll') !== 'false') {
      /* console.log('auto-scroll ativado'); */
      window.scrollBy(0, direction);
      scrolldelay = setTimeout(pageScroll, 20);
    }
  }
}

pageScroll(1);

function isMobile() {
  if (window.innerWidth <= 575.98) {
    return true;
  } else {
    return false;
  }
}

//document.addEventListener("scroll", pageScroll(false));


document.addEventListener("DOMContentLoaded", function () {

  /* function pageScroll() {
    window.scrollBy(0, 1);
    scrolldelay = setTimeout(pageScroll, 10);
  }
  pageScroll(); */
  /*
  var doc = window.document,
    context = doc.querySelector(".js-loop"),
    clones = context.querySelectorAll(".is-clone"),
    disableScroll = false,
    scrollHeight = 0,
    scrollPos = 0,
    clonesHeight = 0,
    i = 0;
 
  function getScrollPos() {
    return (
      (context.pageYOffset || context.scrollTop) - (context.clientTop || 0)
    );
  }
 
  function setScrollPos(pos) {
    context.scrollTop = pos;
  }
 
  function getClonesHeight() {
    clonesHeight = 0;
 
    for (i = 0; i < clones.length; i += 1) {
      clonesHeight = clonesHeight + clones[i].offsetHeight;
    }
 
    return clonesHeight;
  }
 
  function reCalc() {
    scrollPos = getScrollPos();
    scrollHeight = context.scrollHeight;
    clonesHeight = getClonesHeight();
 
    if (scrollPos <= 0) {
      setScrollPos(1); // Scroll 1 pixel to allow upwards scrolling
    }
  }
 
  function scrollUpdate() {
    if (!disableScroll) {
      scrollPos = getScrollPos();
 
      if (clonesHeight + scrollPos >= scrollHeight) {
        // Scroll to the top when you’ve reached the bottom
        setScrollPos(1); // Scroll down 1 pixel to allow upwards scrolling
        disableScroll = true;
      } else if (scrollPos <= 1) {
        // Scroll to the bottom when you reach the top
        setScrollPos(scrollHeight - clonesHeight);
        disableScroll = true;
      }
    }
 
    if (disableScroll) {
      // Disable scroll-jumping for a short time to avoid flickering
      window.setTimeout(function () {
        disableScroll = false;
      }, 40);
    }
  }
 
  function init() {
    reCalc();
    window.requestAnimationFrame(reCalc);
    window.requestAnimationFrame(scrollUpdate);
 
    context.addEventListener(
      "scroll",
      function () {
        window.requestAnimationFrame(reCalc);
        window.requestAnimationFrame(scrollUpdate);
      },
      false
    );
 
    window.addEventListener(
      "resize",
      function () {
        window.requestAnimationFrame(reCalc);
        window.requestAnimationFrame(scrollUpdate);
      },
      false
    );
  }
 
  if (document.readyState !== "loading") {
    init();
  } else {
    doc.addEventListener("DOMContentLoaded", init, false);
  }*/
});

$(document).ready(function () {
  /* function pageScroll() {
    window.scrollBy(0, 1);
    scrolldelay = setTimeout(pageScroll, 10);
  }
  pageScroll(); */
  const queryString = window.location.search;
  $("body").fadeIn(1000);

  if (queryString.replace("?", "") === "overview") {
    if (window.innerWidth <= 575.98) {
      $('html').addClass('-overflowY');
    }
    $("#side_author, #top_menu, .-active, #footer").css("opacity", "1");
    $(".firstFade").fadeOut("fast");
    $("#main_section").fadeOut("fast");
    $(".landing").fadeOut();
    $("#author").fadeOut();
    $("body").css("height", "100%");
    $("body").css("overview", "hidden");
    $("#overview").fadeIn("slow");
    randomizeImage();
    hideLanding(true);
    localStorage.setItem('auto-scroll', true);
    pageScroll(1);
  } else if (queryString.replace("?", "") === "info") {
    /* if (window.innerWidth <= 575.98) {
      $('html').removeClass('-overflow');
    } */
    $("#side_author, #top_menu, .-active, #footer").css("opacity", "1");
    $(".firstFade").fadeOut("fast");
    $("#main_section").fadeOut("fast");
    $(".landing").fadeOut();
    $("#author").fadeOut();
    $("#info").fadeIn("fast");
    randomizeImage();
    hideLanding(true);
  } else {
    if (window.innerWidth <= 575.98) {
      $('html').addClass('-overflowHidden');
    }
    // Location: Gallery
    // Este mete logo o -active, portanto o outro só corre se este não o adicionar
    var description = document.querySelector("#description");
    document.querySelectorAll(".photography").forEach(image => {
      if (image.dataset.url === queryString.replace("?", "")) {
        if (window.location.hash === '#readme') {
          if (window.innerWidth <= 575.98) {
            $('html').removeClass('-overflowHidden');
          }
          document.getElementById('readme').style.marginTop = '0';
          var resdif = (screen.width / screen.height);
          if (resdif >= 1.6) {
            document.getElementById('main_section').style.marginTop = '-100%';
          }
          else {
            document.getElementById('main_section').style.marginTop = '310%';
          }
          image.classList.add("-active");
          textHandler();
          $("#side_author, #top_menu, .-active").css("opacity", "1");
          $(".firstFade").fadeOut("fast");
          $("#main_section").fadeOut("fast");
          $(".landing").fadeOut();
          $("#author").fadeOut();
          $("#counter, [data-reference=index], #description").css("visibility", "visible");
          $("#counter, [data-reference=index], #description").css("opacity", "1");
          $("#description").html(image.dataset.description);
          $("#counter").html(image.dataset.position);
          $(".landing").removeClass('-visible');
          $(".imagesLink").fadeIn();
          $("#readme").animate({ marginTop: "0" }, { duration: 100, queue: true }).promise();
          $("#readme").fadeIn('slow').promise();
          localStorage.setItem('auto-scroll', false);
          hideLanding(true);
        } else {
          image.style.opacity = 0.3;
          description.innerHTML = image.dataset.description;
          project_handler(image);
          image.classList.add("-active");
          description.innerHTML = image.dataset.description;
          hideLanding();
        }
      }
    });

    if (!document.querySelector(".-active")) {
      if (sessionStorage.getItem("photo")) {
        img = sessionStorage.getItem("photo");
        imgInDOM = document.querySelector("[data-img =" + img + "]");
        imgInDOM.style.opacity = 0.3;
        description.innerHTML = imgInDOM.dataset.description;
        $(".landing").hide();
        $("#author").hide();
        $("#top_menu").animate({ opacity: 1 });
        project_handler(imgInDOM);
        imgInDOM.classList.add("-active");
        $(".-active").animate({ opacity: 1 });
        description.innerHTML = imgInDOM.dataset.description;
        $("#footer").animate({ opacity: 1 });
        $("#side_author").animate({ opacity: 1 });
      } else {
        randomizeImage();
        imgInDOM = document.querySelector(".-active");
        imgInDOM.style.opacity = 0.3;
        imgInDOM.animate({
          opacity: 1
        });
        description.innerHTML = imgInDOM.dataset.description;
        hideLanding();
      }
    }
  }
  if (window.innerWidth <= 575.98) {
    reset_mobile_description();
    document.querySelector('.left').innerHTML = document.querySelector('.left').innerHTML.replace(',', '<br>');
  }
  let currentImg = document.querySelector(".-active");
  //document.querySelector("#info_bg").src = currentImg.src;

  // Disable user from bring able to download images
  $("img").on("contextmenu", function () {
    return false;
  });
});

// Change image on arrow key press
document.onkeydown = function (event) {
  let queryString = window.location.search;
  if (document.getElementById("author").style.display === "none" && queryString.replace("?", "") !== "info") {
    switch (event.keyCode) {
      case 37:
        navigation("previous");
        break;
      case 38:
        break;
      case 39:
        navigation("next");
        break;
      case 40:
        break;
    }
  }
};

// fades out ricardo sousa layer
function hideLanding(bool) {
  $(".landing, #nav_next, #nav_previous").click(function () {
    if ($(".landing").hasClass('-visible')) {
      $(".landing").fadeOut();
      $(".landing").removeClass('-visible');
      $("#author").fadeOut();
      $("#top_menu").animate({ opacity: 1 });
      $(".-active").animate({ opacity: 1 });
      $("#footer").animate({ opacity: 1 });
      $("#side_author").animate({ opacity: 1 });
      $("#nav_next, #nav_previous").addClass('-operating');
      $("#nav_next, #nav_previous").css('z-index', 'unset');
    }
  });
  if (bool) {
    if ($(".landing").hasClass('-visible')) {
      $(".landing").fadeOut();
      $(".landing").removeClass('-visible');
      $("#author").fadeOut();
      $("#top_menu").animate({ opacity: 1 });
      $(".-active").animate({ opacity: 1 });
      $("#footer").animate({ opacity: 1 });
      $("#side_author").animate({ opacity: 1 });
      $("#nav_next, #nav_previous").addClass('-operating');
      $("#nav_next, #nav_previous").css('z-index', 'unset');
    }
  }
}

// Randomize imagem

function randomizeImage() {
  const landingImage = Math.floor(Math.random() * 5) + 1;
  sessionStorage.setItem("photo", "img-" + landingImage);
  document.querySelector("[data-img =img-" + landingImage + "]").classList.add("-active");
  document.getElementById("img-" + landingImage).scrollIntoView();
}

function refreshParams(new_query) {
  if (new_query === 'readme') {
    var refresh = window.location.search + "#readme";
    window.history.pushState({ path: refresh }, "", refresh);
  } else if (new_query === 'current_active') {
    var refresh = window.location.protocol + "//" + window.location.host + window.location.pathname + "?" + document.querySelector(".-active").dataset.url;
    window.history.pushState({ path: refresh }, "", refresh);
  } else {
    var refresh = window.location.protocol + "//" + window.location.host + window.location.pathname + "?" + new_query;
    window.history.pushState({ path: refresh }, "", refresh);
  }
}

function navigation(direction) {
  let img = document.querySelector(".-active");
  let description = document.getElementById("description");
  let current_img = img.getAttribute("data-img").split("-")[1];
  hideLanding()
  if (!document.querySelector('.-visible')) {
    if (direction === "previous") {
      if (parseInt(current_img) > 1) {
        current_img--;
        let nextImg = document.querySelector(
          "[data-img= img-" + current_img + "]"
        );
        img.classList.remove("-active");
        nextImg.classList.add("-active");
        description.innerHTML = nextImg.dataset.description;
        project_handler(nextImg);
        refreshParams(nextImg.dataset.url);
      } else {
        current_img = document.querySelectorAll('.photography').length;
        let nextImg = document.querySelector(
          "[data-img= img-" + current_img + "]"
        );
        img.classList.remove("-active");
        nextImg.classList.add("-active");
        description.innerHTML = nextImg.dataset.description;
        project_handler(nextImg);
        refreshParams(nextImg.dataset.url);
      }
    } else if (direction === "next") {
      if (parseInt(current_img) !== document.querySelectorAll('.photography').length) {
        current_img++;
        let nextImg = document.querySelector(
          "[data-img= img-" + current_img + "]"
        );
        img.classList.remove("-active");
        nextImg.classList.add("-active");
        description.innerHTML = nextImg.dataset.description;
        project_handler(nextImg);
        refreshParams(nextImg.dataset.url);
      } else {
        current_img = 1;
        let nextImg = document.querySelector(
          "[data-img= img-" + current_img + "]"
        );
        img.classList.remove("-active");
        nextImg.classList.add("-active");
        description.innerHTML = nextImg.dataset.description;
        project_handler(nextImg);
        refreshParams(nextImg.dataset.url);
      }
    }
    reset_mobile_description();
    let currentImg = document.querySelector(".-active");
  }
}

function mobileDescriptionHandler(read, hide) {
  if (isMobile()) {
    let description = document.getElementById("description");
    if (hide) {
      description.classList.add('-descriptionMargin');
    } else {
      if (description.classList.contains('-descriptionMargin')) {
        description.classList.remove('-descriptionMargin');
      }
    }
  }
}

function project_handler(nextImgDOM) {
  try {
    let read = document.querySelector("[data-reference=index]");
    let counter = document.getElementById("counter");
    return nextImgDOM.dataset.project === "true"
      ? (nextImgDOM.dataset.hastext === "true"
        ? (
          ((counter.innerHTML = nextImgDOM.dataset.position),
            (counter.style.visibility = "visible"),
            mobileDescriptionHandler(read, false),
            (read.style.visibility = "visible"))
        )
        :
        (((counter.innerHTML = nextImgDOM.dataset.position),
          mobileDescriptionHandler(read, true),
          (counter.style.visibility = "visible"),
          (read.style.visibility = "hidden"))))
      : ((counter.style.visibility = "hidden"),
        mobileDescriptionHandler(read, false),
        (read.style.visibility = "hidden"));
  } catch { }
}

function mainToReadMe() {
  $(".firstFade").fadeOut("fast");
  $("#readme").fadeIn(25).animate({ marginTop: "0" }, { duration: 300, queue: false });
  var resdif = (screen.width / screen.height);
  console.log(resdif);
  if (resdif >= 1.6) {
    $("#main_section").animate({ marginTop: "-100%" }, { duration: 380, queue: false }).fadeOut(800);
  }
  else {
    $("#main_section").animate({ marginTop: "-310%" }, { duration: 300, queue: false }).fadeOut(800);
  }
  $(".imagesLink").fadeIn({ duration: 300, queue: false });
  if (window.innerWidth <= 575.98) {
    $('html').removeClass('-overflowHidden');
  }
}

function readMeToMain() {
  window.scrollTo(0, 0);
  reset_mobile_nav();
  $(".imagesLink").fadeOut("fast");
  var resdif = (screen.width / screen.height);
  console.log(resdif);
  if (resdif >= 1.6) {
    $("#readme").animate({ marginTop: "100%" }, { duration: 380, queue: false }).fadeOut(800);
  }
  else {
    $("#readme").animate({ marginTop: "300%" }, { duration: 300, queue: false }).fadeOut(800);
  }
  $("#main_section").fadeIn(25).animate({ marginTop: "0" }, { duration: 380, queue: false });
  $(".firstFade").fadeIn("fast");
  $("#footer").animate({ opacity: 1 });
  hideLanding(true);
  $("#nav_next, #nav_previous").css('z-index', 'unset');
  if (document.querySelector('#readme_title_2')) {
    document.querySelector('#readme_title_2').style.display = 'none';
    document.querySelector('#readme_description_2').style.display = 'none';
  }
  if (window.innerWidth <= 575.98) {
    $('html').addClass('-overflowHidden');
  }
}

function mainToInfo() {
  $(".firstFade").fadeOut("fast");
  $(".gallery_menu, #nav_previous, #nav_next").fadeOut("fast");
  $(".-active").addClass("-infoBG");
  $("#info").fadeIn("fast");
  refreshParams("info");
  if (window.innerWidth <= 575.98) {
    $('html').removeClass('-overflowHidden');
  }
}

function infoToMain() {
  reset_mobile_nav();
  $("#info").fadeOut("fast");
  $("#main_section").fadeIn("fast");
  $("#footer, .gallery_menu, #nav_previous, #nav_next").fadeIn("fast");
  $(".firstFade").fadeIn("fast");
  $(".-active").removeClass("-infoBG");
  let currentImg = document.querySelector(".-active");
  document.querySelector("#description").innerHTML = currentImg.dataset.description;
  refreshParams(document.querySelector(".-active").dataset.url);
  if (window.innerWidth <= 575.98) {
    $('html').addClass('-overflowHidden');
  }
}

function mainToOverview() {
  if (window.innerWidth <= 575.98) {
    $('html').removeClass('-overflowHidden');
    $('html').addClass('-overflowY');
  }
  document.getElementById('menu').classList.add('loading');
  let activeIMG = document.querySelector(".-active");
  document.querySelector("#first_img").src = activeIMG.src;
  document.querySelector("#first_img").setAttribute("data-img", activeIMG.dataset.img);
  document.getElementById(activeIMG.dataset.img).classList.add("-hidden");
  document.getElementById('img-X').classList.remove("-hidden");
  sessionStorage.setItem("photo", activeIMG.dataset.img);
  $("#main_section").fadeOut("normal");
  $(".firstFade").fadeOut("normal");
  setTimeout(function () {
    $("body").css("height", "100%");
    $("body").css("overview", "hidden");
    $("#overview").fadeIn("slow");
    //document.getElementById('img-X').scrollIntoView();
    localStorage.setItem('auto-scroll', true);
    pageScroll(1);
  }, 400);
  let image = document.querySelector(".-active").dataset.img;
  // Scroll to the previous image so the desired image doesn't show at the top
  let anchorIMG = ('img-' + ((parseInt(image.split("-")[1]) - 1)).toString());
  let imgHandler = anchorIMG === 'img-0' ? 'img-1' : anchorIMG;
  refreshParams("overview");
  document.querySelector(":not(.-hidden)").classList.add('last_overview_image');
}

function overviewToMain() {
  if (window.innerWidth <= 575.98) {
    $('html').removeClass('-overflowY');
    $('html').addClass('-overflowHidden');
    reset_mobile_description();
  }
  document.querySelector(".-hidden").classList.remove("-hidden");
  reset_mobile_nav();
  let body = document.querySelector("body");
  body.style.height = "unset";
  body.style.overflow = "unset";
  $("#overview").fadeOut({ queue: true, duration: 5 });
  $("#main_section").fadeIn({ queue: true, duration: 400 });
  $(".firstFade").fadeIn("slow");
  refreshParams(document.querySelector(".-active").dataset.url);
  let currentImg = document.querySelector(".-active");
  //document.querySelector("#info_bg").src = currentImg.src;
  localStorage.setItem('auto-scroll', false);
  document.getElementById('menu').classList.remove('loading');
}

function reset_mobile_description() {
  if ($('#counter').css('visibility') == 'hidden') {
    //$('#description').css('margin-bottom', "-20px");
  } else {
    //$('#description').css('margin-bottom', "10px");
  }
}

function reset_mobile_nav() {
  let nav = document.getElementById("mobile_nav");
  if (window.innerWidth <= 575.98) {
    nav.setAttribute("data-state", "close");
    mobile_nav();
  }
}

function mobile_nav() {
  let nav = document.getElementById("mobile_nav");
  let mobile_menu = document.getElementById("menu");
  let author = document.getElementById("side_author");
  let menu_option = document.getElementById("menu_option");
  if (nav.getAttribute("data-state") === "open") {
    nav.style.transform = "rotate(45deg)";
    author.style.display = "none";
    mobile_menu.style.position = "fixed";
    menu_option.style.display = "block";
    mobile_menu.style.display = "block";
    mobile_menu.style.textAlign = "center";
    mobile_menu.style.width = "100%";
    mobile_menu.style.right = "0";
    nav.setAttribute("data-state", "close");
  } else {
    nav.style.transform = "unset";
    mobile_menu.style.display = "none";
    author.style.display = "block";
    nav.setAttribute("data-state", "open");
  }
}

function setOverviewImg(photo) {
  let previousImg = document.querySelector(".-active");
  let nextImg = document.querySelector(
    "[data-img= " + photo.getAttribute("data-img") + "]"
  );

  previousImg.classList.remove("-active");
  nextImg.classList.add("-active");
  description.innerHTML = nextImg.dataset.description;
  project_handler(nextImg);
}

function setPhotoState() {
  let img = document.querySelector(".-active");
  $(".-active").fadeOut();
  let attribute = img.dataset.img;
  sessionStorage.setItem("photo", attribute);
  img.dataset.project === "true"
    ? sessionStorage.setItem("project", img.dataset.projectname)
    : null;
}

function fadeOutBody() {
  $(document).ready(() => {
    $("body").fadeOut(1000);
  });
}

function restartSession() {
  sessionStorage.removeItem("photo");
  sessionStorage.removeItem("project");
  window.location.href = window.location.href.split("?")[0];
}

// OVERVIEW SCRIPTS

/* function scrollOverview() {
  let image = document.querySelector('.-active').dataset.img;
  console.log(image);
  document.getElementById(image).scrollIntoView();
} */

// READ ME

function textHandler() {
  let project = document.querySelector(".-active").dataset.projectname;
  document.getElementById("readme_title").innerHTML = readme_handler[project]["header"];
  document.getElementById("readme_description").innerHTML = readme_handler[project]["description"];
  if ('header_2' in readme_handler[project]) {
    let second_title = document.getElementById("readme_title_2"),
      second_description = document.getElementById("readme_description_2");
    second_title.innerHTML = readme_handler[project]["header_2"];
    second_description.innerHTML = readme_handler[project]["description_2"];
    second_title.style.display = 'block';
    second_description.style.display = 'block';
  }
}

const heavy_water_header = "Heavy Water <br> Ricardo Sousa and André Duarte";

const heavy_water_description = `An essay exploring how mechanical complications allow mundane objects perform seemlessly, quitely while being very intuitive. <br><br>
With an obsessive attention to detail, specially on the inside, performance and durability, this project has resulted into an object that provides and intruiging and almost magical performance. <br><br>
After two years of development Ensaio 304 is a commercially available faucet, writing a statment regarding the importance of hidden complex intricacies remiding us about the value of tactality.`;

const silent_gestures_header =
  "Silent gestures <br> Ricardo Sousa and André Duarte";

const silent_gestures_header_2 =
  "Óleos, cheiros e objetos que não querem ser humildes <br> Filomena Silvano";

const silent_gestures_description = `Silent Gestures started with an uncompromised observation of objects from different time periods across
the Portuguese cultural chain from continental Portugal to its colonies at the
Lisbon’s Museum of Ethnology. The intent was simple yet quite complex, to note which objects stopped
being produced over time, understand why and if possible present a contemporary perspective we
brought them back with an unapologetically perspective in a way that the current market narratives
could embrace them based on the aesthetic, ethic and cultural values.<br/><br/>

During that process we understood the time specific values of the objects and because of that, bringing
them back based on a revival whim would not create value. However, the traditional techniques
weakened with time could bring intrinsic cultural knowledge back, and by exposing them in a raw yet
very eclectic manner they could be broadly understood and deeply appreciated.<br/><br/>

We were immensely attracted by the burners and amulets, objects with ritualistic connotations, some of
them very intimate and personal. This was the turning point, the time where typology and technique
collided and the idea was born. We took fragrance diffusers as a mean to glorify traditional linen, the
chosen material due to its ability to hold liquids yet allowing them to breath.<br/><br/>

The design process was headed to the conception of sculptural volumes, each one resembling an
hyperbolic spatial expansion due to its scale, not due to a necessity or the need to achieve an evolved
version but rather to present a contemporary perspective on their aesthetic, meaning as objects, an
evaluation for the use of traditional materials and techniques in the contemporary context, and ultimately
the role of design as an agent for the creation of matter in a world where immateriality seems to be the
ultimate vanishing point.<br/><br/>

&nbsp; &nbsp; Who strive - you don’t know how the others strive <br/>
&nbsp; &nbsp; To paint a little thing like that you smeared <br/>
&nbsp; &nbsp; Carelessly passing with your robes afloat, <br/>
&nbsp; &nbsp; Yet do much less, so much less, Someone says, <br/>
&nbsp; &nbsp; (I know his name, no matter) - so much less! <br/>
&nbsp; &nbsp; Well, less is more (…) <br/><br/>

In the poem entitled Andrea del Sarto, written in 1855 by Robert Browning we can read the so acclaimed
expression Less is More. This collection does not intend to create a better version of the objects per se,
and because of that it does deviate from the traditional academical approach to design. However, If
design is intention (Flusser 1993) we may comfortably assert that an object can also be a medium for a
message. And that’s what we intended with each piece, something explicit in the way we made all the
components visible, exposing the mechanism of each part and the symbiotic relations between them
and the object as a whole. <br/><br/>

In the Diffuser 2 specifically, theres is a process deconstruction by showing
the four wires of traditional linen yarn individually before they become into a cord conformed by a
traditional Portuguese technique called bilros. Records of structure exposure are also clear in Diffuser 1
and Estrutura Vertical. <br/><br/>

Silent Gestures plays with time, culture, and with the notion of slow design, and quoting Nassim Taleb it
is far of aiming to be perfect. It aims to be antifragile. <br/><br/>`;

const silent_gestures_description_2 = `O trabalho que precede, desde tempos ancestrais, a existência de uma tela de linho, resulta de uma
sinergia entre os gestos, os instrumentos e a matéria, que se concretiza em itinerários (linhas) e ritmos
únicos, encontrados pelos corpos dos artífices. Esta é uma das lógicas do fazer. Normalmente atribuída
às práticas artesanais, difere radicalmente daquela que parte de uma arquitetónica das formas “puras”,
quase sempre desenhadas e concebidas antes da execução dos objetos (Tim Ingold). <br/><br/>

A primeira vive em empatia com a matéria enquanto a segunda, se possível fosse, prescindiria dos seus
constrangimentos <br/><br/>

Os objetos aqui apresentados contêm em si uma espécie de divergência que resulta da presença destas
duas formas de fazer: o linho, e as suas memórias artesanais, é integrado em objetos cuja concessão foi
dirigida por uma pesquisa formal. Foram desenhados e criados a partir da manipulação digital de
imagens, numa lógica de relação com as matérias em que estas só surgem tardiamente, no momento
em que a experimentação das suas qualidades físicas é indispensável para poder responder ao
desenho inicial. Inserido nesta lógica construtiva, o linho foi desviado das suas rotas ancestrais para
outras que o conduzirão a viver em materialidades que até aqui lhe foram estranhas. <br/><br/>

Estes objetos pretendem, na formulação dos seus fazedores, ser formalmente gritantes. É esse um
objetivo querido e assumido por André Duarte e Ricardo Sousa. Dito de outro modo, pretende-se fazer
uma deslocação da função para o terreno da existência formal; que passa a ser, em si própria, uma
função. Mas as mesmas formas deverão também conseguir cumprir cabalmente a função de difundir
óleos essenciais, pelo que se configura aqui uma sobreposição de funções. A de difundir óleos e odores
– que nos habituámos a ver associada a objetos formalmente discretos – tem de ser harmonizada com
objetos que não querem ter a humildade (Daniel Miller) de desaparecer, nem do nosso campo de visão,
nem do nosso campo de deslocação (veja-se a dimensão da peça constituída por uma circunferência
de linho esticada por dois círculos de latão e suspensa por fios iluminados). Eles fazem questão de
existir, não apenas quando difundem óleos essenciais, mas sempre: antes de tudo isso, as próprias
plataformas de difusão são objetos que pretendem existir. Não são mudos. Talvez por isso possamos
afirmar sem medo que procuram glorificar a formalidade. <br/><br/>

A materialidade – ou se quisermos a existência social da matéria (Ludovic Coupaye e Laurence Douny) –
é assim convocada a existir no seio das contradições que os fazedores quiseram conferir aos objetos. <br/><br/>

As técnicas, não as do fabrico, mas as do uso, são frequentemente inventadas à posteriori – acontece
com os objetos novos, como acontece com objetos deslocados do seu contexto social e cultural inicial;
serão por isso os proprietários das coisas aqui apresentadas que irão construí-las enquanto
materialidades, ao viver as suas divergências e sobreposições.`;

var readme_handler = {
  "Heavy water": {
    header: heavy_water_header,
    description: heavy_water_description
  },
  "Silent gestures": {
    header: silent_gestures_header,
    header_2: silent_gestures_header_2,
    description: silent_gestures_description,
    description_2: silent_gestures_description_2
  }
};