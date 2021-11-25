const options ={
edge:'left'
}
document.addEventListener('DOMContentLoaded', function() {
var elems = document.querySelectorAll('.sidenav');
var instances = M.Sidenav.init(elems, options);
});

var myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)crime_username\s*\=\s*([^;]*).*$)|^.*$/, "$1");
if (myCookie == ""){
document.cookie ='crime_username=Joe'
}
myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)crime_username\s*\=\s*([^;]*).*$)|^.*$/, "$1");


$('.white-text').text(myCookie)