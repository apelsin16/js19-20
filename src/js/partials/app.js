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

    $imgs.hide();
    $(imgID).show();
  });


// $.ajax({
//     url: "data.json"
//   }).done(function (data) {
//   // var json = JSON.parse(data);
//   console.log(data);
// });
// Задача 2 - 1
$.getJSON('data.json', {}, function (json) {

   var arrSkills = _.chain(json)
     .map('skills')
     .flattenDeep()
     .uniq()
     .sortBy()
     .value();
   console.log( 'Задача 2 - 1', arrSkills);

});

// Задача 2 - 2

$.getJSON('data.json', {}, function (json) {

  var arrName = _.sortBy(json, function (item) {
    return item.friends;
  });
  var arrNameSorted = _.map(arrName, function (item) {
    return item.name;
  })
  console.log( 'Задача 2 - 2', arrNameSorted);

});

// Задача 2 - 3

$.getJSON('data.json', {}, function (json) {

  var arrFriends = _.map(json, function (item) {
    return item.friends;
  });

   var friendsName = _.map(_.flatMapDeep(arrFriends), function (item) {
     return item.name;
   });

  var arrFriendSorted = _.chain(friendsName)
    .map()
    .uniq()
    .value();
  console.log('Задача 2 - 3', arrFriendSorted);

});




