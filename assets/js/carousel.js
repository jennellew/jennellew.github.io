$(function() {
  var $t = $(this);
  var $reel      = $('.reel');
  var $galleryimg = $('#main #gallery-img a');
  var $gallerytitle = $('#main h2');
  var $gallerypara1 = $('#main header #paragraph-1');
  var $gallerypara2 = $('#main header #paragraph-2');
  var $gallerybutton = $('#main footer a');

  $('.reel article').on('click', updateText);

  function updateText() {
    var $item = $(this).find('img'),
        imgsrc = $item.data('alt'),
        title = $item.data('title'),
        paragraph1 = $item.attr("data-paragraph1"),
        paragraph2 = $item.attr("data-paragraph2"),
        href = $item.data('href'),
        label = $item.data('label'),
        link = $item.data('link');

    $galleryimg.children('img').attr('src',imgsrc);
    $gallerytitle.empty().text( title );
    $gallerypara1.empty().text( paragraph1 );;
    $gallerypara2.empty().text( paragraph2 );
    
    // Append hyperlinks in text
    if (link) {
      var textToParse, field; 
        if (paragraph1.indexOf('^') > -1) {
          textToParse = paragraph1;
          field = $gallerypara1;
        } else if (paragraph2.indexOf('^') > -1) {
          textToParse = paragraph2;
          field = $gallerypara2;
        }

        var linkedText = $('<a />');
        linkedText.attr("href", link);
      
        var parse = textToParse.split('^');
        linkedText.text(parse[1]);
        field.empty().append(parse[0]).append(linkedText).append(parse[2]);
    }

    // Show button
    if (href) {
      $gallerybutton.show().attr('href', href);
      $gallerybutton.empty().text(label);
    }
    else
      $gallerybutton.hide().attr('href', '');
    };

  $(window).load(function() {
    $('.reel article')[0].click();
  });
});