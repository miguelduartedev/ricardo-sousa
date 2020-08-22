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
  if (direction === "previous") {
    if(parseInt(current_img) > 1) {
      current_img--;
      img.src='images/' + current_img + '-min.jpg';
      img.setAttribute("data-img", current_img);
    }else {
      current_img = 5;
      img.src='images/' + current_img + '-min.jpg';
      img.setAttribute("data-img", current_img);
    }
  }else if (direction === "next") {
    if(parseInt(current_img) !== 5) {
      current_img++;
      img.src='images/' + current_img + '-min.jpg';
      img.setAttribute("data-img", current_img);
    }else {
      current_img = 1;
      img.src='images/' + current_img + '-min.jpg';
      img.setAttribute("data-img", current_img);
    }
  }
}