console.log(
  "Developed by Luís Conceição: https://www.linkedin.com/in/lu%C3%ADs-c-619364108/"
);

document.addEventListener("DOMContentLoaded", function () {
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
  }
});

$(document).ready(function () {
  const queryString = window.location.search;
  $("body").fadeIn(1000);

  if (queryString.replace("?", "") === "overview") {
    $("#side_author, #top_menu, .-active, #footer").css("opacity", "1");
    $(".firstFade").fadeOut("fast");
    $("#main_section").fadeOut("fast");
    $(".landing").fadeOut();
    $("#author").fadeOut();
    $("body").css("height", "100%");
    $("body").css("overview", "hidden");
    $("#overview").fadeIn("slow");
    randomizeImage();
  } else if (queryString.replace("?", "") === "info") {
    $("#side_author, #top_menu, .-active, #footer").css("opacity", "1");
    $(".firstFade").fadeOut("fast");
    $("#main_section").fadeOut("fast");
    $(".landing").fadeOut();
    $("#author").fadeOut();
    $("#info").fadeIn("fast");
    randomizeImage();
  } else {
    // Este mete logo o -active, portanto o outro só corre se este não o adicionar
    var description = document.querySelector("#description");
    document.querySelectorAll(".photography").forEach(image => {
      if (image.dataset.url === queryString.replace("?", "")) {
        if (window.location.hash === '#readme') {
          document.getElementById('readme').style.marginTop = '0';
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
    if ($('#counter').css('visibility') == 'hidden') {
      $('#description').css('margin-bottom', "-20px");
    }
  }
  if (window.innerWidth <= 575.98) {
    document.querySelector('.left').innerHTML = document.querySelector('.left').innerHTML.replace(',', '');
  }
  let currentImg = document.querySelector(".-active");
  document.querySelector("#info_bg").src = currentImg.src;
});

document.onkeydown = function (event) {
  switch (event.keyCode) {
    case 37:
      if (document.getElementById("author").style.display === "none") {
        navigation("previous");
      }
      break;
    case 38:
      break;
    case 39:
      if (document.getElementById("author").style.display === "none") {
        navigation("next");
      }
      break;
    case 40:
      break;
  }
};

// fades out ricardo sousa layer
function hideLanding() {
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
    }
  });
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
        current_img = 25;
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
      if (parseInt(current_img) !== 25) {
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
    if (window.innerWidth <= 575.98) {
      if ($('#counter').css('visibility') == 'hidden') {
        $('#description').css('margin-bottom', "-20px");
      } else {
        $('#description').css('margin-bottom', "10px");
      }
    }
    let currentImg = document.querySelector(".-active");
    document.querySelector("#info_bg").src = currentImg.src;
  }
}

function project_handler(nextImgDOM) {
  try {
    let read = document.querySelector("[data-reference=index]");
    let counter = document.getElementById("counter");
    return nextImgDOM.dataset.project === "true"
      ? ((counter.innerHTML = nextImgDOM.dataset.position),
        (counter.style.visibility = "visible"),
        (read.style.visibility = "visible"))
      : ((counter.style.visibility = "hidden"),
        (read.style.visibility = "hidden"));
  } catch { }
}

function mainToReadMe() {
  $(".firstFade").fadeOut("fast");
  $("#readme").fadeIn("fast").animate({ marginTop: "0" }, { duration: 300, queue: false });
  $("#main_section").animate({ marginTop: "-300%" }, { duration: 300, queue: false }).fadeOut("slow");
  $(".imagesLink").fadeIn({ duration: 300, queue: false });
}

function readMeToMain() {
  reset_mobile_nav();
  $(".imagesLink").fadeOut("fast");
  $("#main_section").fadeIn("fast").animate({ marginTop: "0" }, { duration: 300, queue: false });
  $("#readme").animate({ marginTop: "500%" }, { duration: 300, queue: false }).fadeOut("fast");
  $(".firstFade").fadeIn("fast");
  $("#footer").animate({ opacity: 1 });
}

function mainToInfo() {
  $(".firstFade").fadeOut("fast");
  $("#main_section").fadeOut("fast");
  $("#info").fadeIn("fast");
  refreshParams("info");
}

function infoToMain() {
  reset_mobile_nav();
  $("#info").fadeOut("fast");
  $("#main_section").fadeIn("fast");
  $(".firstFade").fadeIn("fast");
  let currentImg = document.querySelector(".-active");
  document.querySelector("#description").innerHTML = currentImg.dataset.description;
  refreshParams(document.querySelector(".-active").dataset.url);
}

function mainToOverview() {
  sessionStorage.setItem(
    "photo",
    document.querySelector(".-active").dataset.img
  );
  $(".firstFade").fadeOut("fast");
  $("#main_section").fadeOut("fast");
  $("body").css("height", "100%");
  $("body").css("overview", "hidden");
  $("#overview").fadeIn("slow");
  let image = document.querySelector(".-active").dataset.img;
  document.getElementById(image).scrollIntoView();
  refreshParams("overview");
}

function overviewToMain() {
  reset_mobile_nav();
  let body = document.querySelector("body");
  body.style.height = "unset";
  body.style.overflow = "unset";
  $("#overview").fadeOut("fast");
  $("#main_section").fadeIn("fast");
  $(".firstFade").fadeIn("fast");
  refreshParams(document.querySelector(".-active").dataset.url);
}

function reset_mobile_nav() {
  let nav = document.getElementById("mobile_nav");
  if (window.innerWidth <= 767.98) {
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
  console.log(img.dataset);
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
  document.getElementById("readme_title").innerHTML =
    readme_handler[project]["header"];
  document.getElementById("readme_description").innerHTML =
    readme_handler[project]["description"];
}

const heavy_water_header = "Heavy Water <br> Ricardo Sousa";

const heavy_water_description = `An essay exploring how mechanical complications allow mundane objects perform seemlessly, quitely while being very intuitive. <br><br>
With an obsessive attention to detail, specially on the inside, performance and durability, this project has resulted into an object that provides and intruiging and almost magical performance. <br><br>
After two years of development Ensaio 304 is a commercially available faucet, writing a statment regarding the importance of hidden complex intricacies remiding us about the value of tactality.`;

const silent_gestures_header =
  "Silent gestures <br> Ricardo Sousa and André Duarte";

const silent_gestures_description = `Silent gestures started with an uncompromised observation of objects from different
time periods acrossthe
portuguese cultural chain from continental Portugal to its colonies at the Lisbon’s Museum of Ethnology. The
intent was simple yet quite complex, to understand what objects stopped being produced over time, understand
why and if possible present a contemporary perspective that could bring them back in a way that the
contemporary market narratives could embrace them based on the aesthetic, ethic and cultural values.
<br /><br />

During that process the we understood the time specific values of the objects and because of that, bringing
them back based on a revival whim would not create value. However, the traditional techniques weakened with
time could bring intrinsic cultural knowledge back, and by exposing them in a raw yet very eclectic manner
they could be broadly understood and deeply appreciated.<br /><br />

We were immensely attracted by the burners and amulets, objects with ritualistic connotations, some of them
very intimate and personal. This was the turning point, the time where typology and technique collided and the
idea was born. We took fragrance diffusers as a mean to glorify traditional linen, the chosen material due to
its ability to hold liquids yet allowing them to breath.<br /><br />

The design process was headed to the conception of sculptural volumes, each one resembling an hyperbolic
spatial expansion due to its scale, not due to a necessity or the need to achieve an evolved version but
rather to present a contemporary perspective on their aesthetic, meaning as objects, an evaluation for the use
of traditional materials and techniques in the contemporary context, and ultimately the role of design as an
agent for the creation of matter in a world where immateriality seems to be the ultimate vanishing
point.<br /><br />

&nbsp; &nbsp; Who strive - you don’t know how the others strive <br>
&nbsp; &nbsp; To paint a little thing like that you smeared<br>
&nbsp; &nbsp; Carelessly passing with your robes afloat,<br>
&nbsp; &nbsp; Yet do much less, so much less, Someone says,<br>
&nbsp; &nbsp; (I know his name, no matter) - so much less!<br>
&nbsp; &nbsp; Well, less is more (...)<br /><br />

In the poem entitled Andrea del Sarto, written in 1855 by Robert Browning we can read the so acclaimed
expression Less is More. This collection does not intend to create a better version of the objects per se,

and because of that it does deviate from the traditional academical approach to design. However, if design

is intention (Flusser 1993) we may comfortably assert that an object can also be a medium for a message. And
that’s what we intended with each piece, something explicit in the way we made all the components visible,
exposing the mechanism of each part and the symbiotic relations between them and the object 
as a
whole.<br /><br />

In the Diffuser 2 specifically, theres is a process deconstruction by showing the four wires of traditional
linen yarn individually before they become into a cord made from a traditional portuguese technique called
bilros. Records of structure exposition are also clear in Diffuser 1 and Estrutura Vertical.<br /><br />

In the Diffuser 2 specifically, theres is a process deconstruction by showing the four wires of traditional
linen yarn individually before they become into a cord made from a traditional portuguese technique called
bilros. Records of structure exposition are also clear in Diffuser 1 and Estrutura Vertical.`;

var readme_handler = {
  "Heavy water": {
    header: heavy_water_header,
    description: heavy_water_description
  },
  "Silent gestures": {
    header: silent_gestures_header,
    description: silent_gestures_description
  }
};