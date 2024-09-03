$(Document).ready(function() {
  $(window).scroll(function(){
      if($(this).scrollTop()){
        $('nav').addClass('sticky');
      } else{
        $('nav').removeClass('sticky');

      }
  });
});
function closeBanner() {
document.getElementById("myBanner").style.display = "none";
}
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
function openMenu() {
  document.getElementById("myMenu").style.width = "100%";
}

function closeMenu() {
  document.getElementById("myMenu").style.width = "0%";
}
