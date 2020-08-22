$(document).ready(function(){
  $(".happy").click(function(){
    $(".happy").fadeOut();
    $("#side_author").animate({ opacity: 1 });
    $( "#main_section").animate({ opacity: 1 });

  });
});

function navigation(direction) {
  let img = document.getElementById("photography");
  let current_img = img.getAttribute('data-img');
  let array = {
    "1": "https://imgur.com/33LJH1l.png",
    "2": "https://imgur.com/4LQb8YV.png",
    "3": "https://imgur.com/hCfMt9m.png",
    "4": "https://imgur.com/6VCSQBV.png",
    "5": "https://imgur.com/zVj77ea.png",
  }
  if (direction === "previous") {
    if(parseInt(current_img) > 1) {
      current_img--;
      img.src=array[current_img];
      img.setAttribute("data-img", current_img);
    }else {
      current_img = 5;
      img.src=array[current_img];
      img.setAttribute("data-img", current_img);
    }
  }else if (direction === "next") {
    if(parseInt(current_img) !== 5) {
      current_img++;
      img.src=array[current_img];
      img.setAttribute("data-img", current_img);
    }else {
      current_img = 1;
      img.src=array[current_img];
      img.setAttribute("data-img", current_img);
    }
  }
}