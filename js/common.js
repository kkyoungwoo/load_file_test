$(function(){
  /*script 영역 html load 사용 예*/
  $("button").click(function(){
    var thisAttr = $(this).attr("class");

    if( thisAttr == "p_tag"){
      $(this).next().load("./load_file.html p");
    }else if( thisAttr == "img_tag"){
      $(this).next().load("./load_file.html img");
    }else if( thisAttr == "a_tag"){
      $(this).next().load("./load_file.html a");
    }

  });

});// document ready
