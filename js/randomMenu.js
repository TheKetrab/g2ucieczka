function randomLogo() {
    
    //alert("randomLogo");

    const Max = 3;

    var n   = Math.floor( Math.random() * Max ) + 1;
    var str = "img/logo"+n+".png";

    document.getElementById("logo_img").src = str;

}