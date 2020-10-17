console.log('Developed by Luís Conceição: https://www.linkedin.com/in/lu%C3%ADs-c-619364108/')

$(document).ready(function () {

  function preload(imageArray, index) {
    index = index || 0;
    if (imageArray && imageArray.length > index) {
        var img = new Image ();
        img.onload = function() {
            preload(imageArray, index + 1);
        }
        img.src = preLoad[index];
    }
  }
  /* images is an array with image metadata */
  //preload(preLoad);

  $("body").fadeIn(1000);
  var description = document.querySelector('#description');
  if (sessionStorage.getItem("photo")) {
    img = sessionStorage.getItem("photo");
    imgInDOM = document.querySelector('[data-img =' + img + ']');
    imgInDOM.style.opacity = 0.3; 
    description.innerHTML = imgInDOM.dataset.description;
    $(".happy").hide();
    $("#author").hide();
    $("#top_menu").animate({ opacity: 1 });
    project_handler(imgInDOM);
    imgInDOM.classList.add('-active');
    $(".-active").animate({ opacity: 1 });
    description.innerHTML = imgInDOM.dataset.description;

    $("#footer").animate({ opacity: 1 });
    $("#side_author").animate({ opacity: 1 });
  }else {
    sessionStorage.setItem('photo', 'img-1');
    imgInDOM = document.querySelector('[data-img=img-1]');
    imgInDOM.style.opacity = 0.3;
    imgInDOM.classList.add('-active');
    imgInDOM.animate({ opacity: 1 });
    description.innerHTML = imgInDOM.dataset.description;
    //$("#description").html(images[1]['description']);
    $(".happy").click(function () {
      $(".happy").fadeOut();
      $("#author").fadeOut();
      $("#top_menu").animate({ opacity: 1 });
      $(".-active").animate({ opacity: 1 });
      $("#footer").animate({ opacity: 1 });
      $("#side_author").animate({ opacity: 1 });
    });
  }
});

document.onkeydown = function (event) {
  switch (event.keyCode) {
    case 37:
      if (document.getElementById('author').style.display === "none") {
        navigation('previous');
      }
      break;
    case 38:
      break;
    case 39:
      if (document.getElementById('author').style.display === "none") {
        navigation('next');
      }
      break;
    case 40:
      break;
  }
};

function navigation(direction) {
  let img = document.querySelector(".-active");
  let description = document.getElementById("description");
  let read = document.getElementById("read");
  let counter = document.getElementById("counter");
  let current_img = img.getAttribute('data-img').split('-')[1];
  if (direction === "previous") {
    if (parseInt(current_img) > 1) {
      current_img--;
      let nextImg = document.querySelector('[data-img= img-' + current_img + ']');
      img.classList.remove('-active');
      nextImg.classList.add('-active');
      description.innerHTML = nextImg.dataset.description;
      project_handler(nextImg);
    } else {
      current_img = 25;
      let nextImg = document.querySelector('[data-img= img-' + current_img + ']');
      img.classList.remove('-active');
      nextImg.classList.add('-active');
      description.innerHTML = nextImg.dataset.description;
      project_handler(nextImg)
    }
  } else if (direction === "next") {
    if (parseInt(current_img) !== 25) {
      current_img++;
      let nextImg = document.querySelector('[data-img= img-' + current_img + ']');
      img.classList.remove('-active');
      nextImg.classList.add('-active');
      description.innerHTML = nextImg.dataset.description;
      project_handler(nextImg)
    } else {
      current_img = 1;
      let nextImg = document.querySelector('[data-img= img-' + current_img + ']');
      img.classList.remove('-active');
      nextImg.classList.add('-active');
      description.innerHTML = nextImg.dataset.description;
      project_handler(nextImg)
    }
  }
}

function project_handler(nextImgDOM) {
  try {
    return nextImgDOM.dataset.project === 'true' ?
    (counter.innerHTML = nextImgDOM.dataset.position, counter.style.visibility = 'visible', read.style.visibility = 'visible') : (counter.style.visibility = 'hidden', read.style.visibility = 'hidden');
  } catch {
  }
}

function mobile_nav() {
  let nav = document.getElementById("mobile_nav");
  let mobile_menu = document.getElementById('menu');
  let author = document.getElementById('side_author');
  let menu_option = document.getElementById('menu_option');
  if(nav.getAttribute('data-state') === 'open') {
    nav.style.transform = "rotate(45deg)";
    author.style.display = "none";
    mobile_menu.style.position = "fixed";
    menu_option.style.display = "block";
    mobile_menu.style.display = "block";
    mobile_menu.style.textAlign = "center";
    mobile_menu.style.width = "100%";
    mobile_menu.style.right = "0";
    nav.setAttribute('data-state', 'close');
  }else {
    nav.style.transform = "unset";
    mobile_menu.style.display = "none";
    author.style.display = "block";
    nav.setAttribute('data-state', 'open');
  }
}

function setPhotoState() {
  let img = document.querySelector('.-active');
  console.log(img.dataset);
  $('.-active').fadeOut();
  let attribute = img.dataset.img;
  sessionStorage.setItem('photo', attribute);
  img.dataset.project === 'true' ? sessionStorage.setItem('project', img.dataset.projectname) : null;
}

function fadeOutBody() {
  $(document).ready(() => {
    $("body").fadeOut(1000);
  });
}