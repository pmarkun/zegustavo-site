$(document).ready(function () {

  $(".proposta").hover(function (e) {
    console.log(e);
    var item = e.currentTarget

    if ($(item).hasClass("aberta")) {
      $(item).toggleClass("aberta");
      $(item).find(".big").hide();
      $(".proposta:not(.aberta)").show();
    }
    else {
      $(item).toggleClass("aberta");
      $(item).find(".big").show();
      $(".proposta:not(.aberta)").hide();
    }
  })

});
