var pathname = window.location.pathname;
var home = document.getElementById("home");
var blog = document.getElementById("blog");
var contact = document.getElementById("contact");

if (pathname == "/index.html"){
    home.style.color = "rgb(27, 27, 236)"
}
else if (pathname == "/blog.html"){
    blog.style.color = "rgb(27, 27, 236)"
}
else if (pathname == "/contact.html"){
    contact.style.color = "rgb(27, 27, 236)"
}
// Desplazamiento hacía arriba suave
$("#but").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});