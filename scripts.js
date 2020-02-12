$(document).ready(function(){
$( "#hover1" ).click(function() {
    $( "#drop1" ).slideToggle( "slow", function() {
      // Animation complete.
    });
  });

$( "#hover2" ).click(function() {
    $( "#drop2" ).slideToggle( "slow", function() {
      // Animation complete.
    });
  });

});