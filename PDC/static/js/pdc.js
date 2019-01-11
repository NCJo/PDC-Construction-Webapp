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