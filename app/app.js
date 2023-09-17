
import * as model from "../services/model.js";

function initListeners() {
    let btnID;

 $("nav a").on("click", function(e){
        btnID= e.currentTarget.id;
        pageContentID= btnID;
        
        model.changePageContent(pageContentID);
    });
 $(".footer a").on("click", function(e){
        btnID= e.currentTarget.id;
        pageContentID= btnID + "Content";
        
        model.changePageContent(pageContentID);
    });
   
}
function initURLListener() {
     $(window).on("hashchange",model.changePageContent);
     model.changePageContent();
}

$(document).ready(function() {
    
    initURLListener();

});


window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "20px 10px";
  } else {
    document.getElementById("navbar").style.padding = "30px 10px";
  }
}
$(window).scroll(function(e){
  parallax();
});

function parallax(){
  var scrolled = $(window).scrollTop();
  $('.hero').css('top',-(scrolled*0.0315)+'rem');
  $('.hero > h1').css('top',-(scrolled*-0.005)+'rem');
  $('.hero > h1').css('opacity',1-(scrolled*.00175));
};