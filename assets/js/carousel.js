$(function() {
  var $reel      = $('.reel');
  var $galleryimg = $('#main #gallery-img a')
  var $gallerytitle = $('#main h2');
  var $gallerypara1 = $('#main header #paragraph-1');
  var $gallerypara2 = $('#main header #paragraph-2');
  var $gallerybutton = $('#main footer a');

 
  $reel.delegate('article', 'click', function(e) {
    var $item = $(this).find('img')
    var imgsrc = $item.data('alt');
    var title = $item.data('title');
    var paragraph1 = $item.data('paragraph1');
    var paragraph2 = $item.data('paragraph2');
    var href = $item.data('href');
    var label = $item.data('label');

    $galleryimg.children('img').attr('src',imgsrc);
    $gallerytitle.empty().text( title );
    $gallerypara1.empty().text( paragraph1 );
    $gallerypara2.empty().text( paragraph2 );

    if (href) {
      $gallerybutton.show().attr('href', href);
      $gallerybutton.empty().text(label);
    }
    else
      $gallerybutton.hide().attr('href', '');

  })
});