// Filter script
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
          $("#project" + x ).fadeIn();
        } else {
          $("#project" + x ).hide();
        };
        // console.log(tag);
        //console.log(JSON.stringify($("#project" + x ).html()).indexOf(tag));
      }
      //console.log(tag);
  
    });
    //console.log("total panel: " + document.getElementsByClassName("panel").length );
});
// End of Filter script

// Remove class
// TODO: erase shift-right function from logo when screen size is xxxx
$(document).ready(function() {
    var alterClass = function() {
        // window's width
        var ww = document.body.clientWidth;
        if (ww < 625) {
            $('#pdc_logo').removeClass('shift-right');
            // $('#grid-gallery').find('*').addClass('no-right-pad');
        } else if (ww >= 666) {
            $('#pdc_logo').addClass('shift-right');
            $('#pdc_logo').addClass('mx-auto');
            
        };
        // Fix weird right side margin
        if (ww < 578) {
            $('.col-md-4').addClass('no-right-pad');
        };
        // Get rid of max-height, min-width
        if (ww < 1030) {
            $('div.carousel-item > img').css({"max-height":"none", "min-width":"auto"});
        } else if (ww >= 1031) {
            $('div.carousel-item > img').css({"max-height":"726px", "min-width":"auto"});
            // $('.carousel-inner').addClass('col-md-7');
        };
        
        if (ww < 1160) {
            // Banner
            $('div.imgheader > img').css({"max-height":"400", "min-width":"auto"});
            // Align descriptions
            $('#desc_table').removeClass('align-self-center');
        }
        if (ww <= 768) {
            // ipad and ipad pro - carousel size
            $('#demo').removeClass('col-md-5');
            $('#demo').addClass('col-md-11');
        } else if (ww > 769) {
            $('#demo').removeClass('col-md-11');
            $('#demo').addClass('col-md-5');
        }


        if (ww <= 1240) {
            $('nav > a > img').removeClass('shift-right');
            $('nav > a > img').addClass('align-self-center');
        }
        

    };
    $(window).resize(function(){
        alterClass();
    });
    // Fire it after page first load
    alterClass();
});