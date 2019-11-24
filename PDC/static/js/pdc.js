// Gallery Filter script
$(document).ready(function() {
    $(".btn-tag").click(function(eventObject) {
      var tag = $(this).html();
    //   console.log(tag);
      var totalPanel = document.getElementsByClassName("panel").length;
      eventObject.preventDefault();
      for (var x = 1; x <= totalPanel; x++  ){
        // console.log("json: " + JSON.stringify($("#project" + x ).html()));
        if(JSON.stringify($("#project" + x ).html()).indexOf(tag) >= 0 ){
        //   console.log( JSON.stringify($("#project" + x ).html()) );
        console.log(JSON.stringify($("#project" + x ).html()).indexOf(tag));
          $("#project" + x ).hide();
          $("#br" + x ).show();
          $("#project" + x ).fadeIn();
        } else {
          $("#project" + x ).hide();
          $("#br" + x ).hide();
        };
        // console.log(tag);
        //console.log(JSON.stringify($("#project" + x ).html()).indexOf(tag));
      }
      //console.log(tag);
  
    });
    //console.log("total panel: " + document.getElementsByClassName("panel").length );
});
// End of Filter script

// Script for flexible footer
// Actually Very useful
// $(document).ready(function() {
//     var indexPage = $("#landing-carousel")
//     console.log(indexPage.length);
//     if (indexPage.length == 0) {
//         $("#only-on-index").hide();
//     }
// });
// End of Flexible Footer

// Scroll down to hide navbar
$(document).ready(function () {
  
    'use strict';
    
     var c, currentScrollTop = 0,
         navbar = $('#navbar');
  
     $(window).scroll(function () {
        var a = $(window).scrollTop();
        var b = $('#navbar').height();
       
        currentScrollTop = a;
       
        if (c < currentScrollTop && a > b + b) {
            $('#navbar').css("transform", "translateY(-200px)");
        } else if (c > currentScrollTop && !(a <= b)) {
            $('#navbar').css("transform", "");
        }
        c = currentScrollTop;
    });
    
  });
// END OF SCROLL TO HIDE NAVBAR

// Hide the page until completely loaded
$(window).on('load', function() {
    // Animate loader off screen
    $("#cover").fadeOut(950);;
});
// End of hide page until completely loaded


// Responsive function
// TODO: erase shift-right function from logo when screen size is xxxx
$(document).ready(function() {
    var alterClass = function() {
        // window's width
        var ww = document.body.clientWidth;
        // Fix overlapped banner and nav @530
        if (ww <= 530) {
            $('#banner').removeClass('padmefromnav');
            $('#banner').addClass('padmefromnav-sm');
            $('#landing-carousel').removeClass('padmefromnav');
            $('#landing-carousel').addClass('padmefromnav-sm');
            $('#empty-div').removeClass('padmefromnav');
            $('#empty-div').addClass('padmefromnav-sm');
        } else if (ww > 531) {
            $('#banner').removeClass('padmefromnav-sm');
            $('#banner').addClass('padmefromnav');
            $('#landing-carousel').removeClass('padmefromnav-sm');
            $('#landing-carousel').addClass('padmefromnav');
            $('#empty-div').removeClass('padmefromnav');
            $('#empty-div').addClass('padmefromnav-sm');
        };

        // Fix weird right side margin
        if (ww < 578) {
            $('.col-md-4').addClass('no-right-pad');
        };

        if (ww < 625) {
            $('#pdc_logo').removeClass('shift-right');
            // $('#grid-gallery').find('*').addClass('no-right-pad');
        } else if (ww >= 666) {
            $('#pdc_logo').addClass('shift-right');
            $('#pdc_logo').addClass('mx-auto');
            
        };

        if (ww <= 766) {
            // Remove border line from the map element and add padding
            $('#map').removeClass("pr-4");
            // $('#map').removeClass("map-border");
            $('#map_style').removeClass("map-border");
            $('#map_style').css("padding-right", "0px");
            $('#map').css({"height":"20em"});
            $('#company-info').addClass("pl-4");
            $('#company-info').addClass("pt-3");
        } else if (ww > 767) {
            $('#map').addClass("pr-4");
            // $('#map').addClass("map-border");
            $('#map_style').AddClass("map-border");
            $('#map_style').css("padding-right", "15px");
            $('#map').css({"height":"40em"});
            $('#company-info').removeClass("pl-4");
            $('#company-info').removeClass("pt-3");
        };

        if (ww <= 768) {
            // ipad and ipad pro - carousel size
            $('#demo').removeClass('col-md-5');
            $('#demo').addClass('col-md-11');
            // Gallery col-md-11 set all
            $('.panel').addClass('col-md-11');
            // Center profile images of members
            $('#profile > div > div > div').addClass('text-center');
            
        } else if (ww > 769) {
            // ipad and ipad pro - carousel size
            $('#demo').removeClass('col-md-11');
            $('#demo').addClass('col-md-5');
            // Gallery size col-md-5
            $('.panel').removeClass('col-md-11');
            $('.panel').addClass('col-md-7');
            // Move profile images to the left
            $('#profile > div > div > div').removeClass('text-center');
        };
        
        if (ww < 1030) {
            // Get rid of max-height, min-width
            // $('div.carousel-item > img').css({"max-height":"none", "min-width":"auto"});
            // adjust button size
            $(".btn").addClass("btn-sm")
        } else if (ww >= 1031) {
            // $('div.carousel-item > img').css({"max-height":"726px", "min-width":"auto"});
            // adjust button size to large
            $(".btn").removeClass("btn-sm")
            // $('.carousel-inner').addClass('col-md-7');
        };
        
        if (ww < 1160) {
            // Banner
            $('div.imgheader > img').css({"max-height":"400", "min-width":"auto"});
            // Align descriptions
            $('#desc_table').removeClass('align-self-center');
        };

        if (ww <= 1240) {
            // Possible logo?
            $('nav > a > img').removeClass('shift-right');
            $('nav > a > img').addClass('align-self-center');
            $('div > div > div > a > img').css({"margin-top":"0px", "margin-bottom":"0px"});
        } else if (ww > 1241) {
            $('div > div > div > a > img').css({"margin-top":"10px", "margin-bottom":"10px"});
        };


    };
    $(window).resize(function(){
        alterClass();
    });
    // Fire it after page first load
    alterClass();
});