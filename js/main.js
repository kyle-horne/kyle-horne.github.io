$(document).ready(function(){

  //Highlight active menu item
  var pathname = window.location.pathname;
  pathname = pathname.match("/.+?(?=/)/");
  if(pathname === null){
    $('.navbar-nav > li.nav-item > a[href="/"]').parent().addClass('active');
  } else {
    $('.navbar-nav > li.nav-item > a[href="'+pathname+'"]').parent().addClass('active');
  }

  //scrollspy sidebar
  $( window ).scroll(function() {
    console.log($('#left-sidebar').offset());
  });

  
});
