$(document).ready(function() {
  /* HAMBURGER MENU */
  myelement = "1";
  var i = 180;
  function myLoop(arrow) {
    console.log(arrow);
    setTimeout(function() {
      if (i < 365 && i > 180) {
        $(arrow).css({ transform: "rotate(" + i + "deg)" });
        $(".menu-arrow")
          .not(arrow)
          .css({ transform: "rotate(180deg)" });
        i = i + 5;
        myLoop(arrow);
      } else if (i > 366 && i < 545) {
        $(arrow).css({ transform: "rotate(" + i + "deg)" });
        $(".menu-arrow")
          .not(arrow)
          .css({ transform: "rotate(180deg)" });
        i = i + 5;
        if (i > 545) {
          i = 180;
        }
        myLoop(arrow);
      }
    }, 1);
  }
  var x = 1;
  $("#hamburger , .overlay-effect").click(function() {
    if (x == 1) {
      $("#mobile-menu, .overlay-effect, .hamburger-line, body,.mobile-menu-content")
        .clearQueue()
        .stop();
      $("#mobile-menu").animate({ width: "85%" });
      $(".overlay-effect").animate({ width: "100%" }, 0);
      $(".hamburger-line").addClass("blue");
      $("body").addClass("overflow");
      setTimeout(function() {
        $(".mobile-menu-content").fadeIn(300);
      }, 300);
      x = 2;
    } else {
      $("#mobile-menu, .overlay-effect, .hamburger-line, body,.mobile-menu-content")
        .clearQueue()
        .stop();
      $(".mobile-menu-content").fadeOut(0);
      $("#mobile-menu").animate({ width: "0" });
      $(".overlay-effect").animate({ width: "0" }, 0);
      $(".hamburger-line").removeClass("blue");
      $("body").removeClass("overflow");
      x = 1;
    }
  });
  /* END OF HAMBURGER MENU */

  $("#dropBtn1, #dropBtn2, #dropBtn3, #dropBtn4, #dropBtn5").click(function() {
    $(this)
      .next()
      .slideToggle(300);
    $("#dropBtn1, #dropBtn2, #dropBtn3, #dropBtn4, #dropBtn5")
      .not(this)
      .next()
      .slideUp(300);
    $("#dropBtn1, #dropBtn2, #dropBtn3, #dropBtn4, #dropBtn5")
      .not(this)
      .removeClass("activeDrop");
    $(this).addClass("activeDrop");
    $(".menu-arrow", this).addClass("arrow-hover");
    $("#dropBtn1, #dropBtn2, #dropBtn3, #dropBtn4, #dropBtn5")
      .not(this)
      .addClass("grison");
    $(this).removeClass("grison");
    i++;
    arrow = $(".menu-arrow", this);
    allarrow = $(".menu-arrow").not(".menu-arrow", this);
    myLoop(arrow);
  });
  /*$("#dropBtn2").click(function() {
    $("#drop2").slideToggle(300);
    $("#dropBtn2").addClass("activeDrop");
    $("#arrow2").css({ "background-image": "url(../img/whiteUpArrow.png)" });
    i++;
    myLoop();
  });*/
});

/*$("#mobile-menu").css({
  width: $("#mobile-menu").width("85%")
});
$(".overlay-effect").css({
  width: $(".overlay-effect").width("100%")
});

$(".overlay-effect").click(function() {
  $("#mobile-menu").css({
    width: $("#mobile-menu").width("85%")
  });
  $(".overlay-effect").css({
    width: $(".overlay-effect").width("100%")
  });
  $("#mobile-menu").animate({ width: "toggle" });
  $(".overlay-effect").animate({ width: "toggle" }, 0);
});
$("#hamburger").click(function() {
  $(".hamburger-line").toggleClass("blue");
  $("body").toggleClass("overflow");
});
$(".overlay-effect").click(function() {
  $(".hamburger-line").removeClass("blue");
  $("body").removeClass("overflow");
});
*/
