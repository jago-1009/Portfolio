
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