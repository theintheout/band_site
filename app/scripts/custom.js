'use strict';

$(document).ready(function () {
  $('.navbar-nav li a').click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});



// $(document).ready(function instagramFeed()
//    {
//        var userFeed = new Instafeed({
//            get: 'user',
//            userId: 1131851479,
//            limit: 10,
//            resolution: 'standard_resolution',
//            clientId: '6d261e0262ff4b71a7f3eaa523bb8868',
//            accessToken: '1131851479.1677ed0.4eb781f29e0f40f49277e3a1eec10da2',
//            template: '<div class="instafeed"><a href="{{link}}" target="_blank"><img src="{{image}}" /></a></div>'
//        });
//        userFeed.run();
//    });
   
   
   
