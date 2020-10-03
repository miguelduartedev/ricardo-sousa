console.log('Developed by Luís Conceição: https://www.linkedin.com/in/lu%C3%ADs-c-619364108/')

$(document).ready(function () {
  $("body").fadeIn(1000);
  if (sessionStorage.getItem("photo")) {
    img = sessionStorage.getItem("photo");
    $(".happy").hide();
    $("#author").hide();
    $("#top_menu").animate({ opacity: 1 });
    $("#photography").attr('src', images[img]['url']);
    $("#description").html(images[img]['description']);
    project_handler(img);
    $("#photography").attr("data-img", img);
    $("#photography").animate({ opacity: 1 });
    $("#footer").animate({ opacity: 1 });
    $("#side_author").animate({ opacity: 1 });
  }else {
    $("#photography").attr('src', images[1]['url']);
    $("#photography").attr("data-img", 1);
    $("#description").html(images[1]['description']);
    $(".happy").click(function () {
      $(".happy").fadeOut();
      $("#author").fadeOut();
      $("#top_menu").animate({ opacity: 1 });
      $("#photography").animate({ opacity: 1 });
      $("#footer").animate({ opacity: 1 });
      $("#side_author").animate({ opacity: 1 });
    });
  }
});

document.onkeydown = function (event) {
  switch (event.keyCode) {
    case 37:
      navigation('previous');
      break;
    case 38:
      break;
    case 39:
      navigation('next');
      break;
    case 40:
      break;
  }
};

var images = {
  '1': { 'url': "images/1.jpg", 'description': 'Untitled, 2018', 'project': false },
  '2': { 'url': "images/2.jpg", 'description': 'Untitled, 2020', 'project': false },
  '3': { 'url': "images/3.jpg", 'description': 'Untitled, Things come out of nothing, 2017', 'project': false },
  '4': { 'url': "images/4.jpg", 'description': 'Untitled, Things come out of nothing, 2017', 'project': false },
  '5': { 'url': "images/5.jpg", 'description': 'Untitled, 2020', 'project': false },
  '6': { 'url': "images/6.jpg", 'description': 'Untitled, 2020', 'project': false },
  '7': { 'url': "images/7.jpg", 'description': 'Untitled, 2020', 'project': false },
  '8': { 'url': "images/8.jpg", 'description': 'Untitled, 2020', 'project': false },
  '9': { 'url': "images/9.jpg", 'description': 'Untitled, Like angel, 2018 <br> Inkjet print on fine art cotton paper, nielsen white oak frame', 'project': false },
  '10': { 'url': "images/10.jpg", 'description': 'Untitled, Like angel, 2020', 'project': false },
  '11': { 'url': "images/11.jpg", 'description': 'Untitled, Like angel, 2020', 'project': false },
  '12': { 'url': "images/12.jpg", 'description': 'Untitled, Like angel, 2020', 'project': false },
  '13': { 'url': "images/13.jpg", 'description': 'Heavy water, 2018', 'project': true, 'proj_name' : 'Heavy water', 'proj_position': '1/7' },
  '14': { 'url': "images/14.jpg", 'description': 'Heavy water, 2018', 'project': true, 'proj_name' : 'Heavy water',  'proj_position': '2/7' },
  '15': { 'url': "images/15.jpg", 'description': 'Heavy water, 2018', 'project': true, 'proj_name' : 'Heavy water',  'proj_position': '3/7' },
  '16': { 'url': "images/16.jpg", 'description': 'Heavy water, 2018', 'project': true, 'proj_name' : 'Heavy water',  'proj_position': '4/7' },
  '17': { 'url': "images/17.jpg", 'description': 'Heavy water, 2018', 'project': true, 'proj_name' : 'Heavy water',  'proj_position': '5/7' },
  '18': { 'url': "images/18.jpg", 'description': 'Heavy water, 2018', 'project': true, 'proj_name' : 'Heavy water',  'proj_position': '6/7' },
  '19': { 'url': "images/19.jpg", 'description': 'Heavy water, 2018', 'project': true, 'proj_name' : 'Heavy water',  'proj_position': '7/7' },
  '20': { 'url': "images/20.jpg", 'description': 'Silent gestures, 2018', 'project': true, 'proj_name' : 'Silent gestures',  'proj_position': '1/4' },
  '21': { 'url': "images/21.jpg", 'description': 'Silent gestures, 2018', 'project': true, 'proj_name' : 'Silent gestures',  'proj_position': '2/4' },
  '22': { 'url': "images/22.jpg", 'description': 'Silent gestures, 2018', 'project': true, 'proj_name' : 'Silent gestures',  'proj_position': '3/4' },
  '23': { 'url': "images/23.jpg", 'description': 'Silent gestures, 2018', 'project': true, 'proj_name' : 'Silent gestures',  'proj_position': '4/4' },
  '24': { 'url': "images/24.jpg", 'description': 'Essential oil burner, Silent gestures, 2018', 'project': true, 'proj_name' : 'Silent gestures',  'proj_position': '1/2' },
  '25': { 'url': "images/25.jpg", 'description': 'Essential oil diffuser, Silent gestures, 2018', 'project': true, 'proj_name' : 'Silent gestures',  'proj_position': '2/2' },
};

function navigation(direction) {
  var t0 = performance.now()
  let img = document.getElementById("photography");
  let description = document.getElementById("description");
  let read = document.getElementById("read");
  let counter = document.getElementById("counter");
  let current_img = img.getAttribute('data-img');
  if (direction === "previous") {
    if (parseInt(current_img) > 1) {
      current_img--;
      img.src = images[current_img]['url'];
      img.setAttribute("data-img", current_img);
      description.innerHTML = images[current_img]['description'];
      project_handler(current_img)
      var t1 = performance.now()
      console.log("Call to navigation took " + (t1 - t0) + " milliseconds.")
    } else {
      current_img = 25;
      img.src = images[current_img]['url'];
      img.setAttribute("data-img", current_img);
      description.innerHTML = images[current_img]['description'];
      project_handler(current_img)
      var t1 = performance.now()
      console.log("Call to navigation took " + (t1 - t0) + " milliseconds.")
    }
  } else if (direction === "next") {
    if (parseInt(current_img) !== 25) {
      current_img++;
      img.src = images[current_img]['url'];
      img.setAttribute("data-img", current_img);
      description.innerHTML = images[current_img]['description'];
      project_handler(current_img)
      var t1 = performance.now()
      console.log("Call to navigation took " + (t1 - t0) + " milliseconds.")
    } else {
      current_img = 1;
      img.src = images[current_img]['url'];
      img.setAttribute("data-img", current_img);
      description.innerHTML = images[current_img]['description'];
      project_handler(current_img)
      var t1 = performance.now()
      console.log("Call to navigation took " + (t1 - t0) + " milliseconds.")
    }
  }
}

function project_handler(current_img) {
  try {
    return images[current_img]['project'] ?
    (counter.innerHTML = images[current_img]['proj_position'], counter.style.visibility = 'visible', read.style.visibility = 'visible') : (counter.style.visibility = 'hidden', read.style.visibility = 'hidden');
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
  let img = document.getElementById("photography");
  $('#photography').fadeOut();
  let attribute = img.getAttribute('data-img');
  sessionStorage.setItem('photo', attribute);
  images[attribute]['project'] ? sessionStorage.setItem('project', images[attribute]['proj_name']) : null;
}

function fadeOutBody() {
  $(document).ready(() => {
    $("body").fadeOut(1000);
  });
}