// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   if (n > x.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = x.length} ;
//   for (i = 0; i < x.length; i++) {
//      x[i].style.display = "none";  
//   }
//   x[slideIndex-1].style.display = "block";  
// }

$('.mySlides').each(function() {
  var $x = $(this),
      $forward = $x.children(".btn-floating.right"),
      $backward = $x.children(".btn-floating.left"),
      $slideChildren = $x.children("[href]"),
      length = $slideChildren.length,
      slideIndex = 1;

  showDivs(slideIndex);

  $forward.on('click', function(){plusDivs(1)});
  $backward.on('click', function(){plusDivs(-1)});

  function plusDivs(n) {
    showDivs(slideIndex += n);
  }

  function showDivs(n) {
    
    //
    var i;
    if (n > length) {slideIndex = 1}    
    if (n < 1) {slideIndex = length} ;
    for (i = 0; i < length; i++) {
      $slideChildren[i].style.display = "none"; 
    }
    $slideChildren[slideIndex-1].style.display = "block";
  }
}); 