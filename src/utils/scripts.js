$(document).ready(function(){
  $(".happy").click(function(){
    $(".happy").fadeOut();
    $("#side_author").animate({ opacity: 1 });
    $( "#main_section").animate({ opacity: 1 });

  });
});

function navigation(direction) {
  var t0 = performance.now()
  let img = document.getElementById("photography");
  let current_img = img.getAttribute('data-img');
  if (direction === "previous") {
    if(parseInt(current_img) > 1) {
      current_img--;
      img.src='images/' + current_img + '-min.jpg';
      img.setAttribute("data-img", current_img);
      var t1 = performance.now()
      console.log("Call to navigation took " + (t1 - t0) + " milliseconds.")
    }else {
      current_img = 5;
      img.src='images/' + current_img + '-min.jpg';
      img.setAttribute("data-img", current_img);
      var t1 = performance.now()
      console.log("Call to navigation took " + (t1 - t0) + " milliseconds.")
    }
  }else if (direction === "next") {
    if(parseInt(current_img) !== 5) {
      current_img++;
      img.src='images/' + current_img + '-min.jpg';
      img.setAttribute("data-img", current_img);
      var t1 = performance.now()
      console.log("Call to navigation took " + (t1 - t0) + " milliseconds.")
    }else {
      current_img = 1;
      img.src='images/' + current_img + '-min.jpg';
      img.setAttribute("data-img", current_img);
      var t1 = performance.now()
      console.log("Call to navigation took " + (t1 - t0) + " milliseconds.")
    }
  }
}