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
            $('#grid-gallery').find('*').addClass('no-right-pad');
        } else if (ww >= 666) {
            $('#pdc_logo').addClass('shift-right');
            $('#pdc_logo').addClass('mx-auto');
            
        };
        if (ww < 578) {
            $('.col-md-4').addClass('no-right-pad');
        }

    };
    $(window).resize(function(){
        alterClass();
    });
    // Fire it after page first load
    alterClass();
});