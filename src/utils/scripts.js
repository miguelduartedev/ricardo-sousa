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
  let array = {
    "1": "https://imgur.com/inigv1j.jpg",
    "2": "https://imgur.com/Lxu8HJq.jpg",
    "3": "https://imgur.com/r030C4i.jpg",
    "4": "https://imgur.com/AZu2zaw.jpg",
    "5": "https://imgur.com/fGDKsMi.jpg",
  }
  if (direction === "previous") {
    if(parseInt(current_img) > 1) {
      current_img--;
      img.src=array[current_img];
      img.setAttribute("data-img", current_img);
      var t1 = performance.now()
      console.log("Call to navigation took " + (t1 - t0) + " milliseconds.")
    }else {
      current_img = 5;
      img.src=array[current_img];
      img.setAttribute("data-img", current_img);
      var t1 = performance.now()
      console.log("Call to navigation took " + (t1 - t0) + " milliseconds.")
    }
  }else if (direction === "next") {
    if(parseInt(current_img) !== 5) {
      current_img++;
      img.src=array[current_img];
      img.setAttribute("data-img", current_img);
      var t1 = performance.now()
      console.log("Call to navigation took " + (t1 - t0) + " milliseconds.")
    }else {
      current_img = 1;
      img.src=array[current_img];
      img.setAttribute("data-img", current_img);
      var t1 = performance.now()
      console.log("Call to navigation took " + (t1 - t0) + " milliseconds.")
    }
  }
}