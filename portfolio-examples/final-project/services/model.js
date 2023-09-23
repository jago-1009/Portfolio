export function changePageContent() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#","")
   
    if (pageID != "") {
    $.get(`pages/${pageID}.html`,function(data) {
        console.log("data " + data);
        $("#app").html(data);
    });
  
    console.log(pageID)
}
    
    else {
        $.get(`pages/home.html`, function (data) {
            console.log("data " + data);
            $("#app").html(data);
        })
    }
}