'use strict';

var acc = document.getElementsByClassName('accordion');
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle('active');

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === 'block') {
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block';
        }
    };
}

  var $links = $('.pagination-link');

  console.log($links);

 var $imgs = $('.img'),
   imgID,
   currentLink;



  $imgs.hide().first().show();
  $links.first().addClass('link-active');

  $links.on('click', function (e) {
    e.preventDefault();

    currentLink = $(this);

    $links.removeClass('link-active');
    currentLink.addClass('link-active');

    imgID = currentLink.attr('href');

    console.log(imgID);
    $imgs.hide();
    $(imgID).show();
  });


